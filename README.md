# 🎬 ZismailDev — Cinematic Developer Portfolio

A high-performance, SEO-optimized, and visually stunning Single-Page Application (SPA) developer portfolio built with the latest web technologies. Designed with a "Cinematic Dark" aesthetic and focused on technical excellence.

![Portfolio Preview](https://github.com/ZismailDev/PNattapong/raw/main/public/og-image.png)

## ✨ Core Features

### 🧠 Interactive Knowledge Graph
- **Force-Directed Graph:** A fully interactive, canvas-based visualization of technical skills and domains.
- **Dynamic Physics:** Nodes react to drag and hover events with smooth, real-time physics.
- **Categorized Clusters:** Skills are grouped into clusters (AI/RAG, Full-stack, IoT/Hardware, etc.) for better discovery.

### 🎭 Cinematic Aesthetic
- **High Performance:** Completely removed heavy animation libraries (Framer Motion) in favor of lightweight CSS keyframes and custom Canvas animations.
- **Staggered Entrance:** Premium landing experience with carefully timed entrance animations.
- **Glassmorphism UI:** Modern, translucent interface built with HeroUI v3 and Tailwind CSS.
- **Dynamic Background:** Ambient particles and floating orbs that adapt to light/dark themes.

### 🚀 Technical Excellence (SEO, AEO & i18n)
- **Custom i18n System:** Lightweight, high-performance internationalization (TH/EN) built from scratch without external dependencies.
- **SPA Architecture:** Seamless navigation for zero-latency page transitions.
- **AI Search Ready:** Optimized for AI-driven search engines (AEO) with structured JSON-LD (Person schema).
- **Full SEO Suite:** Automated sitemaps, robots.txt, and comprehensive OpenGraph/Twitter metadata.
- **Light/Dark Synchronized:** Consistent visual quality across both theme modes with a muted, professional light theme.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16.2.6](https://nextjs.org/) (App Router)
- **UI Components:** [HeroUI v3](https://heroui.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Iconify](https://iconify.design/)
- **Interactions:** Custom Force-directed Canvas API
- **SEO:** Metadata API + JSON-LD

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router (SPA Entry)
├── components/           
│   ├── portfolio/        # Section-based modular components
│   ├── theme-wrapper.tsx # Global layout and background effects
│   └── knowledge-graph   # Interactive Canvas engine
├── config/               # Centralized site configuration
├── context/              # Global state providers
├── hooks/                # Custom React Hooks
└── styles/               # Global CSS and theme tokens
```

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/ZismailDev/PNattapong.git

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---
Built with 💜 by [Nattapong Panthiya](https://github.com/ZismailDev)
