# 🌐 Deployment Guide

Complete guide to deploy your portfolio to production with step-by-step instructions for different platforms.

## 🚀 Before You Deploy

1. **Test locally:**
```bash
npm run build
npm run preview
```

2. **Verify all content:**
   - Check all project links work
   - Verify email form (if configured)
   - Test on mobile

3. **SEO checklist:**
   - Update meta tags in `index.html`
   - Add description
   - Add keywords

## ✨ Deployment Platform Comparison

| Platform | Cost | Setup Time | Features |
|----------|------|-----------|----------|
| **Vercel** | Free | 2 min | Recommended, auto-deploys from Git |
| **Netlify** | Free | 3 min | Easy drag-drop deploy |
| **GitHub Pages** | Free | 5 min | Deploy from repo direct |
| **AWS Amplify** | Free | 5 min | More control, auto-deploy |

---

## 1️⃣ Deploy to Vercel (Recommended ⭐)

**Best for:** Git-based automatic deployments with best performance.

### Step-by-Step

1. **Push to GitHub:**
```bash
git add .
git commit -m "Portfolio complete"
git push origin main
```

2. **Go to Vercel:**
   - Visit https://vercel.com
   - Click "Sign Up" (GitHub recommended)
   - Authorize GitHub access

3. **Import Project:**
   - Click "Add New" → "Project"
   - Select your portfolio repo
   - Click "Import"

4. **Configure:**
   - Framework: "Vite" (auto-detected)
   - Build: `npm run build` (auto)
   - Output: `dist` (auto)
   - Click "Deploy"

5. **Wait & Get URL:**
   - Your site will deploy in ~1 minute
   - You'll get a URL like: `https://portfolio.vercel.app`

### Custom Domain (Optional)

1. In Vercel Dashboard, go to Settings
2. Click "Domains"
3. Add your domain (e.g., `yourname.com`)
4. Follow DNS setup instructions

### Auto-Deploy on Push

Future pushes to `main` automatically redeploy!

---

## 2️⃣ Deploy to Netlify

**Best for:** Quick deployments without Git required.

### Method A: Drag & Drop (Easiest)

1. **Build locally:**
```bash
npm run build
```

2. **Go to Netlify:**
   - Visit https://app.netlify.com
   - Sign up (free)

3. **Upload:**
   - Drag `dist/` folder into browser
   - Wait 1 minute
   - Get your live URL!

### Method B: Git Integration

1. **Push to GitHub:**
```bash
git add .
git commit -m "Portfolio"
git push origin main
```

2. **Connect Netlify:**
   - Click "New site from Git"
   - Select GitHub
   - Choose your repo
   - Click "Deploy"

3. **Auto-Deploy:**
   - Future pushes auto-deploy
   - Build settings auto-detected

### Add Custom Domain

1. In Netlify Dashboard: "Domain settings"
2. Add your domain
3. Follow DNS instructions

---

## 3️⃣ Deploy to GitHub Pages

**Best for:** Simple, direct repo-based hosting.

### Setup

1. **Update Vite Config:**

Edit `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',  // Change 'portfolio' to your repo name
  plugins: [react()],
})
```

2. **Build:**
```bash
npm run build
```

3. **Push to GitHub:**
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

4. **Enable GitHub Pages:**
   - Go to your repo Settings
   - Scroll to "GitHub Pages"
   - Source: "Deploy from main branch"
   - Select `/root` folder
   - It might rebuild automatically

5. **Your URL:**
   - `https://yourusername.github.io/portfolio`

### Add Custom Domain

1. In repo Settings → Pages
2. Add your custom domain
3. Create a CNAME file in `public/` with your domain
4. Update DNS records

---

## 4️⃣ Deploy to AWS Amplify

**Best for:** Full AWS integration, scalability.

### Step-by-Step

1. **Create AWS Account:**
   - Visit aws.amazon.com
   - Sign up (free tier available)

2. **Push to GitHub:**
```bash
git push origin main
```

