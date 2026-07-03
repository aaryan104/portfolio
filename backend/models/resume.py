from beanie import Document
from pydantic import Field
from datetime import datetime

class ResumeDownload(Document):
    timestamp: datetime = Field(default_factory=datetime.utcnow)

    class Settings:
        name = "resume_downloads"
