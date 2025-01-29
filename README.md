# Football Manager Frontend

This is the frontend of the Football Manager application, built with Next.js. It provides a user interface for managing football-related data, such as teams, transfers, and players. The frontend communicates with the backend REST API to fetch and display data.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (LTS version recommended)
- npm or Yarn
- The backend part of the application running (refer to the backend's [README.md](../backend/README.md) for setup instructions)

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd football-manager-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or if you use Yarn
   yarn install
   ```

3. Configure environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following variables:
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:4000
     ```
     Replace `http://localhost:4000` with the actual URL of the backend API.

4. Start the development server:
   ```bash
   npm run dev
   # or if you use Yarn
   yarn dev
   ```

5. Open the application in your browser:
   - Development server: [http://localhost:3000](http://localhost:3000)

## Project Structure

- **`app/`**: Contains the main pages and routing logic (e.g., authentication, teams, transfers).
  - `auth/`: Authentication-related pages.
  - `team/`: Team-related pages, including individual team views and details.
  - `transfers/`: Pages for managing player transfers.
- **`components/`**: Reusable UI components such as forms, cards, and summaries.
- **`public/`**: Static assets (e.g., images, icons).
- **`utils/`**: Utility functions for handling reusable logic.
- **`globals.css`**: Global styles for the application.

## Available Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the application for production.
- **`npm run start`**: Start the production server.
- **`npm run lint`**: Run ESLint to analyze code for potential errors.

## Dependencies

This application uses the following key libraries and frameworks:
- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios or Fetch**: For making HTTP requests to the backend.
- **TypeScript**: Strongly typed JavaScript for better developer experience.

## Connecting to the Backend

The frontend relies on the backend for data. Ensure the backend is running and accessible at the URL specified in the `NEXT_PUBLIC_API_URL` environment variable. Refer to the backend's [README](../backend/README.md) for more details on setting up and running the backend.

## Testing

The frontend is set up to work with testing libraries. You can add and run tests using:
```bash
npm run test
```

## Deployment

To deploy the application, build it first:
```bash
npm run build
```

Then serve the built application using:
```bash
npm run start
```
