import pytest
from fastapi.testclient import TestClient
from main import app
from unittest.mock import AsyncMock, patch

client = TestClient(app)

@pytest.fixture(autouse=True)
def mock_db_and_email():
    # Mock Beanie DB actions and email dispatches to prevent side effects in tests
    with patch("routers.contact.ContactSubmission.insert", new_callable=AsyncMock) as mock_insert, \
         patch("routers.contact.send_email_notification", new_callable=AsyncMock) as mock_send_email:
        yield mock_insert, mock_send_email

def test_contact_submission_success():
    payload = {
        "name": "John Doe",
        "email": "john@example.com",
        "subject": "Inquiry",
        "message": "Hello, this is a valid test message with at least ten characters."
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 200
    assert response.json()["status"] == "success"

def test_contact_submission_invalid_email():
    payload = {
        "name": "John Doe",
        "email": "invalid-email-pattern",
        "subject": "Inquiry",
        "message": "Hello, this is a valid test message."
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 422
