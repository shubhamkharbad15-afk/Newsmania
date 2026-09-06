# 📰 AI NewsMania

<p align="center">
  <strong>AI-powered news discovery, analysis & personalized reading</strong>
</p>

<p align="center">
  Discover the latest news, understand the story faster, and explore multiple perspectives with AI.
</p>

<p align="center">
  <a href="https://ai-newsmania1.onrender.com/">
    <strong>🌐 Live Demo →</strong>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" alt="Vite 6" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Firebase-11-FFCA28?logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Gemini-AI-4285F4?logo=google&logoColor=white" alt="Google Gemini" />
</p>

<p align="center">
  <a href="https://ai-newsmania1.onrender.com/">Live Application</a>
  •
  <a href="#-features">Features</a>
  •
  <a href="#-tech-stack">Tech Stack</a>
  •
  <a href="#-installation">Installation</a>
</p>

---

## ✨ Overview

**AI NewsMania** is an AI-powered news aggregation and analysis platform designed to help users discover important stories and understand them quickly.

Instead of simply displaying headlines, NewsMania enriches articles with **AI-generated summaries, sentiment analysis, multi-perspective insights, controversy analysis, and virality predictions**.

The platform also combines personalized features such as **bookmarks, reading lists, discussions, achievements, analytics, quizzes, and multilingual support** into a single news experience.

> **Explore the live application:**
> 🌐 https://ai-newsmania1.onrender.com/

---

## 🚀 Features

### 📰 Smart News Discovery

* 🔎 Full-text news search
* 🌍 Global news aggregation
* 📈 Trending news carousel
* 🗂️ Category-based browsing
* 🔥 Trending topics
* 🏆 Source credibility ranking
* 📰 Support for categories including:

  * Politics
  * Technology
  * Health
  * Business
  * Sports
  * Science
  * Climate
  * Entertainment

Articles are filtered for content completeness and ranked using a source credibility tier system.

---

### 🧠 AI-Powered News Intelligence

AI NewsMania goes beyond traditional news aggregation by analyzing stories with Google Gemini.

| AI Feature                    | Description                                                       |
| ----------------------------- | ----------------------------------------------------------------- |
| 📝 AI Summary                 | Generates concise 2–4 line article summaries                      |
| 💭 Sentiment Analysis         | Classifies stories as Positive, Negative, or Neutral              |
| 🔀 Multi-Perspective Analysis | Provides economic, social, political and environmental viewpoints |
| ⚠️ Controversy Rating         | Estimates the controversy level of a story                        |
| 📈 Virality Prediction        | Estimates the potential viral reach of an article                 |
| 🤖 AI Assistant               | General-purpose conversational AI interface                       |

The AI layer also includes **local fallback logic**, allowing the application to remain functional when an AI API is unavailable or rate-limited.

---

### 👤 User Experience

* 🔐 Email/password authentication
* 🔵 Google OAuth sign-in
* ⚫ GitHub OAuth sign-in
* 👤 User profile
* 📊 Account statistics
* 🔖 Persistent bookmarks
* 📚 Reading list
* 💬 Article discussions
* ❤️ Comment likes
* ↩️ Nested replies
* 🏆 Reading achievements
* ⚙️ User preferences
* 📊 Personal reading analytics
* 💎 Premium features section

Bookmarks are persisted through Firebase Firestore, while article discussions and comments are handled through the Node.js backend.

---

### 🎮 Engagement

NewsMania also includes interactive features designed to make news discovery more engaging.

#### 🎡 Spin the Wheel

Spin a category wheel and discover a random article from a randomly selected topic.

#### 🧩 News Quiz

Test your knowledge with a news-based quiz experience.

#### 🌍 Multilingual Interface

The application supports multiple languages through **i18next** and browser language detection:

**English · Hindi · Marathi · Japanese · Spanish · French · German · Italian · Portuguese · Russian · Chinese · Korean · Arabic · Turkish · Dutch**

---

## 🤖 AI Integration

AI NewsMania primarily uses **Google Gemini** for its AI-powered news intelligence.

| Service                            | Purpose                                                               |
| ---------------------------------- | --------------------------------------------------------------------- |
| Google Gemini (`gemini-1.5-flash`) | Summaries, sentiment, perspectives, controversy, virality and AI chat |
| OpenAI                             | Optional AI functionality                                             |

The Gemini implementation is located in:

```text
src/AiSummary/geminiApi.js
```

### AI Reliability

The Gemini integration includes:

