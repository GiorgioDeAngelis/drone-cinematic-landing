
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const portfolioItems = [
  {
    id: 1,
    title: "Panoramica Costiera",
    category: "Paesaggio",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Monitoraggio Cantiere",
    category: "Ispezione",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Riprese Evento Estivo",
    category: "Eventi",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Riprese Montagna",
    category: "Paesaggio",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
  },
];

const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleItemClick = (id: number) => {
    setSelectedItem(id);
    setOpen(true);
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
    <section id="portfolio" className="section-padding bg-drone-dark" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="drone-subheading mb-2 animate-on-scroll">Il Nostro <span className="text-drone-orange">Portfolio</span></h2>
          <p className="text-drone-light max-w-2xl mx-auto animate-on-scroll">
            Scopri alcuni dei nostri migliori progetti e lasciati ispirare dalle possibilità creative
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className="portfolio-item group animate-on-scroll"
              onClick={() => handleItemClick(item.id)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover"
              />
              <div className="portfolio-overlay group-hover:opacity-100">
                <h3 className="text-white text-xl font-medium">{item.title}</h3>
                <p className="text-drone-orange">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-drone-darkBlue border-drone-orange/20 max-w-4xl">
          {selectedItem && (
            <div>
              <img 
                src={portfolioItems.find(item => item.id === selectedItem)?.image} 
                alt={portfolioItems.find(item => item.id === selectedItem)?.title} 
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-xl font-medium mt-4">
                {portfolioItems.find(item => item.id === selectedItem)?.title}
              </h3>
              <p className="text-drone-orange">
                {portfolioItems.find(item => item.id === selectedItem)?.category}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
