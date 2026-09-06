# AI NewsMania

### 🌐 Live Demo: [https://ai-newsmania1.onrender.com/](https://ai-newsmania1.onrender.com/)

> An AI-powered news aggregation platform that fetches articles from credible global sources and enriches them with Gemini-generated summaries, sentiment analysis, multi-perspective breakdowns, and virality predictions — all in a multilingual interface.

---

## 🚀 Features

### 📰 News Discovery
- Full-text news search powered by [NewsAPI](https://newsapi.org) (development) and [WorldNewsAPI](https://worldnewsapi.com) (production)
- Trending news carousel on the homepage with auto-scroll
- Browse by category (Politics, Technology, Health, Business, Sports, Science, Climate, Entertainment)
- Trending topics feed with curated queries
- Source credibility tier system — articles are ranked and sorted by source reputation (Reuters, BBC, NYT, The Hindu, NDTV, etc.)

### 🧠 AI Capabilities
- **AI Summary** — Gemini-generated 2–4 line summaries for any article
- **Sentiment Analysis** — classifies articles as Positive, Negative, or Neutral
- **Multi-Perspective Analysis** — generates 3 viewpoints (economic, social, political, environmental) per story
- **Controversy Rating** — AI-assessed High/Low controversy score
- **Virality Prediction** — percentage estimate of an article's viral potential
- **AI Assistant** — general-purpose chat interface powered by Gemini
- All AI features include local fallback logic so the app remains functional when API keys are unavailable or rate-limited

### 👤 User Features
- Email/password registration and login
- Google OAuth sign-in
- GitHub OAuth sign-in
- User profile page with display name, avatar initial, and account stats
- Bookmarks — save and manage articles across sessions (stored in Firebase Firestore)
- Reading list — queue articles to read later
- Discussions — per-article comment threads with likes and nested replies (backed by MongoDB)
- Achievements — badge system tracking reading milestones
- Preferences — customise news categories and notification settings
- Analytics — track personal reading habits
- Premium Features page

### 🎮 Engagement
- **Spin the Wheel** — spin a category wheel to discover a random article from a random topic
- **Quiz Component** — news-based quiz
- Multi-language support (English, Hindi, Marathi, Japanese, Spanish, French, German, Italian, Portuguese, Russian, Chinese, Korean, Arabic, Turkish, Dutch) via i18next with browser language detection

---

## 🧠 AI Integration

| Service | Purpose | Key Used |
|---|---|---|
| Google Gemini (`gemini-1.5-flash`) | Summaries, sentiment, perspectives, controversy, virality, chat | `VITE_GEMINI_API_KEY` / `VITE_GOOGLE_GEMINI_AI_API_KEY` |
| OpenAI | Optional AI features | `VITE_OPENAI_API_KEY` |

The Gemini integration (`src/AiSummary/geminiApi.js`) includes:
- Exponential back-off retry on HTTP 429 rate-limit errors (up to 3 retries)
- Full local fallback implementations for every AI function so the app degrades gracefully

---

## 📰 News Sources

- **Development (localhost):** Direct NewsAPI requests
- **Production (deployed):** WorldNewsAPI to avoid CORS restrictions
- Articles are filtered for title + description completeness, then sorted by source credibility tier before display

---

## 🏗️ Tech Stack

### Frontend
| Technology | Role |
|---|---|
| React 18 | UI framework |
| Vite 6 | Build tool and dev server |
| React Router DOM v7 | Client-side routing |
| Tailwind CSS v4 | Utility-first styling |
| Framer Motion | Animations and transitions |
| Firebase v11 | Authentication and Firestore database |
| `@react-oauth/google` | Google OAuth |
| `@google/generative-ai` | Gemini SDK |
| OpenAI SDK | OpenAI client |
| i18next + react-i18next | Internationalisation |
| Axios | HTTP client |
| Lucide React | Icons |
| Radix UI | Accessible UI primitives (Avatar, Dialog, Dropdown) |
| Sonner | Toast notifications |
| react-confetti | Confetti effects |
| SWR | Data fetching / caching |
| Sentiment | Local sentiment analysis fallback |

### Backend (`server/`)
| Technology | Role |
|---|---|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database for users and comments |
| JWT (`jsonwebtoken`) | Authentication tokens |
| bcryptjs | Password hashing |
| express-rate-limit | Auth and API rate limiting |
| ioredis | Redis client (article view tracking, virality) |
| dotenv | Environment variable loading |

---

## 📁 Project Structure

```
AI_NEWSMANIA/
├── src/
│   ├── AiSummary/          # Core AI feature pages + Gemini/News API clients
│   ├── components/
│   │   ├── custom/         # All page-level components (Hero, Header, Footer, Profile, etc.)
│   │   ├── layout/         # RootLayout (Header + Outlet + Footer)
│   │   └── ui/             # Radix-based primitives (Button, Dialog, etc.)
│   ├── context/            # AuthContext (Firebase), BookmarkContext
│   ├── service/            # Gemini chat session (AIModel), OpenAI client
│   ├── constants/          # Shared option arrays
│   ├── lib/                # Utility helpers
│   ├── create-trip/        # AI trip planner feature (Gemini + Google Places)
│   └── view-trip/          # Trip itinerary viewer (Firestore-backed)
├── server/                 # Express backend
│   ├── routes/             # /auth and /comments REST routes
│   ├── models/             # Mongoose User and Comment schemas
│   └── middleware/         # JWT auth guard, rate limiter
├── public/                 # Static assets (logos, images)
├── firebase.js             # Firebase initialisation (auth, Firestore, storage)
├── .env.example            # Frontend environment variable template
└── server/.env.example     # Backend environment variable template
```

---

## ⚙️ Environment Variables

### Frontend (`.env` at project root)

Copy `.env.example` to `.env` and fill in your values:

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

# Google Places (trip planner feature)
VITE_GOOGLE_PLACE_API_KEY=your_google_places_api_key

# Gemini AI
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key

# News APIs
VITE_NEWS_API_KEY=your_newsapi_key          # https://newsapi.org
VITE_WORLD_NEWS_API_KEY=your_worldnews_key  # https://worldnewsapi.com

# OpenAI (optional)
VITE_OPENAI_API_KEY=your_openai_api_key
```

### Backend (`server/.env`)

Copy `server/.env.example` to `server/.env`:

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/newsmania
JWT_SECRET=your_long_random_secret
REDIS_URL=redis://localhost:6379
PORT=5000
```

> **Never commit `.env` or `server/.env`.** Both are excluded by `.gitignore`.

---

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- npm 9+
- A Firebase project with Authentication and Firestore enabled
- MongoDB Atlas cluster (for the backend comments/users API)
- Redis instance (for article view tracking)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/AI_NEWSMANIA.git
cd AI_NEWSMANIA
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Set up frontend environment variables

```bash
cp .env.example .env
# Edit .env with your actual keys
```

### 4. Install backend dependencies

```bash
cd server
npm install
cd ..
```

### 5. Set up backend environment variables

```bash
cp server/.env.example server/.env
# Edit server/.env with your actual values
```

---

## ▶️ Running the Project

### Frontend (development)

```bash
npm run dev
```

Opens at `http://localhost:5173`

> Note: NewsAPI direct requests only work on localhost. In production the app switches to WorldNewsAPI automatically.

### Backend server

```bash
cd server
npm run dev      # with nodemon (auto-reload)
# or
npm start        # production
```

Runs at `http://localhost:5000`

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

### Preview production build locally

```bash
npm run preview
```

---

## 🌐 Deployment

Live at **[https://ai-newsmania1.onrender.com/](https://ai-newsmania1.onrender.com/)**

The project is deployed on [Render](https://render.com). The frontend is served as a static site from the `dist/` build output. The backend `server/` can be deployed as a separate Render web service.

Key deployment notes:
- Set all `VITE_*` environment variables in Render's environment settings before building
- The app automatically uses WorldNewsAPI (instead of NewsAPI) when running outside localhost, avoiding CORS restrictions
- Firebase offline persistence is enabled via IndexedDB for a better offline experience

---

## 🔐 Security

- All API keys and secrets are loaded exclusively from environment variables — none are hardcoded in source
- `.env` and `server/.env` are listed in `.gitignore` and must never be committed
- The backend uses bcrypt for password hashing and JWT for stateless authentication
- Auth routes are protected with a 5-requests/15-minute rate limiter
- General API routes are limited to 100 requests/minute
- The OpenAI client uses `dangerouslyAllowBrowser: true` — for production use, proxy OpenAI calls through the backend instead of calling it from the browser directly

---

## 📌 Notes

- The `src/create-trip/` and `src/view-trip/` directories contain a Gemini + Google Places powered AI trip planner that was part of an earlier iteration of the project. It remains functional but is not a primary feature of NewsMania.
- The `server/` backend handles user registration/login and article comments. The main authentication for the frontend uses Firebase directly.

---

## 📄 License

No license has been specified for this project.
