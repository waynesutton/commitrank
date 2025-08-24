# CommitRank.AI 🏆

CommitRank.AI is a tool to rank the best developers on GitHub with an AI-powered Developer Impact Score.

## Features

- **Real-time GitHub Profile Analysis**: Fetches and analyzes GitHub profiles using the GitHub API.
- **Developer Impact Score**: Ranks developers based on a weighted algorithm including commits, pull requests, followers, stars, issues closed, and language breadth. Ranks include:
  - 🔥 Legendary (90-100)
  - ⚡ Elite (75-89)
  - 🧙 Hacker (60-74)
  - ⚔️ Cracked (40-59)
  - 🌱 Noob (20-39)
  - 🧭 Basic (0-19)
- **AI-Generated Developer Tales**: Creates a short, creative fantasy-style story about a developer's GitHub journey using the OpenAI API.
- **Real-time Database**: Powered by Convex for live updates and seamless data synchronization.
- **Modern UI**: Built with React and Tailwind CSS for a responsive, clean interface.

## Tech Stack

- **Frontend**:
  - React with TypeScript
  - TanStack Router for routing
  - Tailwind CSS for styling
  - Lucide React for icons
  - Vite for build tooling
- **Backend**:
  - Convex for backend and real-time database
  - OpenAI API for AI story generation
  - GitHub API for profile and repository data
- **Infrastructure**:
  - Netlify for hosting
  - Convex for serverless backend
  - TypeScript for end-to-end type safety

## Local Development

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/waynesutton/commitrank.git
    cd commitrank
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Set up environment variables**:

    Create a `.env` file in the root of your project and add the following:

    ```bash
    # Get this from your Convex project dashboard
    VITE_CONVEX_URL=

    # Get these from your Convex project dashboard's environment variables settings
    GITHUB_TOKEN=
    OPENAI_API_KEY=
    ```

    _Note: Your `GITHUB_TOKEN` needs `public_repo` and `read:user` permissions._

4.  **Run Convex and the development server**:

    ```bash
    # In one terminal, run the Convex dev server
    npx convex dev

    # In another terminal, run the Vite dev server
    npm run dev
    ```

## Project Structure

- `/src` - React components and frontend code
- `/convex` - Convex backend functions and schema
- `/public` - Static assets, favicons, and Netlify redirect config
- A more detailed breakdown can be found in `files.md`.

## Contributing

1.  Fork the repository
2.  Create your feature branch: `git checkout -b feature/amazing-feature`
3.  Commit your changes: `git commit -m 'Add amazing feature'`
4.  Push to the branch: `git push origin feature/amazing-feature`
5.  Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
