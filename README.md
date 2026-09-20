# Quintana & Co. Starter Website

A production-quality Astro + Tailwind starter website for **Quintana & Co.**

## Setup

1. Ensure you have Node.js installed (v18.14.1 or later).
2. Navigate to the project directory:
   ```bash
   cd regular-remnant
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

## Build

To build the project for production:

```bash
npm run build
```

The static files will be generated in the `dist` directory.

## Deployment to Netlify

Follow these steps to deploy your site to Netlify using their Git integration for automatic deployments.

### Prerequisites
- Your project must be pushed to a Git repository (GitHub, GitLab, or Bitbucket).

### Step-by-Step Guide
1. **Create a Netlify Account:** If you don't have one, sign up for a free account at [app.netlify.com](https://app.netlify.com/).
2. **Connect your Repository:**
   - Log in to your Netlify dashboard.
   - Click the **"Add new site"** button and select **"Import an existing project"**.
   - Select your Git provider (e.g., GitHub) and authorize Netlify to access your repositories.
   - Choose the repository that contains your project.
3. **Configure Build Settings:**
   - **Base directory:** Leave empty (default).
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Deploy:**
   - Click the **"Deploy site"** button. Netlify will now build your project and provide you with a live URL.
5. **Automatic Updates:**
   - Every time you push changes to your main branch, Netlify will automatically rebuild and redeploy your site.
