import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { apartments, type Apartment } from '@/data/apartments';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wifi, AirVent, Tv, UtensilsCrossed, Building2 } from 'lucide-react';

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  wifi: Wifi,
  ac: AirVent,
  tv: Tv,
  kitchen: UtensilsCrossed,
  elevator: Building2,
};

export const Apartments = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'capacity' | 'zone'>('all');
  const [selectedValue, setSelectedValue] = useState<string>('');

  const filteredApartments = apartments.filter((apt) => {
    if (filter === 'all') return true;
    if (filter === 'capacity' && selectedValue) {
      return apt.capacity >= parseInt(selectedValue);
    }
    if (filter === 'zone' && selectedValue) {
      return apt.zone === selectedValue;
    }
    return true;
  });

  const uniqueZones = [...new Set(apartments.map((apt) => apt.zone))];

  return (
    <section id="apartments" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.apartments.title}
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => {
              setFilter('all');
              setSelectedValue('');
            }}
          >
            {t.apartments.filterAll}
          </Button>

          <select
            className="px-4 py-2 rounded-xl border-2 border-primary bg-transparent text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
            value={filter === 'capacity' ? selectedValue : ''}
            onChange={(e) => {
              if (e.target.value) {
                setFilter('capacity');
                setSelectedValue(e.target.value);
              }
            }}
          >
            <option value="">{t.apartments.filterCapacity}</option>
            <option value="2">2+ personas</option>
            <option value="3">3+ personas</option>
            <option value="4">4+ personas</option>
          </select>

          <select
            className="px-4 py-2 rounded-xl border-2 border-primary bg-transparent text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
            value={filter === 'zone' ? selectedValue : ''}
            onChange={(e) => {
              if (e.target.value) {
                setFilter('zone');
                setSelectedValue(e.target.value);
              }
            }}
          >
            <option value="">{t.apartments.filterZone}</option>
            {uniqueZones.map((zone) => (
              <option key={zone} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>

        {/* Apartment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApartments.map((apartment, index) => (
            <Card
              key={apartment.id}
              className="overflow-hidden hover-scale glass-card group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={apartment.image}
                  alt={apartment.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {apartment.capacity} {language === 'es' ? 'personas' : 'guests'}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl">{apartment.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {apartment.zone}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {apartment.description[language]}
                </p>

                <div className="flex flex-wrap gap-3">
                  {apartment.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity];
                    return Icon ? (
                      <div
                        key={amenity}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                        title={t.apartments.amenities[amenity as keyof typeof t.apartments.amenities]}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    ) : null;
                  })}
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="outline" className="w-full">
                  {t.apartments.viewDetails}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
