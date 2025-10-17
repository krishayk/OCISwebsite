export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-primary"></div>
      
      <div className="container mx-auto px-page-mobile md:px-page-tablet lg:px-page-desktop py-footer-mobile md:py-footer-desktop">
        {/* Main footer content */}
        <div className="text-center mb-8">
          {/* Organization name */}
          <div className="text-xl font-bold mb-4 text-white">
            Official California Innovators Society
          </div>
          
          {/* Tagline */}
          <div className="text-small mb-6 text-gray-300">
            Inspiring innovation through collaboration.
          </div>
          
          {/* Social links */}
          <div className="flex flex-wrap gap-6 justify-center">
            <a 
              href="mailto:info@ocis.org" 
              className="text-small text-gray-300 hover:text-primary transition-colors duration-200"
            >
              Email
            </a>
            <a 
              href="https://discord.gg/ocis" 
              className="text-small text-gray-300 hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
            <a 
              href="https://instagram.com" 
              className="text-small text-gray-300 hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-small text-gray-300 hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        {/* Bottom line */}
        <div className="text-center text-small text-gray-400">
          © 2025 Official California Innovators Society. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
