# Steam Library Lambda App

A full-stack web application that displays my Steam game library using AWS Lambda for backend data retrieval and Next.js for the frontend interface.

## 🚀 Tech Stack

### Frontend

- **Next.js 15.4.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Sass** - CSS preprocessor for styling
- **Turbopack** - Fast bundler for development

### Backend

- **AWS Lambda** - Serverless function for API calls
- **Steam Web API** - External API for game data retrieval

### Development Tools

- **ESLint** - Code linting
- **Next.js ESLint Config** - Recommended linting rules

## 📋 Project Overview

This is a simple full-stack application that:

1. **Fetches Steam Library Data**: Uses an AWS Lambda function to retrieve details about games in my Steam library
2. **Displays Game Information**: Shows game titles, playtime, and header images in a responsive grid layout

### Key Features

- **Responsive design** that works on desktop and mobile
- **Error handling** with user-friendly error messages
- **Loading states** for better user experience
- **Modular component architecture** with reusable GameCard components

### Architecture

```
Frontend (Next.js) -> API Gateway -> AWS Lambda -> Steam Web API

```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd steam-library-lambda-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── GameCard/          # Reusable game card component
│   ├── hooks/
│   │   └── useGames.ts        # Custom hook for data fetching and caching
│   ├── types/
│   │   └── game.ts            # TypeScript interfaces
│   └── page.tsx               # Main application page
├── public/                    # Static assets
└── ...
```

## 🔧 Configuration

The application is configured to work with a specific AWS Lambda endpoint. If you need to modify the API endpoint, update the URL in `src/app/hooks/useGames.ts`.
