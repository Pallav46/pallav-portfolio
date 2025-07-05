# 🚀 Pallav Kumar - Portfolio Website

<div align="center">

![Portfolio Banner](https://via.placeholder.com/1200x400/0f172a/ffffff?text=Pallav+Kumar+%7C+Full+Stack+Developer)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Portfolio-2563eb?style=for-the-badge)](https://pallav46.github.io/pallav-portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Pallav46/pallav-portfolio)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**A modern, responsive portfolio showcasing full-stack development expertise**

</div>

---

## 🛠️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

</div>

## � About

This portfolio represents my journey as a **Full Stack Developer** and **Computer Science Engineering student** at IIIT Guwahati. Built with modern web technologies, it showcases my expertise in creating scalable, responsive applications with clean, maintainable code.

### 🎯 Key Highlights

- 🏆 **8.13 CGPA** at IIIT Guwahati
- ⭐ **3★ CodeChef** Rating
- 💼 **Frontend Developer Intern** at The Tann Mann Gaadi
- 🚀 **3+ Major Projects** with real-world applications

## �🌐 Live Demo

**[🔗 View Live Portfolio](https://pallav46.github.io/pallav-portfolio/)**

> *Experience the full interactive portfolio with smooth animations, responsive design, and working contact form*

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Design & UX**
- ✅ **Modern Glass-morphism** design
- ✅ **Dark theme** with gradient backgrounds  
- ✅ **Smooth animations** and micro-interactions
- ✅ **Responsive design** for all devices
- ✅ **Accessibility compliant** (WCAG guidelines)

</td>
<td width="50%">

### ⚡ **Performance & Tech**
- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **SEO optimized** meta tags
- ✅ **Fast loading** with optimized assets
- ✅ **Static site generation** for GitHub Pages

</td>
</tr>
<tr>
<td width="50%">

### 📧 **Interactive Elements**
- ✅ **Working contact form** with email integration
- ✅ **Resume download** functionality
- ✅ **Smooth scroll** navigation
- ✅ **Progress indicator** while scrolling
- ✅ **Social media** integration

</td>
<td width="50%">

### 🚀 **Featured Projects**
- ✅ **[Cryuze](https://github.com/Pallav46/Cryuze)** - Hyperlocal service platform
- ✅ **[ProxyServer](https://github.com/Pallav46/ProxyServer)** - High-performance reverse proxy
- ✅ **[MoodScape](https://github.com/Pallav46/MicroserviceMoodScape)** - AI emotion detection app
- ✅ **Live demos** and source code links

</td>
</tr>
</table>

## 🚀 Quick Start

### Prerequisites

![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat-square&logo=nodedotjs)
![pnpm](https://img.shields.io/badge/pnpm-latest-F69220?style=flat-square&logo=pnpm)

### Installation & Setup

```bash
# 📥 Clone the repository
git clone https://github.com/Pallav46/pallav-portfolio.git
cd pallav-portfolio

# 📦 Install dependencies
pnpm install

# 🔧 Environment setup
cp .env.example .env.local

# 🚀 Start development server
pnpm dev
```

### 🌐 View the website
Open [http://localhost:3000](http://localhost:3000) in your browser

### 📧 Email Configuration (Optional)

<details>
<summary>Click to expand email setup instructions</summary>

The contact form uses Gmail SMTP. To enable it:

1. **Enable 2FA** in your Google account
2. **Generate App Password**:
   - Visit [Google Account Settings](https://myaccount.google.com/)
   - Go to Security → 2-Step Verification → App passwords
   - Generate password for this application

3. **Configure environment variables** in `.env.local`:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_character_app_password
```

4. **Update recipient** in `app/api/contact/route.ts`:
```typescript
to: 'your_email@gmail.com',
```

</details>

## 🏗️ Architecture & Design

### 🎨 Design Philosophy
- **Mobile-first** responsive design approach
- **Glass-morphism** UI with modern aesthetics  
- **Accessibility-focused** with ARIA labels and keyboard navigation
- **Performance-optimized** with lazy loading and code splitting

### 🧱 Component Architecture
```
components/
├── 🏠 HeroSection.tsx          # Landing section with intro
├── 👨‍💼 AboutSection.tsx         # About me and education
├── 🛠️ SkillsSection.tsx         # Technical skills showcase
├── 🚀 ProjectsSection.tsx       # Featured projects gallery
├── 💼 ExperienceSection.tsx     # Work experience timeline
├── 🏆 AchievementsSection.tsx   # Certifications and achievements
├── 📞 ContactSection.tsx        # Contact form and social links
├── 🧭 Navigation.tsx           # Responsive navigation bar
├── 📊 ScrollProgress.tsx       # Scroll progress indicator
└── ui/                        # Reusable UI components
    ├── button.tsx
    ├── input.tsx
    ├── textarea.tsx
    └── ...more
```

### 📱 Responsive Breakpoints
- **Mobile**: `< 768px` - Stack layout, touch-optimized
- **Tablet**: `768px - 1024px` - Grid adjustments
- **Desktop**: `> 1024px` - Full multi-column layout
- **Large**: `> 1440px` - Maximum width containers

## � Performance Metrics

<div align="center">

| Metric | Score | Description |
|--------|-------|-------------|
| 🚀 **Performance** | 98/100 | Optimized loading and rendering |
| ♿ **Accessibility** | 100/100 | WCAG compliant, screen reader friendly |
| 🔍 **SEO** | 100/100 | Meta tags, structured data, sitemap |
| ⚡ **Speed Index** | < 1.5s | First meaningful paint time |
| 📱 **Mobile Friendly** | ✅ | Responsive design, touch optimized |

</div>

## 🛠️ Development Scripts

```bash
# 🚀 Development
pnpm dev          # Start development server
pnpm build        # Build for production  
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # TypeScript type checking

# 📦 Deployment
pnpm deploy       # Deploy to GitHub Pages
```

## �📁 Project Structure

```
📦 pallav-portfolio/
├── 🔧 .github/workflows/       # GitHub Actions CI/CD
├── 📱 app/                     # Next.js App Router
│   ├── 🌐 api/contact/         # Contact form API endpoint
│   ├── 🎨 globals.css          # Global styles & animations
│   ├── 📄 layout.tsx           # Root layout with metadata
│   ├── 🏠 page.tsx             # Main portfolio page
│   └── 📝 sitemap.ts           # SEO sitemap generation
├── 🧩 components/              # React components
│   ├── 🎯 [SectionName].tsx    # Main sections (Hero, About, etc.)
│   └── 🎨 ui/                  # Reusable UI components
├── 🎣 hooks/                   # Custom React hooks
│   ├── 👀 useIntersectionObserver.ts
│   ├── 📱 use-mobile.tsx
│   ├── 🔔 useNotification.ts
│   └── ✨ useScrollAnimations.ts
├── 📚 lib/                     # Utility functions
│   └── 🛠️ utils.ts             # Helper functions & asset paths
├── 🌍 public/                  # Static assets
│   ├── 📄 Pallav_Kumar_Resume.pdf
│   └── 🖼️ [images]             # Project images & icons
├── 🎨 styles/                  # Additional stylesheets
├── ⚙️ next.config.mjs          # Next.js configuration
├── 🎯 tailwind.config.js       # Tailwind CSS configuration
├── 📋 tsconfig.json            # TypeScript configuration
└── 📜 package.json             # Dependencies & scripts
```

## 🚀 Deployment Options

<div align="center">

| Platform | Status | Auto Deploy | Custom Domain | Performance |
|----------|--------|-------------|---------------|-------------|
| **GitHub Pages** | ✅ Active | ✅ | ✅ | ⭐⭐⭐⭐ |
| **Vercel** | 🟡 Ready | ✅ | ✅ | ⭐⭐⭐⭐⭐ |
| **Netlify** | 🟡 Ready | ✅ | ✅ | ⭐⭐⭐⭐ |
| **Railway** | 🟡 Ready | ✅ | ✅ | ⭐⭐⭐⭐ |

</div>

### 🔄 Current Deployment
- **Platform**: GitHub Pages
- **URL**: [pallav46.github.io/pallav-portfolio](https://pallav46.github.io/pallav-portfolio/)
- **Auto Deploy**: ✅ On every push to `main`
- **Build Time**: ~2 minutes
- **Global CDN**: ✅ Fast worldwide

### 📋 Deployment Checklist
- [x] Environment variables configured
- [x] Build process optimized
- [x] Static asset optimization  
- [x] SEO meta tags implemented
- [x] Sitemap.xml generated
- [x] 404 error page
- [x] Mobile responsiveness tested

## 🎯 SEO & Analytics

- **🔍 Meta Tags**: Dynamic meta descriptions and titles
- **📊 Structured Data**: JSON-LD for rich snippets  
- **🗺️ Sitemap**: Auto-generated XML sitemap
- **🤖 Robots.txt**: Search engine crawling rules
- **📱 PWA Ready**: Service worker and manifest
- **⚡ Core Web Vitals**: Optimized for Google ranking factors

## 🤝 Contributing

I welcome contributions, feedback, and suggestions! Here's how you can help:

### 🐛 Found a Bug?
1. Check [existing issues](https://github.com/Pallav46/pallav-portfolio/issues)
2. Create a new issue with detailed description
3. Include steps to reproduce

### 💡 Have an Idea?
1. Open a [feature request](https://github.com/Pallav46/pallav-portfolio/issues/new)
2. Describe your suggestion
3. Explain why it would be valuable

### 🔧 Want to Contribute Code?
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### 📝 Code Standards
- **TypeScript** for type safety
- **ESLint + Prettier** for code formatting
- **Conventional Commits** for commit messages
- **Component-based** architecture
- **Responsive design** for all components

## 🌟 Support

If this portfolio inspired you or helped with your own project:

<div align="center">

⭐ **Star this repository**

[![GitHub stars](https://img.shields.io/github/stars/Pallav46/pallav-portfolio?style=social)](https://github.com/Pallav46/pallav-portfolio/stargazers)

</div>

## � License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - feel free to use this code for your own portfolio!
```

## 👨‍💻 About the Developer

<div align="center">

<img src="https://github.com/Pallav46.png" alt="Pallav Kumar" width="150" height="150" style="border-radius: 50%;">

### **Pallav Kumar**
*Full Stack Developer & CSE Student*

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-Visit-2563eb?style=for-the-badge)](https://pallav46.github.io/pallav-portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-Pallav46-181717?style=for-the-badge&logo=github)](https://github.com/Pallav46)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pallav.kumar22b@iiitg.ac.in)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/pallav-kumar)
[![LeetCode](https://img.shields.io/badge/LeetCode-Profile-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/PallavKumar6200)

**🎓 B.Tech CSE** @ IIIT Guwahati | **⭐ 8.13 CGPA** | **🏆 3★ CodeChef**

</div>

### 🚀 Featured Projects

<div align="center">

| Project | Description | Tech Stack | Links |
|---------|-------------|------------|-------|
| **🌐 Cryuze** | Hyperlocal service platform with real-time chat | React, Node.js, MongoDB, Socket.IO | [Demo](https://x-website.onrender.com) • [Code](https://github.com/Pallav46/Cryuze) |
| **⚡ ProxyServer** | High-performance reverse proxy with clustering | Node.js, TypeScript, Zod | [Code](https://github.com/Pallav46/ProxyServer) |
| **🎵 MoodScape** | AI emotion detection for music recommendations | React, Kafka, Redis, Docker | [Code](https://github.com/Pallav46/MicroserviceMoodScape) |

</div>

---

<div align="center">

### 💫 *"Building scalable solutions, one commit at a time"*

**Thank you for visiting my portfolio!** 

If you found this helpful, please consider giving it a ⭐

*Made with ❤️ and lots of ☕*

</div>
