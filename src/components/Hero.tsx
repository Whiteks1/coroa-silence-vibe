import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-valencia.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToApartments = () => {
    const element = document.getElementById('apartments');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-card leading-tight">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-card/90 max-w-3xl mx-auto font-light">
          {t.hero.subtitle}
        </p>
        <Button
          variant="hero"
          size="lg"
          onClick={scrollToApartments}
          className="text-lg px-8 py-6 animate-scale-in"
        >
          {t.hero.cta}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-8 h-8 text-card" />
      </div>
    </section>
  );
};
