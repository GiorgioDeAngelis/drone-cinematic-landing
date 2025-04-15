import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const portfolioItems = [
  {
    id: 1,
    title: "Panoramica Costiera",
    category: "Paesaggio",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
    number: "01",
  },
  {
    id: 2,
    title: "Monitoraggio Cantiere",
    category: "Ispezione",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    number: "02",
  },
  {
    id: 3,
    title: "Riprese Evento Estivo",
    category: "Eventi",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
    number: "03",
  },
  {
    id: 4,
    title: "Riprese Montagna",
    category: "Paesaggio",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
    number: "04",
  },
];

const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleItemClick = (id: number) => {
    setSelectedItem(id);
    setOpen(true);
  };

  const handleItemHover = (id: number | null) => {
    setHoveredItem(id);
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
    <section id="portfolio" className="section-padding bg-black" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="section-title-container animate-on-scroll">
          <span className="section-subtitle">Le Nostre Opere</span>
          <h2 className="section-title">Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            Scopri alcuni dei nostri migliori progetti e lasciati ispirate dalle possibilità creative
          </p>
        </div>
        
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <ScrollAnimation key={item.id} delay={index * 150}>
              <div 
                className="portfolio-item group cursor-pointer"
                onClick={() => handleItemClick(item.id)}
                onMouseEnter={() => handleItemHover(item.id)}
                onMouseLeave={() => handleItemHover(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full aspect-[9/16] object-cover transition-transform duration-700 ${
                      hoveredItem === item.id ? 'scale-105' : ''
                    }`}
                  />
                  <div className="portfolio-overlay group-hover:opacity-100">
                    <div className="absolute top-6 right-6">
                      <div className={`bg-drone-orange/80 rounded-full p-2 transform ${
                        hoveredItem === item.id ? 'rotate-45 scale-110' : 'rotate-0'
                      } transition-all duration-300`}>
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className={`absolute top-6 left-6 text-2xl font-extrabold opacity-60 transform ${
                      hoveredItem === item.id ? 'translate-x-2' : 'translate-x-0'
                    } transition-all duration-300`}>
                      {item.number}
                    </div>
                    <div className={`transform ${
                      hoveredItem === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    } transition-all duration-300 delay-75`}>
                      <p className="portfolio-category">{item.category}</p>
                      <h3 className="portfolio-title font-montserrat font-extrabold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 animate-on-scroll">
          <button className="group flex items-center text-white hover:text-drone-orange transition-colors duration-300">
            <span className="mr-2 font-montserrat font-extrabold">Visualizza tutti i progetti</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black border-drone-orange/20 max-w-4xl p-0 overflow-hidden">
          {selectedItem && (
            <div>
              <img 
                src={portfolioItems.find(item => item.id === selectedItem)?.image} 
                alt={portfolioItems.find(item => item.id === selectedItem)?.title} 
                className="w-full h-auto"
              />
              <div className="p-6">
                <p className="portfolio-category">
                  {portfolioItems.find(item => item.id === selectedItem)?.category}
                </p>
                <h3 className="text-2xl font-montserrat font-extrabold mt-1 mb-4">
                  {portfolioItems.find(item => item.id === selectedItem)?.title}
                </h3>
                <p className="text-gray-400">
                  Questo progetto dimostra la versatilità e la qualità delle nostre riprese aeree.
                  Utilizziamo il DJI Mini 4 Pro per catturare immagini mozzafiato da prospettive uniche.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
