# CommitRank.AI 🏆

CommitRank.AI is a tool to help you rank the best developers on GitHub with AI.

## Features

- **Real-time GitHub Profile Analysis**: Fetches and analyzes GitHub profiles using the GitHub API
- **Commit-based Ranking System**: Categorizes developers into ranks:

  - 🌟 Overload (100,000+ commits)
  - 💻 Hacker (10,000+ commits)
  - 🔮 Wizard (5,000+ commits)
  - ⚔️ Samurai (1,000+ commits)
  - 🌱 Noob (10-999 commits)
  - 🧭 Explorer (<10 commits)
  - ⚡ Convex Developer (Uses Convex in repos)

- **AI Chat Interface**: Engage in conversations about developers' commit history and coding patterns
- **Real-time Database**: Powered by Convex for live updates and seamless data synchronization
- **Modern UI**: Built with React and Tailwind CSS for a responsive, clean interface

## Tech Stack

- **Frontend**:

  - React with TypeScript
  - Tailwind CSS for styling
  - Lucide React for icons
  - Vite for build tooling

- **Backend**:

  - Convex for backend and real-time database
  - OpenAI API for AI chat functionality
  - GitHub API for profile and commit data

- **Infrastructure**:
  - Netlify for hosting
  - Convex for serverless backend
  - TypeScript for type safety

## Local Development

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/commitrank.git
   cd commitrank
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

Required environment variables:

- \`CONVEX_DEPLOYMENT\`
- \`OPENAI_API_KEY\`

4. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Start Convex development server:
   \`\`\`bash
   npx convex dev
   \`\`\`

## Project Structure

- \`/src\` - React components and frontend code
- \`/convex\` - Convex backend functions and schema
- \`/public\` - Static assets and favicons
- \`/types\` - TypeScript type definitions

## Contributing

1. Fork the repository
2. Create your feature branch: \`git checkout -b feature/amazing-feature\`
3. Commit your changes: \`git commit -m 'Add amazing feature'\`
4. Push to the branch: \`git push origin feature/amazing-feature\`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Convex](https://convex.dev)
- Powered by [OpenAI](https://openai.com)
- UI components from [TanStack](https://tanstack.com)
- Development environment by [Bolt.new](https://bolt.new)
