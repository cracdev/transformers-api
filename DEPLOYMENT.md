# Vercel Deployment Guide

## Quick Deploy

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name: transformers-api (or your preferred name)
# - In which directory is your code located? ./
# - Want to override settings? N
```

### Option 2: Git Integration

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect the configuration

## Environment Variables

Set these in your Vercel dashboard:

```
NODE_ENV=production
PORT=3009 (optional, Vercel will override)
API_VERSION=v1
CORS_ORIGIN=* (or specific domains)
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100
LOG_LEVEL=info
```

## Configuration Files

- `vercel.json` - Main deployment configuration
- `.vercelignore` - Files to exclude from deployment
- `src/index.ts` - Modified to export Express app for serverless

## API Endpoints

After deployment, your API will be available at:

```
https://your-project-name.vercel.app/
https://your-project-name.vercel.app/api/v1/health
https://your-project-name.vercel.app/api/v1/random?count=3
https://your-project-name.vercel.app/api/v1/search?q=optimus
https://your-project-name.vercel.app/api/v1/all
https://your-project-name.vercel.app/api/v1/stats
```

## Notes

- The entire Express app runs as a single serverless function
- Cold starts may occur with infrequent usage
- Maximum execution time is 30 seconds (configurable)
- All routes are handled by the main Express application
