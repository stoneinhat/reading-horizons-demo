# Reading Horizons - Modern Next.js Redesign

A modern, responsive redesign of the Reading Horizons website built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Next.js 14** - App Router with Server Components
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Vercel** - Ready for deployment

## ✨ Features

### Modern Design
- Clean, minimalist aesthetic inspired by contemporary web design
- Gradient backgrounds and text effects using Reading Horizons brand colors
- Smooth scroll animations and interactions
- Fully responsive for all device sizes
- Optimized images with Next.js Image component

### Performance
- Server-side rendering and static generation
- Optimized bundle size
- Fast page loads
- Image optimization out of the box
- Lazy loading and code splitting

### Animations
- Framer Motion for smooth, performant animations
- Scroll-triggered animations with `useInView`
- Hover effects and micro-interactions
- Floating hero image animation
- Animated statistics counter

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- Focus states for all interactive elements

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd reading-horizons-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📦 Project Structure

```
reading-horizons-demo/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind
├── components/
│   ├── Navigation.tsx      # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with stats
│   ├── WhySection.tsx      # Features section
│   ├── ProgramsSection.tsx # Programs cards
│   ├── ImpactSection.tsx   # Impact showcase
│   ├── ResourcesSection.tsx# Resources grid
│   ├── CTASection.tsx      # Call-to-action
│   └── Footer.tsx          # Footer with links
├── public/                 # Static assets and images
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Colors
Edit the Tailwind config in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#4395A6',
    dark: '#02707A',
  },
  accent: {
    green: '#9CC064',
    gold: '#CCA652',
  },
  navy: '#254153',
}
```

### Animations
Framer Motion variants are defined in each component for easy customization.

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

### Environment Variables
No environment variables needed for this static site!

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for all images
- Focus visible states
- Keyboard navigation
- Screen reader tested

## 🎯 Performance Optimizations

- **Next.js Image** - Automatic image optimization
- **Code Splitting** - Automatic route-based splitting
- **Server Components** - Fast initial page loads
- **Prefetching** - Link prefetching for instant navigation
- **Font Optimization** - System fonts for zero layout shift

## 📊 Lighthouse Score Goals

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📄 License

This project is a demonstration for Reading Horizons.

## 🙏 Acknowledgments

- Design inspired by modern web best practices
- Built with love and attention to detail
- Optimized for performance and accessibility

---

**Ready to deploy!** This project is production-ready and optimized for Vercel deployment. 🚀
