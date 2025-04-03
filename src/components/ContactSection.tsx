
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Richiesta inviata!",
        description: "Ti contatteremo al più presto.",
        variant: "default",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

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
    <section id="contact" className="section-padding bg-gradient-to-b from-drone-dark to-drone-darkBlue" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="drone-subheading mb-2 animate-on-scroll">
            <span className="text-drone-orange">Contattaci</span>
          </h2>
          <p className="text-drone-light max-w-2xl mx-auto animate-on-scroll">
            Hai un progetto in mente? Compila il modulo e ti contatteremo per discutere delle possibilità
          </p>
        </div>
        
        <div className="max-w-xl mx-auto animate-on-scroll">
          <form 
            onSubmit={handleSubmit} 
            className="bg-black/30 p-8 rounded-lg border border-drone-orange/20"
          >
            <div className="grid gap-6">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input 
                  id="name" 
                  placeholder="Il tuo nome" 
                  className="bg-black/50 border-drone-orange/20 focus:border-drone-orange mt-1"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="La tua email" 
                  className="bg-black/50 border-drone-orange/20 focus:border-drone-orange mt-1"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="project">Progetto</Label>
                <Textarea 
                  id="project" 
                  placeholder="Descrivi brevemente il tuo progetto" 
                  className="bg-black/50 border-drone-orange/20 focus:border-drone-orange mt-1"
                  rows={4}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-drone-orange hover:bg-drone-orange/90 text-white w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Invio in corso..."
                ) : (
                  <>
                    Invia richiesta <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
