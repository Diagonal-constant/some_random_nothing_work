from fastapi import APIRouter

router = APIRouter(
    prefix="/api/users",
    tags=["Users"]
)

@router.get("/")
def get_users():
    return {
        "users": [
            {"id": 1, "name": "Alice", "role": "Engineer"},
            {"id": 2, "name": "Bob", "role": "Designer"},
            {"id": 3, "name": "Charlie", "role": "Manager"}
        ]
    }

