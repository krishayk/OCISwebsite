import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8C53FF',
        secondary: '#5271FF',
        base: '#000000',
        'text-dark': '#FFFFFF',
        'text-light': '#111111',
        'divider-dark': 'rgba(255,255,255,0.08)',
        'gradient-start': '#8C53FF',
        'gradient-end': '#5271FF',
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': ['48px', { lineHeight: '1.25', letterSpacing: '0.01em' }],
        'h2-desktop': ['36px', { lineHeight: '1.25', letterSpacing: '0.01em' }],
        'h3-desktop': ['28px', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'body-desktop': ['18px', { lineHeight: '1.6' }],
        'small-desktop': ['16px', { lineHeight: '1.6' }],
        'h1-mobile': ['34px', { lineHeight: '1.25', letterSpacing: '0.01em' }],
        'h2-mobile': ['28px', { lineHeight: '1.25', letterSpacing: '0.01em' }],
        'h3-mobile': ['22px', { lineHeight: '1.3', letterSpacing: '0.01em' }],
        'body-mobile': ['16px', { lineHeight: '1.6' }],
        'small-mobile': ['14px', { lineHeight: '1.6' }],
      },
      spacing: {
        'section-mobile': '80px',
        'section-tablet': '104px',
        'section-desktop': '128px',
        'page-mobile': '24px',
        'page-tablet': '40px',
        'page-desktop': '64px',
        'block-mobile': '24px',
        'block-tablet': '32px',
        'block-desktop': '40px',
        'card-mobile': '16px',
        'card-tablet': '24px',
        'card-desktop': '28px',
        'nav-mobile': '64px',
        'nav-desktop': '72px',
        'footer-mobile': '48px',
        'footer-desktop': '64px',
      },
      borderRadius: {
        'card': '12px',
        'button': '10px',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #8C53FF 0%, #5271FF 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(140, 83, 255, 0.05) 0%, rgba(82, 113, 255, 0.05) 100%)',
        'gradient-nav': 'linear-gradient(90deg, #8C53FF 0%, #5271FF 100%)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
}
export default config
