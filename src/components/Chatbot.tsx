import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Bot, Sparkles, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const Chatbot = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: t.chatbot.greeting },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    
    // Simple bot responses
    setTimeout(() => {
      const botResponse: Message = {
        role: 'assistant',
        content: 'Gracias por tu mensaje. Un miembro de nuestro equipo te responderá pronto.',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInput('');
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 z-50 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ${
          isOpen ? 'rotate-90' : ''
        }`}
        aria-label="Toggle chatbot"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-7 h-7" />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 md:left-6 z-50 w-[calc(100vw-2rem)] max-w-sm md:max-w-md h-[520px] bg-card rounded-2xl shadow-2xl flex flex-col animate-scale-in border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground p-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/20 ring-2 ring-white/30">
                <Bot className="h-7 w-7" />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#25D366] ring-2 ring-white" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold leading-none">Coroa Assistant</h3>
                  <Sparkles className="h-4 w-4 opacity-90" />
                </div>
                <p className="mt-1 text-xs text-white/85">Asistente virtual para reservas y estancias</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 bg-gradient-to-b from-muted/40 to-background p-4">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-2xl rounded-br-sm'
                        : 'bg-card text-foreground border border-border rounded-2xl rounded-bl-sm'
                    }`}
                  >
                    <p>{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t border-border bg-card px-4 py-3">
            <div className="flex flex-wrap gap-2">
              {['Disponibilidad', 'Apartamentos', 'Estancias largas'].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setInput(label)}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.chatbot.placeholder}
                className="flex-1 rounded-full bg-background"
              />
              <Button onClick={handleSend} size="icon" variant="default" className="rounded-full">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
