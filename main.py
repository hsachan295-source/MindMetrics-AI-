# pyrefly: ignore [missing-import]

import joblib                      # Trained ML model load karne ke liye
import pandas as pd                # DataFrame banane ke liye
from fastapi import FastAPI        # FastAPI framework
from fastapi.middleware.cors import CORSMiddleware  # CORS support for frontend
from pydantic import BaseModel, Field  # Data validation
from typing import Literal         # Fixed values allow karne ke liye

# Trained model load
model = joblib.load("Mental_Health_Model.pkl")

# FastAPI application create
app = FastAPI(title="Mental Health & Social Media API")

# Enable CORS for frontend interaction
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ----------------------- Request Model -----------------------

class StudentData(BaseModel):

    Age: int = Field(..., ge=10, le=100, description="Age between 10 and 100")   # Integer age
    Gender: Literal["Male", "Female"]                                             # Male/Female only
    Country: str                                                                   # Country name
    Academic_Level: Literal["Undergraduate", "Graduate", "High School"]            # Education level

    Most_Used_Platform: Literal[
        "Facebook", "LinkedIn", "Instagram", "Snapchat",
        "Twitter", "YouTube", "TikTok", "LINE",
        "KakaoTalk", "VKontakte", "WhatsApp", "WeChat"
    ]                                                                              # Social media platform

    Purpose_Of_Use: Literal[
        "Networking", "Education", "Entertainment", "News"
    ]                                                                              # Platform use purpose

    Avg_Daily_Usage_Hours: float = Field(..., ge=0, le=24)                         # Daily usage hours
    Daily_Unlocks: int = Field(..., ge=0)                                          # Phone unlock count
    Study_Hours: float = Field(..., ge=0, le=24)                                   # Study hours
    Physical_Activity_Hours: float = Field(..., ge=0, le=24)                       # Exercise hours
    Sleep_Hours_Per_Night: float = Field(..., ge=0, le=24)                         # Sleep hours

    Stress_Level: Literal[
        "Low", "Medium", "High", "Very High"
    ]                                                                              # Stress level


# ----------------------- Response Model -----------------------

class PredictionResponse(BaseModel):
    predicted_mental_health_score: float      # Prediction return hoga


# ----------------------- Home API -----------------------

@app.get("/")
def greet():
    return {"message": "Welcome to Mental Health Prediction API"}


# Top countries list
top_countries = [
    "Other", "India", "USA", "Canada", "Australia",
    "UK", "Germany", "Mexico", "Turkey", "France"
]


# ----------------------- Prediction API -----------------------

@app.post("/predict", response_model=PredictionResponse)
def predict(data: StudentData):

    # Country grouping
    country_group = (
        data.Country
        if data.Country in top_countries
        else "Other"
    )

    # Dictionary ko list ke andar isliye rakha hai kyunki DataFrame rows ki list leta hai
    input_row = pd.DataFrame([{
        "Age": data.Age,
        "Gender": data.Gender,
        "Country": data.Country,
        "Academic_Level": data.Academic_Level,
        "Most_Used_Platform": data.Most_Used_Platform,
        "Purpose_Of_Use": data.Purpose_Of_Use,
        "Avg_Daily_Usage_Hours": data.Avg_Daily_Usage_Hours,
        "Daily_Unlocks": data.Daily_Unlocks,
        "Study_Hours": data.Study_Hours,
        "Physical_Activity_Hours": data.Physical_Activity_Hours,
        "Sleep_Hours_Per_Night": data.Sleep_Hours_Per_Night,
        "Stress_Level": data.Stress_Level,
        "Grouped_country": country_group
    }])

    # Model prediction
    prediction = model.predict(input_row)[0]

    # API response
    return PredictionResponse(
        predicted_mental_health_score=round(float(prediction), 2)
    )

    




    
