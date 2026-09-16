from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/api/items",
    tags=["Items"]
)

class Item(BaseModel):
    name: str
    category: str

@router.get("/")
def get_items():
    return {
        "items": ["Python", "FastAPI", "React", "Nginx"],
        "description": "Successfully fetched from API via Items Router!"
    }

@router.post("/")
def create_item(item: Item):
    return {
        "status": "success",
        "message": f"Item '{item.name}' in category '{item.category}' created successfully!"
    }

