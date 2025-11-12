import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, MessageSquare, BarChart3 } from 'lucide-react';

export const Automation = () => {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Calendar,
      title: language === 'es' ? 'Motor de reservas' : 'Booking engine',
      color: 'text-primary',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp & Email',
      color: 'text-accent',
    },
    {
      icon: BarChart3,
      title: language === 'es' ? 'Panel de métricas' : 'Metrics panel',
      color: 'text-valencia-orange',
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.automation.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            {t.automation.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className={`w-12 h-12 mb-4 ${feature.color}`} />
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
