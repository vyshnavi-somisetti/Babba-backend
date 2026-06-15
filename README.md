# BabbaFly Marketplace Backend

## Project Overview

This is a Marketplace Backend application built using Node.js, Express.js, MongoDB Atlas, and Mongoose. The project provides user authentication and listing management functionalities.

---

## Features

### User Authentication
- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Authentication
- Protected Routes
- User Profile API

### Listing Management
- Create Listing
- Get All Listings
- Get Single Listing
- Update Listing
- Delete Listing

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- Nodemon

---

## Project Structure

```text
babbafly-backend
│
├── config
│   └── db.js
│
├── controllers
│   ├── userController.js
│   └── listingController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   ├── User.js
│   └── Listing.js
│
├── routes
│   ├── userRoutes.js
│   └── listingRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run Application

```bash
npm run dev
```

Server will start on:

```text
http://localhost:5000
```

---

## API Endpoints

### User Routes

#### Register User

```http
POST /api/users/register
```

#### Login User

```http
POST /api/users/login
```

#### User Profile

```http
GET /api/users/profile
```

---

### Listing Routes

#### Create Listing

```http
POST /api/listings
```

#### Get All Listings

```http
GET /api/listings
```

#### Get Single Listing

```http
GET /api/listings/:id
```

#### Update Listing

```http
PUT /api/listings/:id
```

#### Delete Listing

```http
DELETE /api/listings/:id
```

---

## Testing

The APIs were tested using Thunder Client/Postman.

---

## Author

Vyshnavi Somisetti

---

## Status

Project Completed Successfully ✅
