#!/bin/bash

# Development Server Helper Script
# This script provides a stable development environment

echo "🚀 Starting Next.js Development Server..."

# Set environment variables for better stability
export NODE_ENV=development
export NEXT_TELEMETRY_DISABLED=1
export NODE_OPTIONS="--max-old-space-size=4096 --optimize-for-size"
export CHOKIDAR_USEPOLLING=true
export CHOKIDAR_INTERVAL=1000

# Kill any existing Next.js processes
echo "🔄 Cleaning up existing processes..."
pkill -f "next dev" || true
sleep 2

# Start the development server
echo "📡 Starting server on http://localhost:3000"
echo "💡 Press Ctrl+C to stop the server"
echo ""

# Use the stable dev script (without turbopack for maximum stability)
npm run dev:stable 