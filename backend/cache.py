import redis.asyncio as aioredis
import logging
from config import settings
from typing import Optional

logger = logging.getLogger("portfolio_cache")

class RedisCache:
    def __init__(self):
        self.client: Optional[aioredis.Redis] = None

    async def connect(self):
        try:
            self.client = aioredis.from_url(settings.REDIS_URL, decode_responses=True)
            await self.client.ping()
            logger.info("Connected to Redis successfully")
        except Exception as e:
            logger.warning(f"Failed to connect to Redis: {e}. Falling back to no-cache mode.")
            self.client = None

    async def get(self, key: str) -> Optional[str]:
        if not self.client:
            return None
        try:
            return await self.client.get(key)
        except Exception as e:
            logger.error(f"Redis get error for key '{key}': {e}")
            return None

    async def set(self, key: str, value: str, ttl: int = 3600):
        if not self.client:
            return
        try:
            await self.client.set(key, value, ex=ttl)
        except Exception as e:
            logger.error(f"Redis set error for key '{key}': {e}")

redis_cache = RedisCache()
