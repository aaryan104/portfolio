from beanie import Document
from pydantic import Field, EmailStr
from datetime import datetime

class ContactSubmission(Document):
    name: str = Field(..., min_length=2)
    email: EmailStr
    subject: str = Field(..., min_length=3)
    message: str = Field(..., min_length=10)
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Settings:
        name = "contact_submissions"
