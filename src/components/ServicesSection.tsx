
import { Camera, Building, FileVideo } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: <Camera className="h-12 w-12 text-drone-orange" />,
    title: "Fotografia e Riprese Aeree",
    description: "Immortala eventi, proprietà immobiliari e paesaggi con prospettive aeree uniche e mozzafiato.",
  },
  {
    icon: <Building className="h-12 w-12 text-drone-orange" />,
    title: "Ispezioni Tecniche",
    description: "Monitoraggio di cantieri, strutture e aree difficilmente accessibili con precisione e sicurezza.",
  },
  {
    icon: <FileVideo className="h-12 w-12 text-drone-orange" />,
    title: "Video Promozionali",
    description: "Crea contenuti visivi d'impatto per promuovere la tua azienda, i tuoi prodotti o servizi.",
  }
];

const ServicesSection = () => {
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
    <section id="services" className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-800" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="drone-subheading mb-2 animate-on-scroll">I Nostri <span className="text-drone-orange">Servizi</span></h2>
          <p className="text-drone-light max-w-2xl mx-auto animate-on-scroll">
            Offriamo soluzioni complete per valorizzare i tuoi progetti con riprese aeree professionali
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-on-scroll"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-montserrat font-extrabold mb-3">{service.title}</h3>
              <p className="text-drone-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
