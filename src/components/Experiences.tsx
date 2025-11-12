import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, ShoppingBag, Waves, Bike } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Experiences = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      icon: Building2,
      title: t.experiences.items.arts,
      color: 'text-accent',
    },
    {
      icon: ShoppingBag,
      title: t.experiences.items.market,
      color: 'text-primary',
    },
    {
      icon: Waves,
      title: t.experiences.items.beach,
      color: 'text-soft-blue',
    },
    {
      icon: Bike,
      title: t.experiences.items.bike,
      color: 'text-mediterranean-blue',
    },
  ];

  return (
    <section id="experiences" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.experiences.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-background rounded-2xl shadow-sm hover:shadow-md transition-all hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <exp.icon className={`w-10 h-10 mb-3 ${exp.color}`} />
              <p className="text-sm font-medium text-foreground">{exp.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            {t.experiences.explore}
          </Button>
        </div>
      </div>
    </section>
  );
};
