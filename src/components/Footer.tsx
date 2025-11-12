import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground/95 text-card py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Coroa <span className="text-primary">Silence</span>
            </h3>
            <p className="text-card/70 text-sm">
              Valencia, España
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">{t.footer.contact}</h4>
            <div className="space-y-2 text-sm text-card/70">
              <p>iaavantis@gmail.com</p>
              <p>+34 600 500 400</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-3">Social</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-sm font-medium"
              >
                Booking
              </a>
              <a
                href="https://airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-sm font-medium"
              >
                Airbnb
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-card/20 pt-6 text-center text-sm text-card/60">
          <p>{t.footer.developed}</p>
        </div>
      </div>
    </footer>
  );
};
