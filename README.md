# NeuralWatch 🛡️

### AI-Powered Real-Time Financial Fraud Detection System

NeuralWatch is an intelligent fraud detection system designed to monitor and analyze digital financial transactions, particularly UPI transactions, and identify potentially fraudulent activity in real time.

The system combines a **rule-based detection layer** with **machine learning models** to analyze transactions efficiently and flag suspicious patterns. By filtering obvious cases before sending transactions for further analysis, NeuralWatch aims to reduce unnecessary processing and improve detection efficiency.

---

## 🚀 Overview

Digital payments have made financial transactions faster and more convenient, but they have also increased the risk of fraudulent activity.

NeuralWatch addresses this challenge by analyzing transaction data and identifying suspicious patterns using a combination of predefined rules and machine learning techniques.

The system follows a layered approach:

```text
Transaction Data
       ↓
Data Processing
       ↓
Rule-Based Pre-Check
       ↓
Machine Learning Analysis
       ↓
Fraud Risk Assessment
       ↓
Dashboard & Alerts
```

---

## ✨ Features

* Real-time transaction monitoring
* UPI transaction analysis
* Rule-based fraud detection
* Machine learning-based risk assessment
* Suspicious transaction detection
* Transaction data processing pipeline
* Fraud analysis dashboard
* User and transaction profile management
* Feedback storage for transaction analysis
* Data replay functionality for testing transaction streams

---

## 🧠 How It Works

### 1. Transaction Input

The system receives transaction data for analysis.

### 2. Data Processing

The transaction data is processed and structured before being passed through the detection pipeline.

### 3. Rule-Based Detection

A rule engine performs an initial evaluation of the transaction based on predefined suspicious patterns and conditions.

This layer helps filter transactions efficiently before further analysis.

### 4. Machine Learning Analysis

Transactions that require deeper analysis are evaluated using machine learning models trained to identify potentially fraudulent behavior.

### 5. Fraud Risk Assessment

Based on the analysis, the system determines the risk associated with a transaction and flags suspicious activity.

### 6. Dashboard Visualization

The results can be viewed through an interactive dashboard for easier monitoring and analysis.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite

### Backend

* Python
* Machine Learning
* Data Processing and Analysis

---

## 📁 Project Structure

```text
NeuralWatch/
│
├── HackTheCore/              # Hackathon documentation & resources
│
├── NeuralWatch-main/         # Main NeuralWatch application
│   ├── backend/              # Flask backend & ML pipeline
│   ├── data/                 # Dataset and transaction data
│   ├── public/               # Static assets
│   ├── src/                  # Frontend source code
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── others/                   # Additional project resources
├── public/                   # Public assets
├── src/                      # Frontend source
├── Project_demo.mp4         # Project demonstration
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Python

---

### 1. Clone the Repository

```bash
git clone https://github.com/perry1291/NeuralWatch.git
```

Navigate to the project directory:

```bash
cd NeuralWatch/NeuralWatch-main
```

---

## 💻 Frontend Setup

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available on the local development URL provided by Vite.

---

## ⚙️ Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment.

### Windows

```bash
venv\Scripts\activate
```

### macOS/Linux

```bash
source venv/bin/activate
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Configure the required environment variables using the provided `.env.example` file.

Run the backend application:

```bash
python main.py
```

---

## 🔍 Key Components

### `data_pipeline.py`

Handles the processing and preparation of transaction data for analysis.

### `rule_engine.py`

Contains predefined rules used to identify potentially suspicious transactions during the initial detection stage.

### `ato_detector.py`

Handles detection logic related to suspicious account activity.

### `train_models.py`

Contains the machine learning model training workflow.

### `feature_schema.py`

Defines and manages the features used during transaction analysis.

### `profile_store.py`

Handles the storage and management of user or transaction-related profiles.

### `replay_upi_csv.py`

Allows transaction data from CSV files to be replayed for testing and simulation.

---

## 🎯 Project Objective

The primary objective of NeuralWatch is to explore how **Artificial Intelligence and Machine Learning can be applied to financial fraud detection**.

The project focuses on building a practical detection pipeline that combines traditional rule-based checks with intelligent machine learning analysis to identify suspicious transactions more efficiently.

---

## 🏆 Hackathon Project

NeuralWatch was developed as part of **HACKUP 2026 – Hack The Core**, organized at **A. C. Patil College of Engineering**.

The project addressed the problem statement of **AI in Financial Fraud Detection**.

Our team was shortlisted among the participating teams and developed NeuralWatch as a solution for detecting suspicious UPI transactions through a combination of rule-based processing and machine learning.

---

## 👥 Team

Developed by **Team Neural Nexus**.

---

## 🔮 Future Improvements

* Advanced fraud detection models
* Improved anomaly detection
* Real-time streaming integration
* Enhanced transaction analytics
* Improved fraud risk scoring
* Model performance monitoring
* Scalable deployment architecture
* Integration with additional financial transaction sources

---

## 📌 Note

This project was developed as a hackathon project for learning and experimentation purposes. It is not intended to be used as a production-ready financial fraud detection system without further security, scalability, and model validation improvements.

---

⭐ If you found this project interesting, feel free to explore the repository and its implementation.
