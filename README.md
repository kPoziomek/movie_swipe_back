# Movie Swiper Backend

REST API for the Movie swipe application.

## Features
- Movie management
- User interactions (likes/dislikes)
- Favorites system

## Tech Stack
- Node.js
- Express
- TypeScript
- Prisma
- SQLite

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm

### Installation
1. Clone the repository
```bash
git clone <your-repo-url>
cd backend
2. Install dependencies
```bash
npm install
3. Setup the database
```bash
npx prisma migrate dev
4. Start the server
```bash
npm run dev
```
### API Endpoints
- GET /api/movies - Get movies list
- GET /api/movies/:id - Get movie details
- POST /api/movies/:id/interact - Like/Dislike movie
- GET /api/movies/favorites - Get favorite movies
- DELETE /api/movies/:id/favorites - Remove movie from favorites
