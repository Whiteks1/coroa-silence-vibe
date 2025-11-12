import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-foreground">Coroa</span>{' '}
              <span className="text-gradient-primary">Silence</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('apartments')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {t.nav.apartments}
            </button>
            <button
              onClick={() => scrollToSection('experiences')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {t.nav.experiences}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Language selector and CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  language === 'es'
                    ? 'bg-card text-primary shadow-sm'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-card text-primary shadow-sm'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>

            <Button
              variant="hero"
              size="default"
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex"
            >
              {t.nav.booking}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