* 🔄 Exponential backoff for HTTP 429 rate-limit errors
* ♻️ Up to 3 retry attempts
* 🛡️ Local fallback implementations
* ⚡ Graceful degradation when API keys are unavailable

---

## 📰 News Data Pipeline

NewsMania uses different news providers depending on the environment.

### Development

```text
NewsAPI
   ↓
News fetching
   ↓
Content filtering
   ↓
Credibility ranking
   ↓
NewsMania UI
```

### Production

```text
WorldNewsAPI
   ↓
News fetching
   ↓
Content filtering
   ↓
Credibility ranking
   ↓
NewsMania UI
```

Using WorldNewsAPI in production helps avoid browser CORS restrictions associated with direct NewsAPI requests.

Articles are filtered for title and description completeness before being ranked according to source credibility.

---

## 🏗️ Tech Stack

### Frontend

| Technology                | Role                              |
| ------------------------- | --------------------------------- |
| **React 18**              | UI framework                      |
| **Vite 6**                | Build tool and development server |
| **React Router DOM v7**   | Client-side routing               |
| **Tailwind CSS v4**       | Styling                           |
| **Framer Motion**         | Animations and transitions        |
| **Firebase v11**          | Authentication and Firestore      |
| **@google/generative-ai** | Gemini integration                |
| **OpenAI SDK**            | Optional AI integration           |
| **i18next**               | Internationalization              |
| **react-i18next**         | React internationalization        |
| **Axios**                 | HTTP requests                     |
| **Lucide React**          | Icons                             |
| **Radix UI**              | Accessible UI primitives          |
| **Sonner**                | Toast notifications               |
| **React Confetti**        | Celebration effects               |
| **SWR**                   | Data fetching and caching         |
| **Sentiment**             | Local sentiment-analysis fallback |

### Backend

Located in:

```text
server/
```

| Technology             | Role                      |
| ---------------------- | ------------------------- |
| **Node.js**            | Runtime                   |
| **Express**            | REST API server           |
| **MongoDB**            | Database                  |
| **Mongoose**           | MongoDB ODM               |
| **JWT**                | Authentication tokens     |
| **bcryptjs**           | Password hashing          |
| **express-rate-limit** | API rate limiting         |
| **ioredis**            | Redis integration         |
| **dotenv**             | Environment configuration |

---

## 🏛️ Architecture

```text
                         ┌─────────────────────┐
                         │      User           │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   React Frontend    │
                         │       + Vite        │
                         └──────────┬──────────┘
                                    │
                ┌───────────────────┼───────────────────┐
                │                   │                   │
                ▼                   ▼                   ▼
        ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
        │ News APIs    │    │ Firebase     │    │ AI Services  │
        │ NewsAPI /    │    │ Auth +       │    │ Gemini /     │
        │ WorldNewsAPI │    │ Firestore    │    │ OpenAI       │
        └──────────────┘    └──────────────┘    └──────────────┘
                                    │
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Express Backend   │
                         │ Auth + Discussions  │
                         └──────────┬──────────┘
                                    │
                         ┌──────────┴──────────┐
                         ▼                     ▼
                  ┌──────────────┐     ┌──────────────┐
                  │   MongoDB    │     │    Redis     │
                  │ Users/Posts  │     │ Tracking     │
                  └──────────────┘     └──────────────┘
```

---

## 📁 Project Structure

```text
AI_NEWSMANIA/
│
├── src/
│   ├── AiSummary/              # AI news summaries and analysis
│   ├── components/
│   │   ├── custom/             # Application-level components
│   │   ├── layout/             # Application layout
│   │   └── ui/                 # Reusable UI primitives
│   ├── context/                # Authentication and bookmark state
│   ├── service/                # AI service integrations
│   ├── constants/              # Shared application constants
│   ├── lib/                    # Utility functions
│   ├── pages/                  # Application pages
│   ├── proxy/                  # API proxy utilities
│   ├── create-trip/            # AI trip planner
│   └── view-trip/              # Trip itinerary viewer
│
├── server/
│   ├── routes/                 # Authentication and comments APIs
│   ├── models/                 # MongoDB schemas
│   └── middleware/             # JWT authentication and rate limiting
│
├── public/                     # Static assets
├── firebase.js                 # Firebase initialization
├── index.html                  # Application entry HTML
├── package.json                # Frontend dependencies/scripts
├── vite.config.js              # Vite configuration
└── README.md
```

---

## ⚙️ Environment Variables

> **Never commit API keys, passwords, tokens, database credentials, or `.env` files to GitHub.**

### Frontend

Create a `.env` file in the project root.

