
import { useRef, useEffect } from "react";
import { Camera, Star, TrendingUp, Eye } from "lucide-react";

const benefits = [
  {
    icon: <Camera className="h-8 w-8 text-drone-orange" />,
    title: "Qualità 4K",
    description: "Riprese in alta definizione per un risultato professionale e dettagliato."
  },
  {
    icon: <Star className="h-8 w-8 text-drone-orange" />,
    title: "Emozione Visiva",
    description: "Cattura l'attenzione del pubblico con prospettive uniche e dinamiche."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-drone-orange" />,
    title: "Promozione Efficace",
    description: "Aumenta l'engagement e la conversione con contenuti di qualità superiore."
  },
  {
    icon: <Eye className="h-8 w-8 text-drone-orange" />,
    title: "Visibilità Online",
    description: "Distinguiti dalla concorrenza con contenuti visivi d'impatto."
  }
];

const BenefitsSection = () => {
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
    <section className="section-padding bg-gradient-to-b from-drone-darkBlue to-drone-dark" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="drone-subheading mb-2 animate-on-scroll">I <span className="text-drone-orange">Vantaggi</span></h2>
          <p className="text-drone-light max-w-2xl mx-auto animate-on-scroll">
            Scopri perché le riprese aeree possono fare la differenza nei tuoi progetti
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center animate-on-scroll"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-lg font-montserrat font-extrabold mb-2">{benefit.title}</h3>
              <p className="text-drone-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
