# NeuralWatch

Frontend for NeuralWatch, an AI fraud-detection product. This repo contains the marketing/landing page only — hero section, product info, an interactive risk-scoring demo, and a call-to-action, built as a single-page React app.

> This is the frontend piece of a larger project. The interactive demo in this repo runs on simulated, client-side logic only — it does not call a real backend or model.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- Framer Motion
- React Router

## Getting Started

```bash
git clone https://github.com/perry1291/NeuralWatch.git
cd NeuralWatch
npm install
npm run dev
```

Runs at `http://localhost:8080`.

Other scripts: `npm run build`, `npm run test`, `npm run lint`.

## Structure

```
src/
├── pages/Index.tsx        # Composes the whole landing page
├── components/            # HeroSection, DetectionDemo, HowItWorks, etc.
│   └── ui/                 # shadcn/ui components
├── hooks/, lib/
└── test/

