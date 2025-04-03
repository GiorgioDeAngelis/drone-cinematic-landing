
import { useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const testimonials = [
  {
    id: "1",
    name: "Marco Bianchi",
    role: "Agente Immobiliare",
    quote: "Le riprese aeree hanno trasformato completamente la presentazione delle mie proprietà. I clienti possono visualizzare l'intera area e il contesto in modo chiaro e coinvolgente.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "2",
    name: "Laura Rossi",
    role: "Event Manager",
    quote: "Abbiamo utilizzato i servizi di DroneCreative per documentare il nostro festival estivo. La qualità delle riprese ha superato le nostre aspettative, catturando perfettamente l'atmosfera dell'evento.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "3",
    name: "Giovanni Verdi",
    role: "Direttore Marketing",
    quote: "Il video promozionale realizzato con le riprese aeree ha generato un engagement sui social media tre volte superiore rispetto alle nostre campagne precedenti.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animated');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-drone-dark" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="drone-subheading mb-2 animate-on-scroll">
            <span className="text-drone-orange">Testimonianze</span>
          </h2>
          <p className="text-drone-light max-w-2xl mx-auto animate-on-scroll">
            Scopri cosa dicono i nostri clienti della nostra professionalità e dei risultati ottenuti
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <Tabs defaultValue="1" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-black/30">
              {testimonials.map((testimonial) => (
                <TabsTrigger key={testimonial.id} value={testimonial.id} className="data-[state=active]:bg-drone-orange data-[state=active]:text-white">
                  {testimonial.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {testimonials.map((testimonial) => (
              <TabsContent key={testimonial.id} value={testimonial.id} className="mt-6">
                <div className="flex flex-col md:flex-row gap-6 items-center bg-black/30 p-6 rounded-lg border border-drone-orange/20">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-drone-orange"
                    />
                  </div>
                  <div>
                    <blockquote className="text-lg italic mb-4 text-drone-light">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-drone-orange">{testimonial.role}</div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
