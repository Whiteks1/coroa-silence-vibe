import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

interface Translations {
  nav: {
    apartments: string;
    experiences: string;
    booking: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    cta: string;
  };
  apartments: {
    title: string;
    filterAll: string;
    filterCapacity: string;
    filterZone: string;
    viewDetails: string;
    amenities: {
      wifi: string;
      ac: string;
      tv: string;
      kitchen: string;
      elevator: string;
    };
  };
  automation: {
    title: string;
    description: string;
  };
  experiences: {
    title: string;
    explore: string;
    items: {
      arts: string;
      market: string;
      beach: string;
      bike: string;
    };
  };
  contact: {
    title: string;
    name: string;
    email: string;
    dates: string;
    guests: string;
    submit: string;
    success: string;
  };
  footer: {
    contact: string;
    developed: string;
  };
  chatbot: {
    greeting: string;
    placeholder: string;
  };
}

const translations: Record<Language, Translations> = {
  es: {
    nav: {
      apartments: 'Apartamentos',
      experiences: 'Experiencias',
      booking: 'Reservas',
      contact: 'Contacto',
    },
    hero: {
      title: 'Tu refugio de calma en el corazón de Valencia',
      subtitle: 'Diseño, confort y tecnología inteligente para una estancia inolvidable',
      cta: 'Ver apartamentos',
    },
    about: {
      title: 'Coroa Silence Apartments',
      description: 'Una colección de alojamientos de media estancia diseñados para quienes buscan confort, conexión y autenticidad. Cada detalle refleja el equilibrio entre el diseño mediterráneo y la innovación digital.',
      cta: 'Conócenos',
    },
    apartments: {
      title: 'Nuestros Apartamentos',
      filterAll: 'Todos',
      filterCapacity: 'Por capacidad',
      filterZone: 'Por zona',
      viewDetails: 'Ver detalles',
      amenities: {
        wifi: 'WiFi',
        ac: 'Aire Acondicionado',
        tv: 'Smart TV',
        kitchen: 'Cocina equipada',
        elevator: 'Ascensor',
      },
    },
    automation: {
      title: 'Experiencia automatizada',
      description: 'Nuestra web integra un motor de reservas inteligente, comunicación automatizada por email y WhatsApp, y un panel de métricas que simplifica la gestión y mejora tu experiencia.',
    },
    experiences: {
      title: 'Vive Valencia',
      explore: 'Explorar experiencias',
      items: {
        arts: 'Ciudad de las Artes y las Ciencias',
        market: 'Mercado Central',
        beach: 'Playa de la Malvarrosa',
        bike: 'Rutas en bici por el Turia',
      },
    },
    contact: {
      title: 'Reserva tu estancia',
      name: 'Nombre',
      email: 'Email',
      dates: 'Fechas',
      guests: 'Número de personas',
      submit: 'Solicitar disponibilidad',
      success: 'Mensaje enviado con éxito',
    },
    footer: {
      contact: 'Contacto',
      developed: 'Desarrollado por Avantis IA – Valencia, 2025',
    },
    chatbot: {
      greeting: '¡Hola! ¿En qué puedo ayudarte hoy?',
      placeholder: 'Escribe tu pregunta...',
    },
  },
  en: {
    nav: {
      apartments: 'Apartments',
      experiences: 'Experiences',
      booking: 'Booking',
      contact: 'Contact',
    },
    hero: {
      title: 'Your calm refuge in the heart of Valencia',
      subtitle: 'Design, comfort and smart technology for an unforgettable stay',
      cta: 'View apartments',
    },
    about: {
      title: 'Coroa Silence Apartments',
      description: 'A collection of mid-term accommodations designed for those seeking comfort, connection and authenticity. Every detail reflects the balance between Mediterranean design and digital innovation.',
      cta: 'About us',
    },
    apartments: {
      title: 'Our Apartments',
      filterAll: 'All',
      filterCapacity: 'By capacity',
      filterZone: 'By zone',
      viewDetails: 'View details',
      amenities: {
        wifi: 'WiFi',
        ac: 'Air Conditioning',
        tv: 'Smart TV',
        kitchen: 'Equipped kitchen',
        elevator: 'Elevator',
      },
    },
    automation: {
      title: 'Automated experience',
      description: 'Our website integrates a smart booking engine, automated communication via email and WhatsApp, and a metrics panel that simplifies management and improves your experience.',
    },
    experiences: {
      title: 'Live Valencia',
      explore: 'Explore experiences',
      items: {
        arts: 'City of Arts and Sciences',
        market: 'Central Market',
        beach: 'Malvarrosa Beach',
        bike: 'Bike routes along the Turia',
      },
    },
    contact: {
      title: 'Book your stay',
      name: 'Name',
      email: 'Email',
      dates: 'Dates',
      guests: 'Number of guests',
      submit: 'Request availability',
      success: 'Message sent successfully',
    },
    footer: {
      contact: 'Contact',
      developed: 'Developed by Avantis IA – Valencia, 2025',
    },
    chatbot: {
      greeting: 'Hello! How can I help you today?',
      placeholder: 'Type your question...',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
