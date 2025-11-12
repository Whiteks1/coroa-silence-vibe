import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Apartments } from '@/components/Apartments';
import { Automation } from '@/components/Automation';
import { Experiences } from '@/components/Experiences';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Chatbot } from '@/components/Chatbot';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen smooth-scroll">
        <Header />
        <Hero />
        <About />
        <Apartments />
        <Automation />
        <Experiences />
        <Contact />
        <Footer />
        <WhatsAppFloat />
        <Chatbot />
      </div>
    </LanguageProvider>
  );
};

export default Index;