3. **Go to AWS Console:**
   - Sign in to AWS
   - Find AWS Amplify
   - Click "Create Amplify app"

4. **Connect GitHub:**
   - Authorize GitHub
   - Select your repo
   - Select main branch

5. **Configure Build:**
   - Build command: `npm run build`
   - Output dir: `dist`
   - Save and deploy

6. **Get URL:**
   - Amplify will give you a URL
   - Takes 2-3 minutes to deploy

---

## 5️⃣ Deploy to Firebase Hosting

**Best for:** Firebase backend integration, real-time features.

### Setup

1. **Install Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Build your project:**
```bash
npm run build
```

3. **Login to Firebase:**
```bash
firebase login
```

4. **Initialize Firebase:**
```bash
firebase init hosting
```
- Choose `dist` as public directory
- Say "No" to rewrite rules

5. **Deploy:**
```bash
firebase deploy
```

6. **Get URL:**
   - `https://your-project.web.app`

---

## 🔐 Set Environment Variables

If you use EmailJS or other APIs:

### Vercel
1. Project Settings → Environment Variables
2. Add variables (e.g., `VITE_SERVICE_ID`)
3. Values won't be exposed

### Netlify
1. Site settings → Environment
2. Click "Edit variables"
3. Add your secrets

### Update Code
```typescript
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
```

---

## ✅ Post-Deployment Checklist

- [ ] Website loads without errors
- [ ] All pages/sections visible
- [ ] All links work
- [ ] Contact form works (if configured)
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] Fast loading time
- [ ] Form emails arrive (if setup)
- [ ] Social links correct
- [ ] No console errors

---

## 📊 Monitor Your Site

### Analytics Setup

**Google Analytics:**
1. Get tracking ID from google.com/analytics
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor Performance
- Check deployment platform dashboard
- Monitor page load times
- Track visitor analytics
- Monitor error logs

---

## 🔄  Continuous Deployment

All platforms support auto-deployment!

**Workflow:**
1. Make changes locally
2. Push to GitHub
3. Platform automatically rebuilds & deploys
4. Site updates within 1-5 minutes

---

## 🆘 Deployment Troubleshooting

**Build fails?**
```bash
npm run build
```
Check error message locally first

**Site shows old version?**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Clear CDN cache in platform dashboard

**Images or styles missing?**
- Check `base` in `vite.config.ts`
- Verify paths are correct
- Rebuild and redeploy

**Domain not working?**
- Check DNS records propogated (up to 48 hours)
- Verify platform SSL/HTTPS is enabled
- Test with platform domain first

**404 on refresh?**
- For React Router, add redirect rules:
  - Netlify: `_redirects` file
  - Vercel: `vercel.json`
  - GitHub Pages: Not needed, works with hash routes

---

## 💡 Tips for Best Results

1. **CDN:** Use a CDN like Cloudflare for faster delivery
2. **Compression:** Enable gzip compression
3. **Caching:** Set proper cache headers
4. **SEO:** Add meta tags for social sharing
5. **Lighthouse:** Run Google Lighthouse audit
6. **Monitoring:** Set up error tracking
7. **Backup:** Keep local git backup

---

## 🎯 Recommended Setup

**For beginners:** **Vercel** or **Netlify**
- Easiest setup
- Free tier generous
- Great performance
- Auto-deploy from Git

**For production:** **Vercel** or **AWS**
- Best performance
- Scalability
- Custom domains
- Full control

**For learning:** **GitHub Pages**
- Direct from repo
- Great for portfolios
- Free forever
- Simple setup

---

## 🚀 You're Live!

Congratulations! Your portfolio is now on the internet! 🎉

**Continue improving:**
- Add more projects
- Update content regularly
- Keep security updated
- Monitor analytics
- Engage with visitors

**Share your portfolio:**
- LinkedIn profile
- Twitter
- GitHub resume
- Email signature
- Job applications

---

**Happy hosting! 🌍**
