# You Should Listen to What April Says

A fun, interactive website built with React, TypeScript, and shadcn/ui that showcases the wisdom of April through beautiful design and silly interactive elements.

## Features

- 🎭 **Interactive Buttons**: Fun buttons with spinning effects, rainbow modes, and click counters
- 📸 **Photo Gallery**: A collection of April's photos with navigation controls
- 💭 **April's Wisdom**: Words of wisdom from April herself
- 🎪 **Fun Effects**: Emoji explosions, random colors, and celebration alerts
- 📱 **Responsive Design**: Works perfectly on all devices
- 🎨 **Beautiful UI**: Modern design with gradients and animations

## Tech Stack

- **React 18** with TypeScript
- **Next.js 15** with App Router
- **Tailwind CSS** for styling
- **shadcn/ui** for beautiful components
- **Framer Motion** for animations

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Interactive Features

### Silly Buttons
- **Click Me!**: Spins and counts your clicks
- **Rainbow Mode**: Creates a beautiful rainbow overlay effect
- **Celebrate!**: Shows a celebration message
- **Random Color!**: Changes the background color temporarily
- **Random Wisdom**: Displays random words of wisdom from April
- **Emoji Explosion!**: Creates floating emojis across the screen

### Photo Gallery
- Navigate through April's photo collection
- Smooth transitions between photos
- Beautiful overlay with photo information

## Customization

### Adding Your Own Photos
Replace the `aprilPhotos` array in `src/app/page.tsx` with your own image URLs:

```typescript
const aprilPhotos = [
  "your-photo-url-1.jpg",
  "your-photo-url-2.jpg",
  // ... more photos
]
```

### Adding More Wisdom
Add more wisdom quotes to the wisdom section or the random wisdom button.

### Customizing Colors
The website uses a pink and purple theme. You can customize the colors by modifying the Tailwind classes throughout the components.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Why April?

Because April is wise, April is funny, and April knows what's best for you! Don't argue, just listen. April has spoken! 🗣️✨

---

Built with ❤️ because April said so!
