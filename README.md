# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on all devices
- **Contact Form**: Functional contact form that sends emails directly
- **Dark Theme**: Beautiful dark theme with gradient backgrounds
- **Smooth Scrolling**: Smooth scroll animations and progress indicator
- **SEO Optimized**: Built with Next.js for optimal performance

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd pallav-portfolio
```

2. Install dependencies
```bash
pnpm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Configure email settings in `.env.local`:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### Email Configuration

The contact form uses Gmail SMTP to send emails. To set this up:

1. **Enable 2-Factor Authentication** in your Google account
2. **Generate an App Password**:
   - Go to [Google Account settings](https://myaccount.google.com/)
   - Navigate to Security > 2-Step Verification > App passwords
   - Generate a new app password for this application
   - Use the generated 16-character password in your `.env.local` file

3. **Update the recipient email** in `app/api/contact/route.ts` if needed:
```typescript
to: 'pallavkumar6200@gmail.com', // Change this to your email
```

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

```bash
pnpm build
pnpm start
```

## Contact Form

The contact form includes:
- **Real Email Sending**: Messages are sent directly to your email
- **Form Validation**: All fields are required
- **Loading States**: Visual feedback during submission
- **Success/Error Messages**: Clear feedback to users
- **Responsive Design**: Works on all screen sizes

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Email**: Nodemailer
- **Icons**: Lucide React
- **Animations**: Framer Motion (via CSS)

## Project Structure

```
├── app/
│   ├── api/contact/         # Contact form API endpoint
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   └── [sections]/          # Page sections
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
└── public/                  # Static assets
```

## Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Any platform supporting Node.js

Make sure to set your environment variables in your deployment platform.

## License

This project is open source and available under the [MIT License](LICENSE).
