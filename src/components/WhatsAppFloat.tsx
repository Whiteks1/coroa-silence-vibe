import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat = () => {
  const phoneNumber = '34600500400'; // Format: country code + number without +
  const message = encodeURIComponent('Hola! Estoy interesado en los apartamentos Coroa Silence');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-fade-in"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};
