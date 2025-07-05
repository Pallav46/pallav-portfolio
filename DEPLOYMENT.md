# Deployment Instructions

## GitHub Pages Deployment (Static Site)

Your portfolio is now configured for GitHub Pages deployment!

### Automatic Deployment
1. Push your code to the `main` branch
2. Go to your repository settings on GitHub
3. Navigate to "Pages" section
4. Set source to "GitHub Actions"
5. The site will automatically build and deploy

### Manual Setup
If you need to configure GitHub Pages manually:
1. Go to your repository: https://github.com/Pallav46/pallav-portfolio
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

Your site will be available at: https://pallav46.github.io/pallav-portfolio/

### Contact Form
Since GitHub Pages only supports static sites, the contact form uses a mailto link that opens the user's email client. This is a simple and reliable solution.

## Alternative: Deploy to Vercel (Full Features)

If you want the full API-based contact form, you can deploy to Vercel:

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "New Project" and import your repository
3. Add environment variables:
   - `EMAIL_USER` = `your-email@gmail.com`
   - `EMAIL_PASS` = `your-app-password`
4. Deploy

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `out`
5. Deploy

## Important Notes

- GitHub Pages deployment creates a static site (no server-side functionality)
- The contact form will open the user's email client
- All other features work perfectly on GitHub Pages
- Your site will be available at: `https://[username].github.io/[repository-name]/`
