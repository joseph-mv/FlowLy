# FlowLy - Workflow Management System

FlowLy is a scalable and user-friendly workflow management system that integrates an intuitive frontend with a secure backend. This project leverages modern technologies like React Flow for interactive workflow visualization, Redux for efficient state management, and Django for robust API handling. By default, it uses SQLite3 as the database with Django, but it also supports PostgreSQL for more advanced use cases.
---

## 🚀 Features

- Create, read, update, and delete workflows with a simple and intuitive interface.
- Visualize workflows using React Flow.
- Manage application state seamlessly with Redux.
- Secure user authentication (signup, login, logout) powered by Django.
- RESTful API endpoints for workflow operations.
- Flexible database support: SQLite3 (default) or PostgreSQL (optional).

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, React Flow,Redux
- **Backend:** Django, Django REST Framework
- **Database:** SQLite3 (default) or PostgreSQL (optional)
- **Version Control:** Git

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (for the frontend)
- npm (Node Package Manager)
- Python (for the backend)
- (Optional) PostgreSQL (if using PostgreSQL instead of SQLite3)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/joseph-mv/FlowLy.git
    cd FlowLy
    ```
2. **Frontend Setup**
   1. Navigate to the frontend directory:
    ```bash
   cd frontend
    ```
    2. Install dependencies:
    ```bash
   npm install
    ```
    3. Create a .env file in the frontend directory and add necessary environment variables :
    ```bash
   VITE_BASE_URL=http://localhost:8000/
    ```
    4. Start the development server:
   ```bash
   npm run dev
    ```
   The frontend will be available at http://localhost:5173 (or the port specified in the terminal).
3. Backend Setup
   1. Open a new terminal and navigate to the backend directory
   ```bash
   cd backend
    ```
   2. Create and activate a Python virtual environment:
   ```bash
   python -m venv venv
    venv\Scripts\activate  # On Windows
    # source venv/bin/activate  # On macOS/Linux
    ```
   3. Navigate to the flowly directory:
   ```bash
   cd flowly
    ```
   4. Install Python dependencies
   ```bash
   pip install -r requirements.txt
    ```
   5. Database Configuration
      
        - Using SQLite3 (default):
            1. Create a .env file in the backend/flowly directory and add:
            ```bash
                # SECURITY WARNING: Keep the secret key used in production secret!
                # Never share this key publicly or commit it to version control.
                SECRET_KEY=django-insecure-@k20zge=k7^%%t6i$)(7t!*0^j@2lfw%r+n7)s*z53a*c*^u=2      
                # SECURITY WARNING: Don't run with DEBUG=True in production!
                # Set DEBUG=False in production for security.
                DEBUG=True
            ```
          No additional setup is required.
          
        - Using PostgreSQL (optional):
          1. Install PostgreSQL from [here](https://www.postgresql.org/download/).
          2. Open the PostgreSQL shell (psql) and create a user and database:
             ```bash
             CREATE USER your_username WITH PASSWORD 'your_password';
              CREATE DATABASE flowly_db;
              GRANT ALL PRIVILEGES ON DATABASE flowly_db TO your_username;
             ```
          3. Create a .env file in the backend/flowly directory and add:
              ```
              # SECURITY WARNING: Keep the secret key used in production secret!
              # Never share this key publicly or commit it to version control.
              SECRET_KEY=django-insecure-@k20zge=k7^%%t6i$)(7t!*0^j@2lfw%r+n7)s*z53a*c*^u=2
              
              # SECURITY WARNING: Don't run with DEBUG=True in production!
              # Set DEBUG=False in production for security.
              DEBUG=True
                    
              DB_NAME=flowly_db
              DB_USER=your_username
              DB_PASSWORD=your_password
              DB_HOST=localhost
              DB_PORT=5432
              ```
            4. Update flowly/settings.py:
                1. Comment out lines 103–108 (SQLite3 configuration) using #.
                2. Uncomment lines 111–120 (PostgreSQL configuration).
                 
   7. Apply migrations:
      ```bash
      python manage.py migrate  
      ```  
   8. Start the backend server:
      ```bash
      python manage.py runserver
      ```
      The backend will be available at http://127.0.0.1:8000/.
      
    9. (Optional) Create a superuser for admin access:
        ```bash
        python manage.py createsuperuser
        ```
     Access the admin panel at http://127.0.0.1:8000/admin/.

## API Endpoints
### Workflow Endpoints
- POST /workflow/create/ - Create a new workflow
- GET /workflow/get-all/ - Retrieve all workflows
- GET /workflow/get/:id/ - Retrieve a specific workflow by ID
- DELETE /workflow/remove/:id/ - Delete a workflow by ID
- PUT /workflow/update/:id/ - Update a workflow by ID
### Authentication Endpoints
- POST /signup/ - Register a new user
- POST /login/ - Log in an existing user
- POST /logout/ - Log out the current user

## Running the Application
1. Ensure both the frontend (npm run dev) and backend (python manage.py runserver) are running.
2. Open your browser and navigate to http://localhost:5173 (frontend).
3. Use the admin panel at http://127.0.0.1:8000/admin/ to manage workflows and users (requires superuser login).
