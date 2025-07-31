# 🪙 Real-Time Gold Price Tracker & Purchase App

A Node.js web application that displays real-time gold prices and allows users to simulate purchasing gold based on their desired amount. Built with vanilla JavaScript, no frameworks, and a custom server.
## 📌 Features

### 📈 Live Gold Price Display
    Real-time updates of the current gold price.

### 🛒 Purchase Simulation
    Enter an amount of gold you'd like to "purchase" and see the total price calculated instantly.

### 🧼 Input Sanitization
    Prevents injection and unsafe user inputs.

### 📁 Static File Serving
    Handles serving HTML, CSS, JS, and image files with appropriate content types.

### ⚙️ Custom Server
    Built from scratch using core Node.js modules—no Express or other frameworks.

## 🗂️ Project Structure
```
.
├── data/                   # Stores app data
│   └── data.json
├── handlers/              # Route logic
│   └── routeHandlers.js
├── public/                # Frontend assets
│   ├── index.html         # Main UI
│   ├── index.js           # Frontend logic
│   ├── index.css          # Styling
│   ├── 404.html
│   └── images/
├── utils/                 # Utility functions
│   ├── sanitizeInput.js   # Cleans user input
│   ├── sendResponse.js    # Handles HTTP responses
│   └── ...                # Other server utilities
├── server.js              # Main entry point
├── package.json
└── package-lock.json

```

## 🚀 Getting Started
## 1. Clone the repo

```
git clone https://github.com/your-username/gold-price-tracker.git
cd gold-price-tracker
```

## 2. Install dependencies

```
npm install
```

## 3. Run the server

```
node server.js
```

## 4. Open in browser

Visit:
```
http://localhost:3000
```

## 🛠 Tech Stack
    
    - Backend: Node.js (no frameworks)

    - Frontend: Vanilla JS, HTML, CSS

    - Data Storage: JSON file

    - Utilities: Custom-built routing, sanitization, and static file serving


## 🙌 Credits

Built with care by [Your Name].
Gold pricing API powered by [insert API name here, if applicable].

## 📄 License

This project is open-source under the MIT License.
