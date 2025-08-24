# Project File Structure

This document provides an overview of the important files and directories in the CommitRank.AI project.

## Root Directory

- `convex/`: Contains all backend logic, including database schema, functions, and actions.
- `public/`: Holds all static assets like images, fonts, and the `_redirects` file for Netlify.
- `src/`: The main folder for the React frontend application.
- `README.md`: The main project README file with an overview and setup instructions.
- `files.md`: This document.

## `/convex` Directory

- `schema.ts`: Defines the database schema for all tables (e.g., `profiles`).
- `profiles.ts`: Contains functions for creating, updating, and fetching developer profiles. Includes the backfill and error-clearing logic.
- `github.ts`: Handles all interactions with the GitHub API, including fetching profile data and metrics.
- `openai.ts`: Manages the generation of creative developer stories using the OpenAI API.
- `scores.ts`: Contains the logic for calculating and recalculating the Developer Impact Score.
- `lib/dis.ts`: The core implementation of the Developer Impact Score algorithm.

## `/src` Directory

- `App.tsx`: The main component that renders the application UI, including the header, profile list, and leaderboard.
- `main.tsx`: The entry point for the React application. It sets up the TanStack Router and the Convex client provider.
- `components/ProfileCard.tsx`: The React component responsible for displaying a single developer's profile card, including their score, stats, and AI-generated story.
- `routes/`: Contains the file-based routing configuration for TanStack Router.
  - `__root.tsx`: The root layout of the application.
  - `index.tsx`: The component for the main index page.
- `routeTree.gen.ts`: Auto-generated file by TanStack Router that defines the route structure.
