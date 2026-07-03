from fastapi import APIRouter, Request, HTTPException, status
from pydantic import BaseModel, EmailStr
from models.contact import ContactSubmission
from config import settings
from limiter import limiter
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import resend
import logging

logger = logging.getLogger("portfolio_contact")
router = APIRouter(prefix="/api/contact", tags=["Contact"])

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

async def send_email_notification(submission: ContactRequest):
    body = f"""
    New Portfolio Contact Submission:
    
    Name: {submission.name}
    Email: {submission.email}
    Subject: {submission.subject}
    
    Message:
    {submission.message}
    """

    # 1. Resend API Attempt
    if settings.RESEND_API_KEY:
        try:
            resend.api_key = settings.RESEND_API_KEY
            resend.Emails.send({
                "from": "onboarding@resend.dev",  # Resend default sandbox sender
                "to": settings.NOTIFY_EMAIL,
                "subject": f"Portfolio Contact: {submission.subject}",
                "text": body,
            })
            logger.info("Notification email dispatched via Resend API")
            return True
        except Exception as e:
            logger.error(f"Resend API send failed: {e}")

    # 2. SMTP fallback
    if settings.SMTP_USERNAME and settings.SMTP_PASSWORD:
        try:
            msg = MIMEMultipart()
            msg["From"] = settings.SMTP_USERNAME
            msg["To"] = settings.NOTIFY_EMAIL
            msg["Subject"] = f"Portfolio Contact: {submission.subject}"
            msg.attach(MIMEText(body, "plain"))

            await aiosmtplib.send(
                msg,
                hostname=settings.SMTP_HOST,
                port=settings.SMTP_PORT,
                username=settings.SMTP_USERNAME,
                password=settings.SMTP_PASSWORD,
                starttls=True if settings.SMTP_PORT == 587 else False
            )
            logger.info("Notification email dispatched via SMTP")
            return True
        except Exception as e:
            logger.error(f"SMTP send failed: {e}")

    logger.warning("No email channel was configured. Notification skipped.")
    return False

@router.post("")
@limiter.limit("5/hour")
async def submit_contact(request: Request, submission: ContactRequest):
    # Log to MongoDB
    try:
        db_submission = ContactSubmission(
            name=submission.name,
            email=submission.email,
            subject=submission.subject,
            message=submission.message
        )
        await db_submission.insert()
    except Exception as e:
        logger.error(f"Failed to record contact request in DB: {e}")
        # We do not crash the request if database logging fails, we proceed to email
        
    # Send email notification
    await send_email_notification(submission)
    
    return {"status": "success", "message": "Your message has been successfully logged."}
