from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import settings
from database import init_db
from limiter import limiter
from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler
from routers import contact, resume
import uvicorn
import logging

# Configure logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("portfolio_main")

app = FastAPI(
    title="Aaryan Mangukiya Portfolio API",
    description="FastAPI Backend for Contact submissions and resume downloads.",
    version="1.0.0"
)

# Configure CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Wire SlowAPI Rate Limiter
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Register Lifespan Startup Hooks
@app.on_event("startup")
async def startup_event():
    # Connect MongoDB via Beanie ODM
    try:
        await init_db()
        logger.info("MongoDB database connection initialized successfully")
    except Exception as e:
        logger.critical(f"MongoDB startup connection failed: {e}")

# Mount API Routers
app.include_router(contact.router)
app.include_router(resume.router)

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
