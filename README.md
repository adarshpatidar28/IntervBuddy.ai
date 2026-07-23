# IntervBuddy.ai

A production-grade MERN stack application that parses resumes using AI, conducts interactive audio/text mock interviews, and handles premium upgrades via a secure payment gateway.


---

## 🚀 Core Features
* **AI Resume Analysis:** Uses OpenRouter API to extract skills and experience from uploaded PDFs.
* **Real-time Mock Interviews:** Generates dynamic, position-specific questions based on user resume data.
* **Secure Payment Gateway:** Integrated Razorpay for processing monthly premium subscriptions.
* **Robust Auth Middleware:** Implements custom JWT verification and Google OAuth 2.0.

## 🛠️ Tech Stack
* **Frontend:** React.js (Vite), Tailwind CSS, Redux Toolkit
* **Backend:** Node.js, Express.js, Multer (File Handling)
* **Database:** MongoDB Atlas (Mongoose ORM)
* **APIs & Tools:** OpenRouter AI API, Razorpay API

## ⚙️ Environment Variables Setup
To run this project locally, create a `.env` file in your root directory and add:  
PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
OPENROUTER_API_KEY=your_key  
RAZORPAY_KEY_ID=your_key_id  

## 🏃‍♂️ How to Run Locally
1. Clone the repository: `git clone https://github.com`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
