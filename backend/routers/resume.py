from fastapi import APIRouter
from models.resume import ResumeDownload
import logging

logger = logging.getLogger("portfolio_resume")
router = APIRouter(prefix="/api/resume", tags=["Resume"])

@router.post("/download")
async def track_download():
    try:
        download = ResumeDownload()
        await download.insert()
        return {"status": "success", "message": "Download logged"}
    except Exception as e:
        logger.error(f"Failed to track download: {e}")
        return {"status": "error", "message": "Log failed"}

@router.get("/download-count")
async def get_download_count():
    try:
        count = await ResumeDownload.count()
        return {"count": count}
    except Exception as e:
        logger.error(f"Failed to aggregate download stats: {e}")
        return {"count": 0}
