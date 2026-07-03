from fastapi import APIRouter
from cache import redis_cache
import httpx
import json
import re
import logging

logger = logging.getLogger("portfolio_stats")
router = APIRouter(prefix="/api/stats", tags=["Stats"])

GITHUB_USERNAME = "AaryanMangukiya"
LEETCODE_USERNAME = "AaryanMangukiya"

@router.get("/github")
async def get_github_stats():
    cache_key = "stats:github"
    cached = await redis_cache.get(cache_key)
    if cached:
        try:
            return json.loads(cached)
        except Exception:
            pass

    # Static fallback values
    data = {
        "contributions": 320,
        "repos": 18,
        "followers": 12,
        "topLanguage": "TypeScript"
    }

    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            # 1. Fetch GitHub general user statistics
            res_user = await client.get(f"https://api.github.com/users/{GITHUB_USERNAME}")
            if res_user.status_code == 200:
                user_json = res_user.json()
                data["repos"] = user_json.get("public_repos", data["repos"])
                data["followers"] = user_json.get("followers", data["followers"])

            # 2. Fetch repos to determine top language dynamically
            res_repos = await client.get(f"https://api.github.com/users/{GITHUB_USERNAME}/repos?per_page=100")
            if res_repos.status_code == 200:
                repos_list = res_repos.json()
                languages = {}
                for repo in repos_list:
                    lang = repo.get("language")
                    if lang:
                        languages[lang] = languages.get(lang, 0) + 1
                if languages:
                    data["topLanguage"] = max(languages, key=languages.get)

            # 3. Scrape contribution count from GitHub contributions graph
            res_contrib = await client.get(f"https://github.com/users/{GITHUB_USERNAME}/contributions")
            if res_contrib.status_code == 200:
                match = re.search(r"(\d+[\d,]*)\s+contributions", res_contrib.text)
                if match:
                    data["contributions"] = int(match.group(1).replace(",", ""))

        # Store in Redis
        await redis_cache.set(cache_key, json.dumps(data), ttl=3600)
    except Exception as e:
        logger.error(f"Error fetching live GitHub statistics: {e}")

    return data

@router.get("/leetcode")
async def get_leetcode_stats():
    cache_key = "stats:leetcode"
    cached = await redis_cache.get(cache_key)
    if cached:
        try:
            return json.loads(cached)
        except Exception:
            pass

    # Static fallback values
    data = {
        "totalSolved": 145,
        "easySolved": 50,
        "mediumSolved": 75,
        "hardSolved": 20,
        "ranking": 120000,
        "acceptanceRate": 64.5
    }

    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            res = await client.get(f"https://leetcode-stats-api.herokuapp.com/{LEETCODE_USERNAME}")
            if res.status_code == 200:
                lc_json = res.json()
                if lc_json.get("status") == "success":
                    data["totalSolved"] = lc_json.get("totalSolved", data["totalSolved"])
                    data["easySolved"] = lc_json.get("easySolved", data["easySolved"])
                    data["mediumSolved"] = lc_json.get("mediumSolved", data["mediumSolved"])
                    data["hardSolved"] = lc_json.get("hardSolved", data["hardSolved"])
                    data["ranking"] = lc_json.get("ranking", data["ranking"])
                    data["acceptanceRate"] = lc_json.get("acceptanceRate", data["acceptanceRate"])

        # Store in Redis
        await redis_cache.set(cache_key, json.dumps(data), ttl=3600)
    except Exception as e:
        logger.error(f"Error fetching live LeetCode statistics: {e}")

    return data
