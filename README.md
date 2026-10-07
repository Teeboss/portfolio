# Pelumi Habib · Portfolio

React + TypeScript + Vite + Tailwind CSS v4. Built on the "Creative Portfolio Fullpage 03" template design.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

## Editing

- **All content** lives in `src/data.ts`: profile, stack, projects, services, work history.
- **Hero photo:** save a transparent cut-out PNG as `public/me.png`. It appears in front of the headline automatically. Without it, the hero is type-only.
- **Project screenshots:** `public/projects/*.jpg` (1440×900 homepage captures).
- **Decorative shapes:** `public/shapes/`, taken from the template assets.
- **Colours and font:** the `@theme` block in `src/index.css`.

## Behaviour

- Desktop (≥1024px wide, ≥640px tall): slides snap like the template's fullpage scroll, with dot navigation on the right.
- Mobile/tablet: normal scrolling, as the original template does.
- Respects `prefers-reduced-motion` (the ticker and reveals stop).

Deploy `dist/` to any static host (Vercel, Netlify, Amplify, S3).
