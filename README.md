# MindMetrics AI 🧠📱
### Student Social Media & Mental Health Impact Prediction System

[![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-Production_Deployed-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://mindmetrics-ai-44be.onrender.com)
[![Render](https://img.shields.io/badge/Render-Live-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://mindmetrics-ai-44be.onrender.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

**MindMetrics AI** is a fullstack machine learning application designed to evaluate, predict, and analyze student mental health indicators based on screen time, social media consumption habits, physical exercise, sleep hygiene, and academic load.

The system features a live **FastAPI backend** deployed on Render (`https://mindmetrics-ai-44be.onrender.com`) powered by a trained Random Forest classifier/regressor and a **React + Vite frontend** with a glassmorphism theme, real-time Recharts visualizations, interactive assessment forms, and CSV/JSON log export capabilities.

---

## 🌐 Live URLs

- **Production FastAPI Backend**: [https://mindmetrics-ai-44be.onrender.com](https://mindmetrics-ai-44be.onrender.com)
- **Interactive Swagger API Docs**: [https://mindmetrics-ai-44be.onrender.com/docs](https://mindmetrics-ai-44be.onrender.com/docs)

---

## 🌟 Key Features

- **📊 Comprehensive Analytics Dashboard**:
  - Key Performance Indicators (KPIs) tracking average mental health scores, high stress rates, screen time averages, and top impact platforms.
  - Interactive Recharts bar, line, radar, and donut/pie visualizations.
  - Usage vs Sleep & Study Impact correlation charts.

- **🤖 Interactive AI Assessment Form**:
  - Persona Presets (*Heavy Social Media User*, *Balanced Achiever*, *Exhausted Graduate*, *High School Teen*).
  - Touch-friendly range sliders with real-time numeric readouts.
  - Form validation matching backend Pydantic schemas.

- **🎯 Real-Time Prediction & Insights Report**:
  - Animated SVG radial score gauge (1.0 to 10.0 scale).
  - Multidimensional risk radar breakdown (Screen load, unlock frequency, sleep deficit, exercise protection, study intensity).
  - Tailored, evidence-based wellness action plans.

- **📜 Prediction History & Export**:
  - Filterable, searchable data table for historical student assessments.
  - One-click dataset export to **CSV** and **JSON** formats.
  - Persistent history using LocalStorage.

- **💚 Wellness Resources & Crisis Directory**:
  - Digital hygiene guidelines and Pomodoro/sleep optimization routines.
  - Confidential 24/7 helpline directory (Tele-MANAS, 988 Lifeline, Befrienders Worldwide).

- **🔄 Automatic Backend Fallback**:
  - Real-time connection monitoring with production FastAPI (`https://mindmetrics-ai-44be.onrender.com`).
  - Graceful fallback to a local ML simulation engine if the backend is offline.

---

## 🛠️ Tech Stack & Architecture

### Backend (`/backend`)
- **Language**: Python 3.12
- **Deployment**: Render Web Service
- **Framework**: FastAPI with Pydantic data validation & CORSMiddleware
- **Server**: Uvicorn
- **ML / Data Processing**: Scikit-Learn (1.6.1), Pandas, Joblib

### Frontend (`/frontend`)
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4, Vanilla CSS Glassmorphism design system
- **Icons**: Lucide React
- **Data Visualization**: Recharts
- **State & Router**: React Context API (`AppContext`), Custom Hooks (`useLocalStorage`)

---

## 🚀 Quick Start & Local Setup Guide

### 1. Setup & Run FastAPI Backend
```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8000
```

### 2. Setup & Run React Frontend
```bash
cd frontend
npm install
npm run dev
```
- **Web UI URL**: `http://localhost:5173`

---

## 📡 API Specification

### `POST https://mindmetrics-ai-44be.onrender.com/predict`
Calculates predicted mental health score based on student parameters.

#### Request Body Schema:
```json
{
  "Age": 21,
  "Gender": "Female",
  "Country": "USA",
  "Academic_Level": "Undergraduate",
  "Most_Used_Platform": "Instagram",
  "Purpose_Of_Use": "Entertainment",
  "Avg_Daily_Usage_Hours": 6.5,
  "Daily_Unlocks": 110,
  "Study_Hours": 4.0,
  "Physical_Activity_Hours": 1.0,
  "Sleep_Hours_Per_Night": 5.5,
  "Stress_Level": "High"
}
```

#### Response Body Schema:
```json
{
  "predicted_mental_health_score": 7.85
}
```

---

## 👤 Author & Maintainer

Developed by **Harsh Sachan**
- **GitHub**: [@hsachan295-source](https://github.com/hsachan295-source)
- **Repository**: [MindMetrics-AI-](https://github.com/hsachan295-source/MindMetrics-AI-.git)
