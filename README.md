# Star Wars Character Manager - Frontend Challenge

This project is a Single Page Application (SPA) developed as a technical challenge. It allows users to manage a list of Star Wars characters, featuring search capabilities, local state management, and data persistence.

## Tech Stack

- **Core:** React 18, JavaScript.
- **Build Tool:** Vite (SWC) for fast HMR and compilation.
- **State Management:** Redux Toolkit.
- **Routing:** React Router DOM.
- **HTTP Client:** Axios.
- **Forms:** React Hook Form + Yup (Validation Schema).
- **Styling:** CSS Modules / Tailwind CSS (Adjust based on what you finally used).

## Features

- **Data Fetching:** Pre-loads character data from the SWAPI (Star Wars API).
- **Local Persistence:** Custom Redux Middleware to sync state with `localStorage` (Side-effect free reducers).
- **CRUD Operations:**
    - **Read:** View character details (Height, Gender).
    - **Search:** Filter characters by name in real-time.
    - **Create:** Add new custom characters via a modal form.
    - **Delete:** Remove characters from the list (persisted locally).
- **Optimizations:**
    - Separation of concerns (Container/Presenter pattern).
    - Custom Hooks for logic abstraction.
    - Clean Architecture principles applied to folder structure.

## Project Structure

The project follows a **feature-based** and **clean architecture** approach:

```text
src/
├── api/            # API services (Axios instances & endpoints)
├── components/     # Reusable UI components (Presentational)
├── screens/        # Page views (Container components)
├── store/          # Redux setup
│   ├── middleware/ # Custom middleware (e.g., localStorage persistence)
│   └── slices/     # State slices
├── utils/          # Helper functions (Formatters, validators)
└── App.jsx         # Main entry point
```

## Installation & Setup

1- Clone the repository

```text
git clone <YOUR_REPO_URL>
cd challenge-react
Install dependencies
```

2- Install dependencies

```text
npm install
```

3- Run the development server

```text
npm run dev
```
4- Build for production

```text
npm run build
```