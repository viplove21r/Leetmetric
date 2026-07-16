# 🚀 LeetMetric - LeetCode Profile Analyzer

A full-stack web application that allows users to analyze their **LeetCode profile statistics** by simply entering their username.

LeetMetric fetches user data from the LeetCode GraphQL API and displays solved problem statistics, difficulty-wise progress, ranking, reputation, and other profile insights through an interactive dashboard.

---

## 🌟 Features

### 📊 Problem Solving Statistics

* Displays total problems solved
* Shows progress for:

  * 🟢 Easy problems
  * 🟡 Medium problems
  * 🔴 Hard problems
* Dynamic circular progress indicators

### 👤 User Profile Information

Displays:

* LeetCode ranking
* Reputation
* Star rating
* About section

### 🔍 Username Validation

* Validates LeetCode usernames using Regex
* Prevents invalid API requests

### ⚡ Real-Time Data Fetching

* Fetches live data from LeetCode GraphQL API
* Uses asynchronous API communication

### 📱 Responsive UI

* Modern dashboard layout
* Responsive design for different screen sizes
* Clean card-based interface

---

# 🛠️ Tech Stack

## Frontend

* HTML5
* CSS3
* JavaScript (ES6+)

Concepts used:

* DOM Manipulation
* Fetch API
* Async/Await
* Event Handling
* CSS Flexbox
* CSS Grid
* Responsive Design

## Backend

* Node.js
* Express.js
* Axios
* CORS

## API

* LeetCode GraphQL API

---


The frontend communicates with the backend server to avoid browser CORS restrictions.

The backend securely handles API requests and returns formatted JSON data to the frontend.

---

# 📂 Folder Structure

```
LeetMetric

│
├── frontend
│   |
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
│
└── backend
    |
    ├── server.js
    ├── package.json
    └── package-lock.json

```

---

# ⚙️ Installation & Setup


# Backend Setup

Go to backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Backend will run on:

```
http://localhost:3000
```

---

# Frontend Setup

Open the frontend folder:

```
frontend/index.html
```

You can run it using:

* VS Code Live Server extension

or

* Any static server

---

# 🔌 API Endpoint

### POST

```
/leetcode
```

### Request Body

```json
{
    "username":"leetcode_username"
}
```

### Response

Returns:

* User profile data
* Solved question statistics
* Difficulty-wise progress
* Ranking information

---


# 🔮 Future Improvements

Possible enhancements:

* Add LeetCode contest rating
* Add badges section
* Add language-wise statistics
* Add problem-solving streak
* Add recent submissions
* Add comparison between multiple users
* Add dark/light theme toggle
* Add user authentication
* Add data visualization charts

---

# 🤝 Contributing

Contributions are welcome!

Steps:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Create a Pull Request

---

# 👨‍💻 Author

**Viplove Rajora**

---

⭐ If you found this project useful, consider giving it a star!
