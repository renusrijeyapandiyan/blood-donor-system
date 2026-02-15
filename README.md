🩸 Blood Donor Management System
📌 Project Overview

The Blood Donor Management System is a full-stack web application developed to help manage blood donor information efficiently.
This system allows donors to register, login, and be searchable based on location. It also provides contact options like phone call and email.

The goal of this project is to support hospitals, blood banks, and individuals in quickly finding blood donors during emergencies.

🚀 Features
👤 Donor Features

Donor Registration

Donor Login

Dashboard View

Search Donors by Location

View All Donors

Contact Donor via Phone

Contact Donor via Email

🖥️ Dashboard Features

Modern UI Design

Donor Cards Display

Total Donor Count

Search Functionality

Responsive Layout

🛠️ Technologies Used
Frontend

HTML

CSS

JavaScript

Backend

Node.js

Express.js

Database

MongoDB

Mongoose

📂 Project Structure
blood-donor-system
│
├── models
│   └── Donor.js
│
├── public
│   ├── index.html
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   └── style.css
│
├── server.js
├── package.json
└── README.md
⚙️ Installation & Setup
Step 1 — Clone Repository
git clone <your-github-repo-link>
cd blood-donor-system
Step 2 — Install Dependencies
npm install
Step 3 — Start MongoDB

Make sure MongoDB is running locally.

Step 4 — Start Server
npm start
Step 5 — Open Browser
http://localhost:5000
🗄️ Database Details

Database Name:

bloodDonorDB

Collection:

donors

Fields:

name

email

password

bloodGroup

phone

location

🔍 API Endpoints
Register Donor

POST /register

Login Donor

POST /login

Get All Donors

GET /donors

Search Donors By Location

GET /donors/location/:location

📞 Contact Features

Call Donor using Phone Number

Email Donor using Email Address

🌟 Future Enhancements

Admin Dashboard

Blood Request System

Donor Map View

Blood Group Filters

Authentication Security (JWT)

Cloud Deployment

👩‍💻 Author

Developed by: Renu Sri

📜 License

This project is developed for educational purposes.
