# Deployment Guide

This guide explains how to deploy the Daylight Clone site remotely.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git access to the repository

## Quick Deployment Steps

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd daylight-clone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build the Application
```bash
npm run build
```

### 4. Start Production Server
```bash
npm start
```

The site will be available at `http://localhost:3000`

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Next.js project
3. Deploy with default settings
4. Your site will be live at `https://your-project.vercel.app`

### Option 2: Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

### Option 3: Traditional Hosting
1. Build the project: `npm run build`
2. Upload the entire project folder to your hosting provider
3. Set up Node.js environment
4. Run: `npm start`

## Environment Variables

If you need to add environment variables:
1. Create a `.env.local` file (not committed to git)
2. Add any required environment variables
3. For production, set them in your hosting platform's dashboard

## File Structure for Deployment

The following files are essential for deployment:
```
daylight-clone/
├── src/                    # Application source code
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── package-lock.json      # Exact dependency versions
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.mjs      # ESLint configuration
├── postcss.config.mjs     # PostCSS configuration
├── next-env.d.ts          # Next.js TypeScript definitions
├── README.md              # Project documentation
├── DEV_SETUP.md           # Development setup
├── dev-server.sh          # Development helper script
└── .gitignore             # Git ignore rules
```

## Troubleshooting

### Build Errors
1. Ensure Node.js version is 18+
2. Clear cache: `rm -rf .next node_modules`
3. Reinstall: `npm install`
4. Rebuild: `npm run build`

### Port Issues
- Default port is 3000
- Change port: `PORT=3001 npm start`

### Memory Issues
- Increase Node.js memory: `NODE_OPTIONS="--max-old-space-size=4096" npm run build`

## Support

For development setup, see `DEV_SETUP.md`
For project details, see `README.md` 