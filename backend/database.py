from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from config import settings
from models.contact import ContactSubmission
from models.resume import ResumeDownload

async def init_db():
    client = AsyncIOMotorClient(settings.MONGODB_URI)
    try:
        # Check if default database is specified in connection string
        db = client.get_default_database()
    except Exception:
        # Fallback database if no database name is defined in the URL path
        db = client["portfolio"]
        
    await init_beanie(
        database=db,
        document_models=[ContactSubmission, ResumeDownload]
    )
