import uvicorn
from fastapi import FastAPI
from app.routers import users, items, system

app = FastAPI(title="Nginx + FastAPI Router App")

# Include all routers (Route handlers live inside these modules)
app.include_router(users.router)
app.include_router(items.router)
app.include_router(system.router)

if __name__ == "__main__":
    # Remember: set host="0.0.0.0" inside Docker, or "127.0.0.1" for local standalone testing
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)