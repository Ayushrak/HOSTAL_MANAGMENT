﻿# hostal-managment
# Hostel Management System (MERN Stack)

## Introduction
This is a **Hostel Management System** built using the **MERN stack**. The project includes features for managing hostel-related activities such as **room allocation, mess management, sports facilities, and user authentication**.

## Features
- User authentication (Login/Signup)
- Room booking and availability check
- Mess subscription and meal plans
- Sports facilities management
- Admin dashboard for hostel administration

## Tech Stack
### Frontend
- React.js (with React Router for navigation)
- Tailwind CSS / Bootstrap for styling
- Axios for API requests

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT authentication
- Cloudinary for image uploads (optional)

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/hostel-management.git
cd hostel-management
```

### 2. Setup Backend
```bash
cd backend
npm install
```
#### Configure `.env` file (Backend)
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_url  # If using image uploads
```

#### Start Backend Server
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

#### Configure `.env` file (Frontend)
```env
REACT_APP_API_URL=http://localhost:5000
```

#### Start Frontend
```bash
npm start
```

---

## Pages & Routes
| Page       | Route           | Description |
|------------|----------------|-------------|
| Home       | `/`            | Landing Page |
| Rooms      | `/rooms`       | Room Listings & Booking |
| Mess       | `/mess`        | Mess Subscription & Plans |
| Sports     | `/sports`      | Sports Facilities Info |
| Admin Panel| `/admin`       | Admin Dashboard |

## API Endpoints
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | `/api/rooms`    | Fetch available rooms |
| POST   | `/api/rooms/book` | Book a room |
| GET    | `/api/mess`     | Fetch mess plans |
| POST   | `/api/auth/register` | User registration |
| POST   | `/api/auth/login` | User login |

---

## Deployment
For production deployment, use:
```bash
npm run build # For frontend
```

Then deploy on platforms like:
- **Frontend:** Vercel, Netlify
- **Backend:** Render, Heroku
- **Database:** MongoDB Atlas

---

## Contribution
Feel free to contribute! Fork the repo, make changes, and submit a PR.

---

## License
MIT License.

---

## Contact
For queries, contact **yourname@email.com**

