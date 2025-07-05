# Deployment Instructions

## Option 1: Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "New Project"
3. Import your `pallav-portfolio` repository
4. Vercel will automatically detect it's a Next.js project
5. Before deploying, add your environment variables:
   - Go to "Environment Variables" section
   - Add `EMAIL_USER` = `your-email@gmail.com`
   - Add `EMAIL_PASS` = `your-app-password`
6. Click "Deploy"

Your site will be live at: `https://your-project-name.vercel.app`

## Option 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `.next`
5. Add environment variables in Site settings > Environment variables
6. Deploy

## Option 3: GitHub Pages (Static only)

For a static version without the contact form API:
1. Go to your GitHub repository
2. Settings > Pages
3. Source: GitHub Actions
4. Use the Next.js GitHub Actions workflow

## Important Notes:

- The contact form will only work with Vercel or Netlify (platforms that support API routes)
- Make sure to set environment variables in your deployment platform
- Keep your `.env.local` file private - never commit it to GitHub