```env
# Firebase
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Google OAuth
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_oauth_client_id.apps.googleusercontent.com

# Google Places
VITE_GOOGLE_PLACE_API_KEY=your_google_places_api_key

# Gemini
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key

# News APIs
VITE_NEWS_API_KEY=your_newsapi_key
VITE_WORLD_NEWS_API_KEY=your_worldnews_key

# OpenAI (optional)
VITE_OPENAI_API_KEY=your_openai_api_key
```

### Backend

Create:

```text
server/.env
```

```env
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/newsmania
JWT_SECRET=your_long_random_secret
REDIS_URL=redis://localhost:6379
PORT=5000
```

Both `.env` files should remain local and be excluded through `.gitignore`.

---

## 🛠️ Installation

### Prerequisites

Make sure you have:

* Node.js 18+
* npm 9+
* Firebase project
* Firebase Authentication configured
* Firebase Firestore enabled
* MongoDB Atlas cluster
* Redis instance

### 1. Clone the repository

```bash
git clone https://github.com/your-username/AI_NEWSMANIA.git
cd AI_NEWSMANIA
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Configure frontend environment

```bash
cp .env.example .env
```

Then add your actual API credentials.

### 4. Install backend dependencies

```bash
cd server
npm install
cd ..
```

### 5. Configure backend environment

```bash
cp server/.env.example server/.env
```

Then configure MongoDB, JWT and Redis.

---

## ▶️ Running Locally

### Start the frontend

```bash
npm run dev
```

The development application will normally be available at:

```text
http://localhost:5173
```

### Start the backend

```bash
cd server
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

For production-style backend execution:

```bash
npm start
```

---

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

The generated application will be available inside:

```text
dist/
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

### Live Application

<p align="center">
  <a href="https://ai-newsmania1.onrender.com/">
    <strong>🚀 Open AI NewsMania</strong>
  </a>
</p>

**Deployment platform:** Render

Live URL:

```text
https://ai-newsmania1.onrender.com/
```

### Production Configuration

For deployment:

1. Configure all required `VITE_*` environment variables in the hosting platform.
2. Build the frontend using:

```bash
npm run build
```

3. Serve the generated `dist/` directory.
4. Configure the backend as a separate service if required.
5. Configure MongoDB and Redis credentials through server-side environment variables.

In production, the application switches from direct NewsAPI usage to WorldNewsAPI to avoid CORS-related restrictions.

---

## 🔐 Security

The project includes several security measures:

* 🔑 Secrets are loaded through environment variables
* 🚫 `.env` files are excluded from Git
* 🔒 Passwords are hashed using bcrypt
* 🎟️ JWT-based authentication
* 🛡️ Authentication rate limiting
* 🚦 General API rate limiting
* 🔐 Backend authentication middleware

### Production Consideration

The current OpenAI client uses:

```text
dangerouslyAllowBrowser: true
```

For a production-grade architecture, OpenAI requests should ideally be routed through the backend so that API credentials are never exposed to the browser.

---

## 🧩 Additional Features

### 🤖 AI Trip Planner

The project also contains an earlier AI-powered trip planning module using Gemini and Google Places.

Relevant directories:

```text
src/create-trip/
src/view-trip/
```

These features remain functional but are not the primary focus of the current NewsMania experience.

### 💬 Discussion System

The backend provides APIs for:

* User authentication
* Comments
* Nested replies
* Comment likes

Relevant backend routes:

```text
server/routes/auth.js
server/routes/comments.js
```

---

## 📌 Development Notes

### News API Selection

```text
localhost
   ↓
NewsAPI

production
   ↓
WorldNewsAPI
```

This environment-based approach helps the application use the appropriate provider during development and production.

### AI Fallbacks

AI functionality contains local fallback behavior to prevent the application from becoming completely unusable when AI services are unavailable or rate-limited.

---

## 🔮 Future Improvements

Potential areas for further development include:

* 🔔 Real-time personalized news notifications
* 🧠 More advanced article recommendation algorithms
* 📊 Expanded user analytics
* 🔍 Improved semantic news search
* 🤝 More advanced community discussion features
* 🔐 Moving all AI API calls behind secure backend endpoints
* 📱 Progressive Web App / mobile optimization
* ⚡ Further performance and caching improvements

---

## 📄 License

No license has currently been specified for this project.

---

## ⭐ Try AI NewsMania

<p align="center">

### 📰 Stay informed.

### 🧠 Understand faster.

### 🌍 See more perspectives.

<br />

<a href="https://ai-newsmania1.onrender.com/">
  <strong>🚀 Launch AI NewsMania →</strong>
</a>

</p>
