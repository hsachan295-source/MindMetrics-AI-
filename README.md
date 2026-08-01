# MindMetrics AI 🧠📱
### Student Social Media & Mental Health Impact Prediction System

[![Python](https://img.shields.io/badge/Python-3.13-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Machine Learning](https://img.shields.io/badge/Machine_Learning-Random_Forest-FF6F00?style=for-the-badge&logo=scikitlearn&logoColor=white)](https://scikit-learn.org)

**MindMetrics AI** is a fullstack machine learning application designed to evaluate, predict, and analyze student mental health indicators based on screen time, social media consumption habits, physical exercise, sleep hygiene, and academic load.

The system features a **FastAPI backend** powered by a trained Random Forest classifier/regressor and a **React + Vite frontend** with a glassmorphism theme, real-time Recharts visualizations, interactive assessment forms, and CSV/JSON log export capabilities.

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
  - Real-time connection monitoring with FastAPI (`http://127.0.0.1:8000`).
  - Graceful fallback to a local ML simulation engine if the backend is offline.

---

## 🛠️ Tech Stack & Architecture

### Backend (`/backend`)
- **Language**: Python 3.13
- **Framework**: FastAPI with Pydantic data validation & CORSMiddleware
- **Server**: Uvicorn
- **ML / Data Processing**: Scikit-Learn, Pandas, Joblib

### Frontend (`/frontend`)
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4, Vanilla CSS Glassmorphism design system
- **Icons**: Lucide React
- **Data Visualization**: Recharts
- **State & Router**: React Context API (`AppContext`), Custom Hooks (`useLocalStorage`)

---

## 📁 Repository Folder Structure

```
MindMetrics-AI/
├── backend/
│   ├── main.py                                           # FastAPI REST backend & model endpoints
│   ├── Mental_Health_Model.pkl                           # Trained Random Forest model pickle
│   ├── Student Social Media And Mental Health Impact.csv # Dataset source
│   ├── requirements.txt                                  # Python dependencies
│   └── README.md                                         # Backend guide
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/                                   # Badge, Button, Card, Input, Modal, RangeSlider, Select
│   │   │   ├── dashboard/                                # OverviewKPI, PlatformChart, RecentActivity, RiskDistribution, UsageChart
│   │   │   ├── form/                                     # DemographicFields, LifestyleFields, PredictionForm, QuickPresets, UsageFields
│   │   │   ├── history/                                  # ExportActions, FilterControls, PredictionTable
│   │   │   ├── layout/                                   # Footer, Header, Layout, Navbar, Sidebar
│   │   │   ├── resources/                                # CrisisSupport, WellBeingTips
│   │   │   └── results/                                  # PredictionResultCard, Recommendations, ScoreGauge, StressBreakdown
│   │   ├── context/                                      # AppContext.jsx
│   │   ├── hooks/                                        # useLocalStorage.js
│   │   ├── pages/                                        # DashboardPage, HistoryPage, PredictorPage, ResourcesPage, SettingsPage
│   │   ├── services/                                     # api.js, sampleData.js
│   │   ├── styles/                                       # index.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── .gitignore
├── ML_Project-mental-health.ipynb                         # Jupyter notebook model training
├── Mental_Health_Model.pkl                               # Root trained model
├── Student Social Media And Mental Health Impact.csv     # Root dataset
├── main.py                                               # Root FastAPI entry script
└── README.md                                             # Project documentation
```

---

## 🚀 Quick Start & Installation Guide

### Prerequisites
- Python 3.9+
- Node.js v18+ and npm

### 1. Setup & Run FastAPI Backend
```bash
# Navigate to backend directory
cd backend

# Install dependencies
pip install -r requirements.txt

# Launch FastAPI server
python -m uvicorn main:app --reload --port 8000
```
- **Backend API URL**: `http://127.0.0.1:8000`
- **Interactive Swagger Documentation**: `http://127.0.0.1:8000/docs`

### 2. Setup & Run React Frontend
```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```
- **Web UI URL**: `http://localhost:5173`

---

## 📡 API Specification

### `POST /predict`
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

## 🔬 Model & Dataset Details

The Machine Learning model is trained on survey evaluations of student digital habits:
- **Features**: Age, Gender, Academic Level, Country, Primary Social Media Platform, Purpose of Use, Daily Screen Hours, Daily Phone Unlocks, Study Hours, Exercise Hours, Sleep Hours, Self-rated Stress Level.
- **Output Target**: Predicted Mental Health Score (1.00 to 10.00 scale).

---

## 👤 Author & Maintainer

Developed by **Harsh Sachan**
- **GitHub**: [@hsachan295-source](https://github.com/hsachan295-source)
- **Repository**: [MindMetrics-AI-](https://github.com/hsachan295-source/MindMetrics-AI-.git)
