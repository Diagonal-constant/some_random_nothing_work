from fastapi import APIRouter
import time

router = APIRouter(
    prefix="/api/system",
    tags=["System"]
)

start_time = time.time()

@router.get("/health")
def health_check():
    return {"status": "ok", "message": "Backend is running behind Nginx!"}

@router.get("/stats")
def get_stats():
    uptime = round(time.time() - start_time, 2)
    return {
        "uptime_seconds": uptime,
        "environment": "Docker + Nginx",
        "status": "healthy"
    }

