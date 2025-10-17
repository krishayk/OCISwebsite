import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-nav-mobile md:pt-nav-desktop">
        {children}
      </main>
      <Footer />
    </div>
  );
}
