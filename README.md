# Modern Developer Portfolio 🚀

A stunning, fully-featured developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Perfect for showcasing your projects, skills, and experience with smooth animations and a modern dark theme.

## ✨ Features

- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Dark Theme** - Beautiful glassmorphism with smooth gradients
- ✅ **Smooth Animations** - Framer Motion animations on scroll and hover
- ✅ **Dynamic Content** - JSON-based projects, skills, and personal info
- ✅ **Contact Form** - Integrated contact form (ready for EmailJS)
- ✅ **Modern Stack** - React 19, Vite, Tailwind CSS, TypeScript
- ✅ **SEO Friendly** - Proper meta tags and semantic HTML
- ✅ **Scroll Progress** - Visual scroll indicator
- ✅ **Sticky Navigation** - Smooth navigation between sections

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar.tsx       # Navigation bar with links & social
│   ├── Button.tsx       # Reusable button component
│   ├── ProjectCard.tsx  # Project card with hover animations
│   ├── SkillCard.tsx    # Skill/tech card with icons
│   ├── ScrollProgress.tsx # Scroll progress indicator
│   ├── Footer.tsx       # Footer with social links
│   └── index.ts         # Component exports
├── sections/            # Page sections
│   ├── HeroSection.tsx  # Hero/landing section
│   ├── ProjectsSection.tsx # Featured projects showcase
│   ├── AboutSection.tsx # About me section
│   ├── SkillsSection.tsx # Tech stack by category
│   ├── ContactSection.tsx # Contact form
│   └── index.ts         # Section exports
├── data/               # JSON data files (customize these!)
│   ├── projects.json   # Your projects
│   ├── skills.json     # Your skills & tech stack
│   └── personalInfo.json # Your personal info
├── hooks/              # Custom React hooks
│   ├── useInView.ts    # Detect elements in viewport
│   └── useScrollPosition.ts # Track scroll position
├── assets/             # Images and static files
├── App.tsx             # Main application component
├── main.tsx            # React entry point
└── index.css           # Global styles + animations
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## 📝 How to Customize

### 1️⃣ Update Your Information

Edit **`src/data/personalInfo.json`**:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Full Stack Developer",
    "shortBio": "I build amazing web experiences",
    "avatar": "https://your-image-url.jpg",
    "email": "your@email.com",
    "location": "City, Country",
    "social": {
      "github": "https://github.com/yourprofile",
      "linkedin": "https://linkedin.com/in/yourprofile",
      "twitter": "https://twitter.com/yourhandle",
      "email": "your@email.com"
    },
    "about": {
      "intro": "Your introduction...",
      "description": "Longer description...",
      "highlights": ["Skill 1", "Skill 2", "Skill 3"]
    }
  }
}
```

### 2️⃣ Add Your Projects

Edit **`src/data/projects.json`**:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "What does this project do?",
      "image": "https://image-url.jpg",
      "technologies": ["React", "Node.js", "MongoDB"],
      "github": "https://github.com/yourrepo",
      "live": "https://project-live-url.com",
      "featured": true
    }
  ]
}
```

**Tips:**
- Set `featured: true` to show on top
- Use image URLs from Unsplash, Pexels, or your own
- List relevant technologies

### 3️⃣ Update Your Skills

Edit **`src/data/skills.json`**:

```json
{
  "skills": {
    "frontend": {
      "category": "Frontend",
      "color": "#3B82F6",
      "technologies": [
        { "name": "React", "icon": "SiReact" },
        { "name": "TypeScript", "icon": "SiTypescript" }
      ]
    }
  }
}
```

**Icon Names:** Find icons at [react-icons.github.io](https://react-icons.github.io/react-icons/)
- `SiReact`, `SiNodedotjs`, `SiMongodb`, `SiDocker`, etc.

### 4️⃣ Customize Colors & Theme

Edit **`tailwind.config.js`**:

```javascript
extend: {
  colors: {
    'dark-900': '#0f0f0f',      // Main background
    'dark-800': '#1a1a1a',      // Cards background
    'accent': '#00d4ff',         // Primary color
  }
}
```

### 5️⃣ Enable Email Form

The contact form is configured for **EmailJS**:

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service & email template
3. Enable in **`src/sections/ContactSection.tsx`**:

```typescript
const SERVICE_ID = 'service_xxxxx'  // Your service ID
const TEMPLATE_ID = 'template_xxxxx' // Your template ID
const PUBLIC_KEY = 'xxxxx'           // Your public key

// Uncomment the emailjs.sendForm() call in handleSubmit()
```

## 🌐 Deploy to Production

### Option 1: Vercel (Recommended) ⭐

```bash
# Push to GitHub
git add .
git commit -m "Portfolio complete"
git push origin main

# Go to vercel.com
# Click "Import Project"
# Select your GitHub repo
# Deploy! 🎉
```

**Benefits:**
- Free deployment
- Automatic HTTPS
- Git integration
- Fast CDN

### Option 2: Netlify

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist/` folder
4. Done!

### Option 3: GitHub Pages

```bash
# Update vite.config.ts
export default {
  base: '/portfolio/', // your repo name
}

npm run build
npm run deploy  # if you set up gh-pages
```

## 🎨 Customizing Sections

Each section in `src/sections/` uses **Framer Motion** for animations:

```typescript
// Adjust animation timing
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }  // Change duration
  }
}

// Modify className for colors/spacing
<div className='text-accent hover:bg-accent/10'>
```

## 📱 Responsive Design

Tailwind breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

Example: `text-2xl md:text-3xl lg:text-4xl`

## 🎯 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 19 | UI library |
| Vite | Fast build tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Icons | Icon library |
| TypeScript | Type safety |
| EmailJS | Email service |

## 📚 Component Guide

### Navbar
- Sticky navigation
- Active link highlighting
- Mobile responsive menu
- Social links

### Hero Section
- Animated greeting
- Name with gradient
- CTA buttons
- Avatar with floating animation

### Projects Section
- Responsive card grid
- Hover animations
- Tech stack tags
- GitHub/Live links

### About Section
- Personal story
- Highlights grid
- Your stats

### Skills Section
- Skills by category
- Icons from react-icons
- Hover animations

### Contact Section
- Form validation
- Loading state
- Success/error messages
- EmailJS integration

### Footer
- Social links
- Back-to-top button
- Copyright text

## 🔧 Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview build locally
npm run lint     # ESLint check
```

## 💡 Pro Tips

1. **Performance**: Optimize images before adding them
2. **SEO**: Update `index.html` meta tags
3. **Analytics**: Add Google Analytics to `index.html`
4. **Mobile**: Test on actual mobile devices
5. **Loading**: Use placeholder images during testing

## 🐛 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Build fails?**
```bash
rm -rf node_modules
npm install
npm run build
```

**Styling issues?**
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild CSS: `npm run build`

## 📖 Learning Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion)
- [Vite Docs](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🚀 Next Steps & Ideas

- [ ] Add blog section
- [ ] Dark/Light theme toggle
- [ ] 3D elements with Three.js
- [ ] GitHub API integration
- [ ] Analytics tracking
- [ ] Newsletter signup
- [ ] Guestbook/comments
- [ ] Resume PDF download

## 📄 License

Free to use for personal & commercial projects!

---

**Happy building! 🎉**

Need help? Check the code comments and component documentation above. Customize the JSON files and watch your portfolio come to life! ✨
