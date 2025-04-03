
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-drone-dark/70 via-drone-dark/60 to-drone-dark z-10"></div>
        <img src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80" alt="Drone in flight" className="absolute inset-0 w-full h-full object-cover grayscale" />
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="drone-heading mb-6 opacity-0 animate-fade-in text-white" style={{
            animationDelay: '0.3s'
          }}>
            Riprese Aeree <span className="text-drone-orange">Cinematografiche</span>
          </h1>
          <p className="text-lg md:text-xl text-drone-light mb-8 opacity-0 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
            Trasforma la tua visione in realtà con riprese aeree mozzafiato. 
            La nostra esperienza e attrezzatura professionale garantisce 
            qualità eccellente per ogni progetto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{
            animationDelay: '0.9s'
          }}>
            <Button size="lg" className="bg-drone-orange hover:bg-drone-orange/90 text-white">
              Richiedi un preventivo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-drone-orange/30 hover:bg-drone-orange/10 text-black hover:text-drone-orange transition-colors">
              Scopri i nostri servizi
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
