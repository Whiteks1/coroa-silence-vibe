import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dates: '',
    guests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    toast({
      title: t.contact.success,
      description: formData.name,
    });

    setFormData({ name: '', email: '', dates: '', guests: '' });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t.contact.title}
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-2xl shadow-lg animate-scale-in"
          >
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  {t.contact.name}
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">
                  {t.contact.email}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="dates" className="text-foreground">
                  {t.contact.dates}
                </Label>
                <Input
                  id="dates"
                  type="text"
                  placeholder="DD/MM/YYYY - DD/MM/YYYY"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="guests" className="text-foreground">
                  {t.contact.guests}
                </Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                {t.contact.submit}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
