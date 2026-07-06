from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import settings
from database import init_db
from limiter import limiter
from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler
from routers import contact, resume
from contextlib import asynccontextmanager
import uvicorn
import logging

# Configure logger
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("portfolio_main")

# Modern lifespan handler instead of deprecated on_event
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Connect MongoDB via Beanie ODM
    try:
        await init_db()
        logger.info("MongoDB database connection initialized successfully")
    except Exception as e:
        logger.critical(f"MongoDB startup connection failed: {e}")
    yield

app = FastAPI(
    title="Aaryan Mangukiya Portfolio API",
    description="FastAPI Backend for Contact submissions and resume downloads.",
    version="1.0.0",
    lifespan=lifespan
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

# Mount API Routers
app.include_router(contact.router)
app.include_router(resume.router)

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Allow direct launching via 'python main.py'
if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
