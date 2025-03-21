
# Leave Days Frontend

This project is a React-based frontend application built with Vite. It provides a fast development environment with Hot Module Replacement (HMR) and a minimal setup for modern web development.

## Project Structure

The project is organized as follows:

```
.vscode/          # Editor-specific settings
public/           # Static assets
src/              # Source code
  assets/         # Static assets for the app
  components/     # Reusable UI components
  config/         # Configuration files
  hooks/          # Custom React hooks
  layout/         # Layout components
  pages/          # Page components
  routes/         # Application routes
  services/       # API services
  store/          # State management
.env.example      # Environment variable example file
.gitignore        # Git ignore rules
eslint.config.js  # ESLint configuration
index.html        # Main HTML file
package.json      # Project metadata and dependencies
README.md         # Project documentation
vite.config.js    # Vite configuration
```

## Features

- **React 19**: The latest version of React for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Ant Design**: A modern UI library for React.
- **React Router**: For managing application routing.
- **ESLint**: Configured with recommended rules and plugins for React and hooks.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code issues.

## Getting Started

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd leave-days-frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Expanding the ESLint Configuration

For production applications, consider using TypeScript and enabling type-aware lint rules. Check out the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for integration with [`typescript-eslint`](https://typescript-eslint.io).

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Ant Design Documentation](https://ant.design/)
- [React Router Documentation](https://reactrouter.com/)

## License

This project is licensed under the MIT License.