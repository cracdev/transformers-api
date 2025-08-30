#!/usr/bin/env node

/**
 * Transformers API - Modern TypeScript API for Transformers character names
 *
 * This is the main entry point for the application.
 * It starts the server and handles the application lifecycle.
 */

import { createApp } from './app';
import { startServer } from './server';

// For Vercel deployment, export the Express app
const app = createApp();

// Start the application only when not running in Vercel
if (process.env.VERCEL !== '1') {
  startServer().catch(error => {
    console.error('Failed to start application:', error);
    process.exit(1);
  });
}

// Export main components for testing and external use
export { createApp } from './app';
export { startServer } from './server';
export * from './types';
export { config } from './config';
export { logger } from './utils/logger';

// Default export for Vercel
export default app;
