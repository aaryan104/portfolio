from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from config import settings
from models.contact import ContactSubmission
from models.resume import ResumeDownload

async def init_db():
    client = AsyncIOMotorClient(settings.MONGODB_URI)
    # Beanie uses the default database specified in the connection string
    db = client.get_default_database()
    await init_beanie(
        database=db,
        document_models=[ContactSubmission, ResumeDownload]
    )
