# St Mary Academy Secondary School

A full-stack application for St Mary Academy Secondary School featuring a Django REST API backend and a React frontend website.

## Project Structure

```
├── school-backend/          # Django REST API
│   ├── config/             # Django project settings
│   ├── core/               # Main app with models, views, serializers
│   ├── manage.py           # Django management script
│   ├── requirements.txt     # Python dependencies
│   └── SMAK/               # Python virtual environment (excluded from git)
│
└── school-website/         # React frontend (Vite)
    ├── src/                # Source code
    ├── public/             # Static assets
    ├── package.json        # Node.js dependencies
    └── vite.config.js      # Vite configuration
```

## Backend Setup

### Prerequisites
- Python 3.8+

### Installation

1. Navigate to the backend directory:
```bash
cd school-backend
```

2. Create and activate virtual environment:
```bash
# Windows
python -m venv SMAK
.\SMAK\Scripts\Activate.ps1

# macOS/Linux
python -m venv SMAK
source SMAK/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

### Running the Server

```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000`

### Database Migrations

```bash
python manage.py migrate
python manage.py createsuperuser  # Create admin user
```

Visit `http://localhost:8000/admin` to access the Django admin panel.

## Frontend Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd school-website
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Features

- **Core App**: Models for contacts, gallery images, videos, and news/events
- **REST API**: Full RESTful API for mobile and web clients
- **Admin Panel**: Django admin interface for content management
- **CORS Support**: Configured for cross-origin requests
- **Image Processing**: Pillow integration for image handling

## API Endpoints

Available endpoints are generated from the core app's URL configuration. Access the API documentation at `/api/` when the server is running.

## Environment Variables

Create a `.env` file in the `school-backend` directory:

```
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1
```

## Technologies Used

### Backend
- Django 6.0.3
- Django REST Framework 3.17.0
- django-cors-headers 4.9.0
- Pillow 12.1.1
- python-dotenv 1.2.2

### Frontend
- React
- Vite
- CSS

## License

[Add your license here]

## Contact

For inquiries, visit [school website or contact info]
