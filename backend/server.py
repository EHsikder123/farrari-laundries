from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Resend API key
resend.api_key = "re_JWrMnQeS_FQc7i7tbDBCtrnFNfygankGd"
RECIPIENT_EMAIL = "ekramhosain0091@gmail.com"

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Form Model
class ContactForm(BaseModel):
    name: str
    email: str
    phone: str
    subject: str
    message: str

# Franchise Registration Model
class FranchiseForm(BaseModel):
    fullName: str
    email: str
    phone: str
    country: Optional[str] = ""
    city: Optional[str] = ""
    investment: str
    yearlyIncome: str
    experience: str
    aboutYourself: str
    message: Optional[str] = ""

@api_router.post("/contact")
async def submit_contact(form: ContactForm):
    try:
        # Create email HTML
        html_content = f"""
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {form.name}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Phone:</strong> {form.phone}</p>
        <p><strong>Subject:</strong> {form.subject}</p>
        <h3>Message:</h3>
        <p>{form.message}</p>
        """
        
        params = {
            "from": "onboarding@resend.dev",
            "to": [RECIPIENT_EMAIL],
            "subject": f"Contact Form: {form.subject}",
            "html": html_content
        }
        
        email = resend.Emails.send(params)
        logger.info(f"Contact form email sent: {email}")
        
        # Also save to database
        doc = {
            "id": str(uuid.uuid4()),
            "type": "contact",
            **form.model_dump(),
            "timestamp": datetime.now(timezone.utc).isoformat()
        }
        await db.form_submissions.insert_one(doc)
        
        return {"success": True, "message": "Contact form submitted successfully"}
    except Exception as e:
        logger.error(f"Error sending contact email: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/franchise-register")
async def submit_franchise(form: FranchiseForm):
    try:
        # Create email HTML
        html_content = f"""
        <h2>New Franchise Registration</h2>
        <p><strong>Full Name:</strong> {form.fullName}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Phone:</strong> {form.phone}</p>
        <p><strong>Country:</strong> {form.country}</p>
        <p><strong>City:</strong> {form.city}</p>
        <p><strong>Investment Capacity:</strong> {form.investment}</p>
        <p><strong>Yearly Income:</strong> {form.yearlyIncome}</p>
        <h3>Business Experience:</h3>
        <p>{form.experience}</p>
        <h3>About Themselves:</h3>
        <p>{form.aboutYourself}</p>
        <h3>Additional Message:</h3>
        <p>{form.message}</p>
        """
        
        params = {
            "from": "onboarding@resend.dev",
            "to": [RECIPIENT_EMAIL],
            "subject": f"Franchise Registration: {form.fullName}",
            "html": html_content
        }
        
        email = resend.Emails.send(params)
        logger.info(f"Franchise form email sent: {email}")
        
        # Also save to database
        doc = {
            "id": str(uuid.uuid4()),
            "type": "franchise",
            **form.model_dump(),
            "timestamp": datetime.now(timezone.utc).isoformat()
        }
        await db.form_submissions.insert_one(doc)
        
        return {"success": True, "message": "Franchise registration submitted successfully"}
    except Exception as e:
        logger.error(f"Error sending franchise email: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()