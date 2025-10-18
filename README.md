# OCIS Static Website

This is the static HTML version of the Official California Innovators Society website, ready for deployment on GitHub Pages or any static hosting service.

## Features

- **Fully Static**: No server-side rendering or build process required
- **No Dark Mode**: Consistent light theme throughout
- **Photo System**: Numbered placeholder system (Photo #1 through Photo #15)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Contact forms, modal dialogs, and mobile navigation
- **SEO Optimized**: Proper meta tags and structured data

## File Structure

```
static/
├── index.html          # Homepage
├── about.html          # About page
├── workshops.html      # Workshops page
├── contact.html        # Contact page
├── upcoming.html       # Upcoming events page
└── README.md          # This file
```

## Photo System

The website uses a numbered photo system with placeholders:
- **Photo #1**: Hero image on homepage
- **Photo #2-4**: Overview cards on homepage
- **Photo #5**: About page collaboration image
- **Photo #6-8**: How We Work section images
- **Photo #9-11**: Workshop images
- **Photo #12**: Contact page decorative graphic
- **Photo #13**: CIVIC Innovation graphic
- **Photo #14-15**: Upcoming events images

To add actual photos:
1. Add your images to the `photos/` folder in the project root
2. Replace the placeholder divs with `<img>` tags pointing to your photos
3. Maintain the same aspect ratios and styling

## Deployment

### GitHub Pages
1. Push the `static/` folder contents to your repository
2. Enable GitHub Pages in repository settings
3. Set source to the main branch and `/` (root) folder

### Other Static Hosts
Upload all files in the `static/` folder to your hosting provider's web root directory.

## Customization

### Colors
The website uses a purple gradient theme:
- Primary: #8C53FF
- Secondary: #5271FF

### Fonts
- Headings: Space Grotesk, Poppins, sans-serif
- Body: Inter, sans-serif

### Styling
All styles are embedded in each HTML file using Tailwind CSS via CDN, making it easy to customize without build tools.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- No JavaScript framework dependencies

## Contact Form

The contact form is client-side only and will show a success message. For production use, you'll need to:
1. Add a form handler (Netlify Forms, Formspree, etc.)
2. Update the form action and method attributes
3. Add proper validation and error handling

## Performance

- Optimized for fast loading
- Minimal external dependencies
- Compressed and efficient CSS
- No unnecessary JavaScript

## License

© 2025 Official California Innovators Society. All rights reserved.
