# Chinonso Ariel — Portfolio

A modern, animated personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Glassmorphism UI** — blurred transparent cards, soft shadows
- **Dark premium theme** — dark navy base with amber highlights
- **Framer Motion animations** — fade, slide, scale, stagger, whileInView
- **Fully responsive** — mobile-first design
- **Smooth scroll navigation** — sticky navbar with active section highlight
- **Animated background** — floating orbs + subtle grid overlay
- **TypeScript** — full type safety

## 🗂 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles + Tailwind directives
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Background.tsx    # Animated orbs + gradient canvas
│   ├── Navbar.tsx        # Sticky nav with active highlight
│   ├── Hero.tsx          # Full-screen hero section
│   ├── About.tsx         # About + stats grid
│   ├── Skills.tsx        # Staggered skills grid
│   ├── Projects.tsx      # Project cards with links
│   ├── Contact.tsx       # Contact section + social links
│   ├── Footer.tsx        # Footer
│   └── ScrollReveal.tsx  # Reusable scroll animation wrapper
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Build for production
```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

The easiest way to deploy:

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **"Deploy"**

That's it! Your portfolio will be live in ~60 seconds.

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the amber accent color:
```js
colors: {
  amber: {
    DEFAULT: '#F59E0B',  // Change this to your accent color
    dark: '#D97706',
  },
}
```

### Personal Info
- **Hero** — Edit `components/Hero.tsx`
- **About** — Edit `components/About.tsx`
- **Skills** — Edit the `SKILLS` array in `components/Skills.tsx`
- **Projects** — Edit the `PROJECTS` array in `components/Projects.tsx`
- **Contact** — Edit `components/Contact.tsx`

### SEO Metadata
Edit `app/layout.tsx` to update title, description, and Open Graph tags.

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14 | Framework |
| React | 18 | UI Library |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animations |
| TypeScript | 5 | Type Safety |

## 📄 License

MIT — feel free to use and adapt this portfolio for your own use.

---

Built by **Chinonso Ariel Onyemauchechukwu**
