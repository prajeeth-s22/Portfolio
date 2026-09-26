# Partha Sarathi S — Developer Portfolio Website

A modern, responsive, high-performance portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export
```bash
npm run build
```
This produces an optimized static export ready for deployment on **Vercel**, **Netlify**, **GitHub Pages**, or any static web host.

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styling, custom scrollbars, gradient utilities
│   │   ├── layout.tsx           # Root layout, Inter font, SEO & Open Graph meta
│   │   └── page.tsx             # Main page aggregating all portfolio sections
│   ├── components/
│   │   ├── AnimatedBackground.tsx # HTML5 canvas neural particle background
│   │   ├── CommandPalette.tsx   # Ctrl+K developer easter egg palette
│   │   ├── ContactForm.tsx      # Interactive contact form with validation
│   │   ├── Navbar.tsx           # Sticky glassmorphic navbar with mobile menu
│   │   ├── ScrollIndicator.tsx  # Hero bounce scroll cue
│   │   └── SectionHeading.tsx   # Reusable section heading with animations
│   ├── data/
│   │   └── portfolio.ts         # Single source of truth for all content
│   ├── lib/
│   │   └── utils.ts             # Tailwind class merger & motion variants
│   └── sections/
│       ├── About.tsx            # Academic background & animated ecosystem
│       ├── Achievements.tsx     # Hackathons, GDG, robotics constellation
│       ├── CareerFocus.tsx      # Target roles: AI, Software, Data, Cloud
│       ├── Certifications.tsx   # AWS and Oracle credentials
│       ├── Contact.tsx          # Direct contact info and contact form
│       ├── Experience.tsx       # Interactive vertical experience timeline
│       ├── Hero.tsx             # Interactive hero with AI pipeline micro-viz
│       ├── Interests.tsx        # Floating interest tag cloud
│       ├── OpenToWork.tsx       # Bottom call-to-action banner
│       ├── Projects.tsx         # Featured project & project showcases
│       ├── Research.tsx         # IEEE-accepted IoT IDS paper showcase
│       └── Skills.tsx           # Filterable technical skills catalog
├── public/
│   └── resume.pdf               # Place your resume PDF here
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## ✏️ Customization

All your portfolio data is centralized in **`src/data/portfolio.ts`**. You can update:
- Personal info, bio, email, and social profiles (LinkedIn, GitHub)
- Work experience and internships
- Projects, descriptions, and GitHub/Demo links
- Technical skills and tools
- Research and certifications

To link your actual resume, simply place your PDF file in `public/resume.pdf`.

---

## ⌨️ Easter Egg
Press **`Ctrl + K`** (or `Cmd + K`) on any page to open the developer command palette with quick navigation shortcuts and `whoami`.
