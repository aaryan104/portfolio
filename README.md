# 🚀 Aaryan Mangukiya - Premium Personal Portfolio (v2)

A premium, production-grade personal portfolio website engineered with a **React (Vite + TypeScript)** frontend and a **FastAPI (Python)** backend, featuring MongoDB Atlas database integration and Resend email alerts.

---

## 🛠️ Tech Stack & Architecture

### 💻 Frontend (Client Side)
* **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) for ultra-fast hot module replacement.
* **Language**: [TypeScript](https://www.typescriptlang.org/) for robust type safety.
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) for fluid, glassmorphic layout elements.
* **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth scroll behaviors, fading transitions, and custom cursor micro-animations.
* **State Management**: [Zustand](https://github.com/pmndrs/zustand) for lightweight, global application state.
* **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest) (React Query) for state caching and asynchronous API hooks.

### ⚙️ Backend (Server Side)
* **Framework**: [FastAPI](https://fastapi.tiangolo.com/) for fast, asynchronous API routing.
* **Database**: [MongoDB](https://www.mongodb.com/) with [Beanie ODM](https://beanie-odm.dev/) (Object-Document Mapper) built on top of Motor.
* **Security & Optimization**:
  * [SlowAPI](https://github.com/laurentS/slowapi) for rate-limiting incoming API spam.
  * Native CORS middleware to handle strict origin policies.
  * Resend API for bypassing SMTP ports blocked on cloud host firewalls.

---

## ✨ Features

1. **Interactive Mouse Spotlight (Glow Effect)**: Card components track cursor coordinates relative to card frames, producing a neon-glow reflection matching the branding colors of each individual technology (e.g. Cyan for React, Green for MongoDB, Yellow for Python).
2. **Dynamic Sliding Tab Selector**: Category navigation switches with a spring-based pill indicator sliding smoothly between active selectors.
3. **Responsive layout with Mobile Fallbacks**: Clean layouts optimized for all screens. For instance, the resume PDF iframe is replaced on mobile screens with a responsive download-and-preview card to avoid iframe scroll locks.
4. **Zod Schema Form Verification**: Frontend forms strictly check inputs via client-side validation before sending data to the server.
5. **Secure Database Logging**: Message forms are sanitized and saved securely to a cloud-based MongoDB Atlas cluster.
6. **Spam Prevention & Rate Limiting**: Limiters prevent bot attacks from spamming contacts (HTTP 429), while SMTP/Resend API routes deliver notifications directly to your personal mailbox.

---

## 📂 Project Structure

```text
Portfolio/
├── frontend/                     # React Single Page Application (SPA)
│   ├── public/                   # Static assets (Resume PDF, icons)
│   ├── src/
│   │   ├── components/           # Reusable elements (Navbar, CustomCursor, Footer)
│   │   ├── content/              # Single source of truth (resume-data.ts)
│   │   ├── pages/                # Pages (Home, ResumePage)
│   │   ├── sections/             # Section layouts (Hero, About, Skills, Projects, Experience)
│   │   └── store/                # Zustand global store configuration
│   ├── package.json
│   └── vite.config.ts
│
└── backend/                      # Python FastAPI REST API Server
    ├── models/                   # Beanie ODM Database Document Models
    ├── routers/                  # Router endpoints (contact, resume)
    ├── tests/                    # Pytest endpoint validation tests
    ├── config.py                 # Pydantic Settings env loader
    ├── database.py               # Beanie connection engine initializer
    ├── limiter.py                # SlowAPI rate limiting configuration
    ├── main.py                   # Server start script (Uvicorn configuration)
    └── requirements.txt          # Pip package constraints
```

---

## 🚀 Running the Project Locally

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or higher)
* [Python](https://www.python.org/) (v3.10 or v3.11)
* [MongoDB](https://www.mongodb.com/) running locally on port `27017`

### 1. Backend Setup
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # On Windows (PowerShell):
   .\venv\Scripts\Activate.ps1
   # On macOS/Linux:
   source venv/bin/activate
   ```
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Create a `.env` file (you can copy `.env.example` to start):
   ```bash
   cp .env.example .env
   ```
   Modify `.env` to include your SMTP settings or your Resend API Key:
   ```env
   MONGODB_URI=mongodb://localhost:27017/portfolio
   SMTP_USERNAME=your-gmail@gmail.com
   SMTP_PASSWORD=your-gmail-app-password
   NOTIFY_EMAIL=aaryanmangukiya@gmail.com
   ```
5. Run the server:
   ```bash
   python main.py
   ```
   The backend will start running locally on `http://127.0.0.1:8000`.

### 2. Frontend Setup
1. Open another terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the node packages:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   VITE_API_BASE_URL=http://localhost:8000
   ```
4. Launch the local Vite dev server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the application.

---

## 🌐 Production Configuration

### Backend Deployment (Render)
When hosting the backend on Render:
1. Link your GitHub repository.
2. Select **Web Service**, set the Root Directory to `backend`.
3. Select **Python 3** and configure these settings:
   * **Build Command**: `pip install -r requirements.txt`
   * **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Add these **Environment Variables**:
   * `PYTHON_VERSION` = `3.11.8`
   * `MONGODB_URI` = `Your MongoDB Atlas Cluster Connection String`
   * `ALLOWED_ORIGINS` = `https://aaryanmangukiya.vercel.app` (Your frontend URL)
   * `RESEND_API_KEY` = `Your Resend API Key` (Required to bypass blocked SMTP ports)
   * `NOTIFY_EMAIL` = `aaryanmangukiya@gmail.com`

### Frontend Deployment (Vercel)
When hosting the frontend on Vercel:
1. Link your repository.
2. Configure Root Directory to `frontend`.
3. Set **Framework Preset** to `Vite`.
4. Configure **Environment Variables**:
   * `VITE_API_BASE_URL` = `https://portfolio-backend-tgov.onrender.com` (Your Render Backend URL)
5. Click **Deploy**.

---

## 🧪 Testing

To run backend tests locally:
```bash
cd backend
.\venv\Scripts\python -m pytest
```
