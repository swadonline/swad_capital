# SWAD Digital Solutions

A modern, responsive web application built with Next.js 14, TypeScript, and Tailwind CSS for SWAD Digital Solutions Ltd.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with SWAD brand colors
- **SEO Optimized**: Meta tags, structured data, and accessibility features
- **Performance**: Optimized images and lazy loading
- **TypeScript**: Full type safety throughout the application

## Pages

- **Home**: Hero section, company intro, core solutions, and newsletter signup
- **About**: Company information, mission, vision, values, and team details
- **Solutions**: Detailed service offerings with benefits and process overview
- **News**: Article listings with pagination and category filtering
- **Contact**: Contact form, company information, and global office locations

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Images**: Next.js Image component with Unsplash integration

## Design System

### Colors
- **Primary**: #0b1f3a (Deep Navy)
- **Accent**: #c6a35b (Gold)
- **Background**: #ffffff (White)

### Typography
- **Font Family**: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial
- **Weights**: 300, 400, 500, 600, 700

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd swad_capital
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
```json
"deploy": "gh-pages -d out"
```
3. Run: `npm run deploy`

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── news/              # News page
│   ├── solutions/         # Solutions page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── StructuredData.tsx # SEO structured data
└── lib/                   # Utility functions
```

## SEO Features

- Meta tags for all pages
- Open Graph and Twitter Card support
- JSON-LD structured data
- Semantic HTML structure
- Accessibility features (ARIA labels, alt text)

## Performance Optimizations

- Next.js Image component for optimized images
- Lazy loading for images
- Tailwind CSS for minimal bundle size
- TypeScript for better development experience

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2025 SWAD Digital Solutions Ltd. All rights reserved.

## Contact

- Email: info@swadtec.com
- Phone: +44 (0)20 0000 0000
- Locations: London | Lagos | Dubai | New York