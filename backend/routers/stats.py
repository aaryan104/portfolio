from fastapi import APIRouter, HTTPException
from cache import redis_cache
import httpx
import json
import re
import logging

logger = logging.getLogger("portfolio_stats")
router = APIRouter(prefix="/api/stats", tags=["Stats"])

GITHUB_USERNAME = "aaryan104"

@router.get("/github")
async def get_github_stats():
    cache_key = "stats:github"
    cached = await redis_cache.get(cache_key)
    if cached:
        try:
            return json.loads(cached)
        except Exception:
            pass

    data = {
        "contributions": 0,
        "repos": 0,
        "followers": 0,
        "topLanguage": ""
    }

    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            # 1. Fetch GitHub general user statistics
            res_user = await client.get(f"https://api.github.com/users/{GITHUB_USERNAME}")
            if res_user.status_code != 200:
                raise HTTPException(status_code=503, detail="GitHub API unavailable")
            
            user_json = res_user.json()
            data["repos"] = user_json.get("public_repos", 0)
            data["followers"] = user_json.get("followers", 0)

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
            return data
    except Exception as e:
        logger.error(f"Error fetching live GitHub statistics: {e}")
        raise HTTPException(status_code=503, detail=f"GitHub API error: {str(e)}")
