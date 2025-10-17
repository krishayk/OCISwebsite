# Official California Innovators Society (OCIS) Website

A modern, responsive website for the Official California Innovators Society built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with brand colors (#8C53FF, #5271FF, #000000)
- **Dark Mode**: Complete dark/light mode toggle with seamless transitions
- **Responsive**: Fully responsive design that works on all devices
- **Accessibility**: WCAG AA compliant with proper semantic HTML
- **SEO Optimized**: Proper metadata and SEO optimization
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Icons**: Custom SVG icons
- **Fonts**: Space Grotesk, Poppins, Inter

## Pages

- **Home**: Hero section, overview grid, proof points
- **About**: Organization overview, how we work, values
- **Workshops**: BASS workshop recap and information
- **Upcoming**: CIVIC Innovation and future events
- **Contact**: Contact form and information

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── upcoming/          # Upcoming events page
│   ├── workshops/         # Workshops page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx         # Footer component
│   ├── Layout.tsx         # Main layout wrapper
│   ├── Modal.tsx          # Modal component
│   ├── Nav.tsx            # Navigation component
│   ├── Placeholder.tsx    # Placeholder component
│   └── ThemeToggle.tsx    # Dark mode toggle
├── lib/                   # Utility functions
│   └── seo.ts            # SEO helper functions
└── styles/               # Additional styles
```

## Brand Guidelines

- **Primary Color**: #8C53FF (Purple)
- **Secondary Color**: #5271FF (Blue)
- **Base Color**: #000000 (Black)
- **Typography**: Space Grotesk for headings, Inter for body text
- **Spacing**: Consistent spacing scale throughout

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

© 2025 Official California Innovators Society. All rights reserved.

