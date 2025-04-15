
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', path: '/' },
    { name: 'Servizi', href: '#services', path: '/' },
    { name: 'Portfolio', href: '#portfolio', path: '/' },
    { name: 'Pacchetti', href: '#packages', path: '/' }, // Changed path to '/'
    { name: 'Testimonianze', href: '#testimonials', path: '/' },
    { name: 'Contatti', href: '#contact', path: '/' },
  ];

  const handleNavLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-neutral-900/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-drone-orange font-montserrat text-2xl font-extrabold">
          Drone<span className="text-white">Creative</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => handleNavLinkClick(link.href)}
              className="text-white/80 hover:text-drone-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <Button 
          variant="default" 
          className="hidden md:flex bg-drone-orange hover:bg-drone-orange/90 text-white"
        >
          Richiedi preventivo
        </Button>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-900/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => handleNavLinkClick(link.href)}
                className="text-white/80 hover:text-drone-orange transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-drone-orange hover:bg-drone-orange/90 text-white mt-2"
            >
              Richiedi preventivo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
