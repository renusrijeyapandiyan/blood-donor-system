🩸 Blood Donor Management System
📌 Project Overview

Blood Donor Management System is a web-based application designed to manage blood donor registration, login, and donor search functionality.
The system helps users find blood donors by location and contact them easily. It provides a simple dashboard to view donor details and manage donor records efficiently.

🚀 Features

Donor Registration

Donor Login Authentication

Donor Dashboard

Search Donors by Location

View All Donors

Contact Donor Option

MongoDB Database Integration

REST API Backend using Node.js & Express

🛠️ Tech Stack

Frontend

HTML

CSS

JavaScript

Backend

Node.js

Express.js

Database

MongoDB (Mongoose ODM)

📥 Installation
1️⃣ Clone the Repository
git clone https://github.com/renusrijeyapandiyan/blood-donor-system.git

2️⃣ Navigate to Project Folder
cd blood-donor-system

3️⃣ Install Dependencies
npm install

4️⃣ Start MongoDB

Make sure MongoDB is running locally:

mongodb://127.0.0.1:27017

5️⃣ Run the Project
npm start

🌐 Usage

After running the server, open browser and go to:

http://localhost:5000

👤 User Flow

Register as Blood Donor

Login using Email & Password

Open Dashboard

Search Donors by Location

Contact Donor

📁 Folder Structure
blood-donor-system
│
├── models/              # Mongoose Models
│   └── Donor.js
│
├── public/              # Frontend Files
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── style.css
│
├── server.js            # Express Server
├── package.json         # Node Dependencies
└── README.md            # Documentation

🔌 API Endpoints
Register Donor
POST /register

Login Donor
POST /login

Get All Donors
GET /donors



📜 License

This project is licensed under the MIT License.

