# Full-Stack App (React + FastAPI + Nginx)

Containerized web application architecture featuring a **React** frontend and modular **FastAPI** backend reverse-proxied through **Nginx** via Docker Compose.

---

## 🚀 Quick Start

```bash
# Build and run all services
docker compose up --build -d

# Stop services
docker compose down

```

* **Local Access:** `http://localhost`
* **LAN / Corporate Network Access:** `http://<HOST_IP_ADDRESS>`

---

## 🏗️ Architecture & Flow

```text
Browser (Port 80) ──> Nginx ┬──> React Static Files (/)
                            └──> FastAPI Backend (/api/*)

```

* **Nginx (Port 80):** Public entry point. Serves static React builds and routes `/api/*` traffic internally.
* **FastAPI (Port 8000):** Private backend service using `APIRouter`. Isolated inside the Docker network.

---

## 🔌 API Routes

| Router | Method | Endpoint |
| --- | --- | --- |
| **System** | `GET` | `/api/system/health`, `/api/system/stats` |
| **Users** | `GET` | `/api/users/` |
| **Items** | `GET`, `POST` | `/api/items/` |

---

## 🛠️ Standalone Backend Execution

To run and test the backend container directly on your host without Nginx:

```bash
docker run -p 8000:8000 <backend-image-name>

```

*API Docs available at `

