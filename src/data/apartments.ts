import mercatImg from '@/assets/apartment-mercat.jpg';
import nestImg from '@/assets/apartment-nest.jpg';
import furioImg from '@/assets/apartment-furio.jpg';
import dionisImg from '@/assets/apartment-dionis.jpg';
import guillemImg from '@/assets/apartment-guillem.jpg';
import mestallaImg from '@/assets/apartment-mestalla.jpg';

export interface Apartment {
  id: string;
  name: string;
  image: string;
  description: {
    es: string;
    en: string;
  };
  capacity: number;
  zone: string;
  amenities: string[];
}

export const apartments: Apartment[] = [
  {
    id: 'mercat',
    name: 'Mercat',
    image: mercatImg,
    description: {
      es: 'Luminoso apartamento en el corazón del centro histórico, a pasos del Mercado Central.',
      en: 'Bright apartment in the heart of the historic center, steps from the Central Market.',
    },
    capacity: 4,
    zone: 'Centro',
    amenities: ['wifi', 'ac', 'tv', 'kitchen', 'elevator'],
  },
  {
    id: 'nest',
    name: 'Nest',
    image: nestImg,
    description: {
      es: 'Acogedor nido mediterráneo con diseño minimalista y luz natural.',
      en: 'Cozy Mediterranean nest with minimalist design and natural light.',
    },
    capacity: 2,
    zone: 'Ruzafa',
    amenities: ['wifi', 'ac', 'tv', 'kitchen'],
  },
  {
    id: 'furio',
    name: 'Furio',
    image: furioImg,
    description: {
      es: 'Moderno apartamento con cocina de diseño y acabados premium.',
      en: 'Modern apartment with designer kitchen and premium finishes.',
    },
    capacity: 3,
    zone: 'Centro',
    amenities: ['wifi', 'ac', 'tv', 'kitchen', 'elevator'],
  },
  {
    id: 'dionis',
    name: 'Dionis',
    image: dionisImg,
    description: {
      es: 'Espectacular terraza con vistas panorámicas de Valencia.',
      en: 'Spectacular terrace with panoramic views of Valencia.',
    },
    capacity: 4,
    zone: 'Ciutat Vella',
    amenities: ['wifi', 'ac', 'tv', 'kitchen', 'elevator'],
  },
  {
    id: 'guillem',
    name: 'Guillem',
    image: guillemImg,
    description: {
      es: 'Elegancia contemporánea con detalles en madera natural.',
      en: 'Contemporary elegance with natural wood details.',
    },
    capacity: 2,
    zone: 'L\'Eixample',
    amenities: ['wifi', 'ac', 'tv', 'kitchen', 'elevator'],
  },
  {
    id: 'mestalla',
    name: 'Mestalla',
    image: mestallaImg,
    description: {
      es: 'Perfecto para trabajar y descansar, con zona de oficina y vistas urbanas.',
      en: 'Perfect for work and rest, with office area and urban views.',
    },
    capacity: 3,
    zone: 'Mestalla',
    amenities: ['wifi', 'ac', 'tv', 'kitchen', 'elevator'],
  },
];
