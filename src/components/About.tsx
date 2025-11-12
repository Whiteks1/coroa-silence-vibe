import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.about.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            {t.about.description}
          </p>
        </div>
      </div>
    </section>
  );
};
