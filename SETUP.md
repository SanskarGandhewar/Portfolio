# 🎯 Portfolio Setup Guide

This guide will help you get started with your new portfolio website in just a few minutes!

## ⚡ Quick Start (5 minutes)

### Step 1: Start Development Server

Choose one of these methods:

**Option A: VS Code Task Runner (Easiest)**
1. Press `Ctrl+Shift+B` on Windows/Linux or `Cmd+Shift+B` on Mac
2. Select "Dev Server"
3. Open http://localhost:5173

**Option B: Terminal**
```bash
npm run dev
```

### Step 2: Edit Your Information

1. Open `src/data/personalInfo.json`
2. Update:
   - `name` - Your name
   - `title` - Your profession (e.g., "Full Stack Developer")
   - `shortBio` - Brief about you
   - `avatar` - Your photo URL
   - `email` - Your email
   - `social` - Your social media links

**Example:**
```json
{
  "personalInfo": {
    "name": "John Doe",
    "title": "Full Stack Developer & Designer",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    "email": "john@example.com",
    "social": {
      "github": "https://github.com/johndoe",
      "linkedin": "https://linkedin.com/in/johndoe",
      "twitter": "https://twitter.com/johndoe"
    }
  }
}
```

### Step 3: Add Your Projects

1. Open `src/data/projects.json`
2. Add your projects to the `projects` array:

```json
{
  "id": 1,
  "title": "E-Commerce Platform",
  "description": "Full-stack e-commerce with React and Node.js",
  "image": "https://images.unsplash.com/photo-1557821552-17105176677c?w=500",
  "technologies": ["React", "Node.js", "MongoDB"],
  "github": "https://github.com/yourname/ecommerce",
  "live": "https://ecommerce-demo.com",
  "featured": true
}
```

### Step 4: Update Your Skills

1. Open `src/data/skills.json`
2. Modify the technology lists and add your skills

**Find Icons:**
- Go to [react-icons.github.io](https://react-icons.github.io/react-icons/)
- Search for your technology
- Copy the icon name (e.g., `SiReact`, `SiMongodb`)

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:

```javascript
extend: {
  colors: {
    'dark-900': '#0f0f0f',    // Change background
    'accent': '#00d4ff',       // Change accent color
  }
}
```

Common accent colors:
- Cyan: `#00d4ff`
- Purple: `#a78bfa`
- Blue: `#3b82f6`
- Green: `#10b981`
- Pink: `#ec4899`

### Sections

Remove sections from `src/App.tsx`:
```typescript
<main className='pt-20'>
  <HeroSection />
  <ProjectsSection />      {/* Remove this section */}
  <AboutSection />
  <SkillsSection />
  <ContactSection />
</main>
```

### Fonts

Change font in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
}
```

Add Google Font import in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
```

## 📧 Email Configuration

### Setup EmailJS

1. Sign up: https://www.emailjs.com/
2. Create a new service (e.g., Gmail)
3. Create an email template
4. Get your IDs:
   - Service ID
   - Template ID
   - Public Key

### Enable Email in Portfolio

Edit `src/sections/ContactSection.tsx`:

```typescript
// Uncomment and fill in your IDs
const SERVICE_ID = 'service_xxxxx'
const TEMPLATE_ID = 'template_xxxxx'
const PUBLIC_KEY = 'xxxxx'

// Find this part and uncomment:
await emailjs.sendForm(
  SERVICE_ID,
  TEMPLATE_ID,
  formRef.current,
  PUBLIC_KEY
)
```

## 🚀 Deployment

### Deploy to Vercel (1 Click)

1. Push to GitHub:
```bash
git add .
git commit -m "Initial portfolio"
git push origin main
```

2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Get your live URL!

### Deploy to Netlify

1. Build locally:
```bash
npm run build
```

2. Go to https://netlify.com
3. Drag the `dist/` folder into the browser
4. Done!

### Deploy to GitHub Pages

1. Update `vite.config.ts`:
```typescript
export default {
  base: '/portfolio/',  // your repo name
}
```

2. Build and deploy:
```bash
npm run build
npm run deploy  # if configured
```

## 📸 Image Tips

### Where to get images:

**Free Image Sites:**
- [Unsplash](https://unsplash.com) - High quality
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Creative commons
- [Blob Generator](https://www.wwwhatsnew.com/2020/07/blobmaker/) - Background blobs

**Avatar:**
Use a professional headshot or avatar maker:
- Unsplash portrait search
- Your GitHub avatar
- LinkedIn photo

**Project Screenshots:**
- Use built-in screenshot tools
- Optimize with TinyPNG.com
- Aim for < 100KB per image

## 🔧 Advanced Customization

### Add a New Section

1. Create `src/sections/BlogSection.tsx`
2. Import components and data
3. Add to `src/App.tsx`:
```typescript
import { BlogSection } from './sections'

<BlogSection />
```

### Modify Navigation

Edit `src/components/Navbar.tsx`:
```typescript
const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Work', id: 'projects' },  // Changed
  // Add more links
]
```

### Change Animations

Edit animation variants in sections:
```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 50 },    // Increase from 20
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }      // Slower animation
  }
}
```

## 🐛 Common Issues

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Images not showing?**
- Check URL is correct
- Make sure image is publicly accessible
- Try a different image URL

**Build fails?**
```bash
rm -rf node_modules
npm install
npm run build
```

**Styles not updating?**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Rebuild: `npm run build`

## ✅ Pre-Deployment Checklist

- [ ] Updated personal information
- [ ] Added all your projects
- [ ] Updated skills list
- [ ] Checked colors and theme
- [ ] Tested on mobile
- [ ] Added email setup (if needed)
- [ ] Tested contact form
- [ ] Ran `npm run build` successfully
- [ ] Updated social media links
- [ ] Proofread content for typos
- [ ] Tested all links

## 📚 Useful Commands

```bash
npm run dev       # Start development
npm run build     # Create production build
npm run preview   # Preview production locally
npm run lint      # Check code quality
```

## 🎓 Next Steps

After deployment, consider:

1. **Add Analytics**
   - Google Analytics
   - Plausible Analytics

2. **Improve SEO**
   - Update meta descriptions
   - Add keywords
   - Submit to Google Search Console

3. **Add More Content**
   - Blog section
   - Case studies
   - Testimonials

4. **Enhance Features**
   - 3D elements
   - Dark/light theme toggle
   - Newsletter signup

## 💬 Need Help?

- Check [README.md](./README.md) for full documentation
- Review component code for examples
- Check [Tailwind CSS docs](https://tailwindcss.com)
- Check [Framer Motion docs](https://www.framer.com/motion)

## 🎉 You're Ready!

Your portfolio is now live! Keep updating it:
- Add new projects
- Update your bio
- Refresh content annually
- Keep all links working

**Good luck with your portfolio! 🚀**
