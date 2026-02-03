"""
Backend API Tests for Farrari Laundries
Tests: Contact form, Franchise registration, Health check endpoints
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthCheck:
    """Health check endpoint tests"""
    
    def test_root_endpoint(self):
        """Test root API endpoint returns Hello World"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "Hello World"


class TestContactForm:
    """Contact form endpoint tests"""
    
    def test_contact_form_success(self):
        """Test successful contact form submission"""
        payload = {
            "name": "TEST_Contact User",
            "email": "test_contact@example.com",
            "phone": "+965 1234 5678",
            "subject": "Test Inquiry",
            "message": "This is a test message for contact form"
        }
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        assert "message" in data
    
    def test_contact_form_missing_name(self):
        """Test contact form with missing name field"""
        payload = {
            "email": "test@example.com",
            "phone": "+965 1234 5678",
            "subject": "Test",
            "message": "Test message"
        }
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        # Should return 422 for validation error
        assert response.status_code == 422
    
    def test_contact_form_missing_email(self):
        """Test contact form with missing email field"""
        payload = {
            "name": "Test User",
            "phone": "+965 1234 5678",
            "subject": "Test",
            "message": "Test message"
        }
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 422
    
    def test_contact_form_missing_phone(self):
        """Test contact form with missing phone field"""
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "subject": "Test",
            "message": "Test message"
        }
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 422
    
    def test_contact_form_missing_subject(self):
        """Test contact form with missing subject field"""
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+965 1234 5678",
            "message": "Test message"
        }
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 422
    
    def test_contact_form_missing_message(self):
        """Test contact form with missing message field"""
        payload = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+965 1234 5678",
            "subject": "Test"
        }
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 422


class TestFranchiseRegistration:
    """Franchise registration endpoint tests"""
    
    def test_franchise_registration_success(self):
        """Test successful franchise registration"""
        payload = {
            "fullName": "TEST_Franchise Owner",
            "email": "test_franchise@example.com",
            "phone": "+965 9876 5432",
            "country": "Kuwait",
            "city": "Kuwait City",
            "investment": "50000",
            "yearlyIncome": "100000",
            "experience": "5 years in retail business",
            "aboutYourself": "Experienced business owner looking for franchise opportunity",
            "message": "Additional test message"
        }
        response = requests.post(
            f"{BASE_URL}/api/franchise-register",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        assert "message" in data
    
    def test_franchise_registration_minimal_fields(self):
        """Test franchise registration with only required fields"""
        payload = {
            "fullName": "TEST_Minimal Franchise",
            "email": "minimal@example.com",
            "phone": "+965 1111 2222",
            "investment": "30000",
            "yearlyIncome": "80000",
            "experience": "3 years experience",
            "aboutYourself": "Brief description"
        }
        response = requests.post(
            f"{BASE_URL}/api/franchise-register",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
    
    def test_franchise_registration_missing_fullname(self):
        """Test franchise registration with missing fullName"""
        payload = {
            "email": "test@example.com",
            "phone": "+965 1234 5678",
            "investment": "50000",
            "yearlyIncome": "100000",
            "experience": "5 years",
            "aboutYourself": "Description"
        }
        response = requests.post(
            f"{BASE_URL}/api/franchise-register",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 422
    
    def test_franchise_registration_missing_email(self):
        """Test franchise registration with missing email"""
        payload = {
            "fullName": "Test User",
            "phone": "+965 1234 5678",
            "investment": "50000",
            "yearlyIncome": "100000",
            "experience": "5 years",
            "aboutYourself": "Description"
        }
        response = requests.post(
            f"{BASE_URL}/api/franchise-register",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 422
    
    def test_franchise_registration_missing_investment(self):
        """Test franchise registration with missing investment"""
        payload = {
            "fullName": "Test User",
            "email": "test@example.com",
            "phone": "+965 1234 5678",
            "yearlyIncome": "100000",
            "experience": "5 years",
            "aboutYourself": "Description"
        }
        response = requests.post(
            f"{BASE_URL}/api/franchise-register",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 422


class TestStatusEndpoint:
    """Status endpoint tests"""
    
    def test_create_status_check(self):
        """Test creating a status check"""
        payload = {"client_name": "TEST_Status_Client"}
        response = requests.post(
            f"{BASE_URL}/api/status",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        assert response.status_code == 200
        data = response.json()
        assert "id" in data
        assert data["client_name"] == "TEST_Status_Client"
        assert "timestamp" in data
    
    def test_get_status_checks(self):
        """Test retrieving status checks"""
        response = requests.get(f"{BASE_URL}/api/status")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
