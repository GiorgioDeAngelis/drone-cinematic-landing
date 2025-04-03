
import { useState } from "react";
import { Camera, FileVideo, Image, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";

interface PackageOption {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

const PackagesSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const packageOptions: PackageOption[] = [
    {
      id: 1,
      title: "Base",
      price: "150-500€",
      description: "Perfetto per piccoli progetti e riprese essenziali",
      features: [
        "10 foto aer  ee ad alta risoluzione",
        "1 video breve (30-60 secondi)",
        "Consegna entro 3 giorni lavorativi",
        "1 revisione inclusa"
      ],
      icon: <Image className="h-10 w-10 text-drone-orange" />
    },
    {
      id: 2,
      title: "Pro",
      price: "500-1.200€",
      description: "Ideale per progetti commerciali e campagne di marketing",
      features: [
        "20 foto aeree professionali",
        "Video con editing professionale (2-3 minuti)",
        "Color grading e correzioni avanzate",
        "Licenza commerciale inclusa",
        "Consegna entro 5 giorni lavorativi",
        "2 revisioni incluse"
      ],
      icon: <Camera className="h-10 w-10 text-drone-orange" />,
      popular: true
    },
    {
      id: 3,
      title: "Premium",
      price: "1.200-2.500€",
      description: "Soluzione completa per eventi e produzioni di alto livello",
      features: [
        "Riprese aeree illimitate dell'evento",
        "Montaggio video avanzato (5-10 minuti)",
        "Riprese con drone a doppio operatore",
        "Effetti speciali e transizioni cinematiche",
        "Licenza commerciale estesa",
        "Consegna prioritaria entro 7 giorni lavorativi",
        "Revisioni illimitate per 30 giorni"
      ],
      icon: <Video className="h-10 w-10 text-drone-orange" />
    }
  ];

  const handlePackageSelect = (id: number) => {
    setSelectedPackage(id);
    // In a real application, this would navigate to a checkout page or open a contact form
    setTimeout(() => {
      // Reset selection after a brief delay for visual feedback
      setSelectedPackage(null);
    }, 300);
  };

  return (
    <section id="packages" className="section-padding bg-neutral-900">
      <div className="container mx-auto">
        <div className="section-title-container animate-on-scroll">
          <span className="section-subtitle">I Nostri Servizi</span>
          <h2 className="section-title">Pacchetti Riprese con Drone</h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            Scegli il pacchetto più adatto alle tue esigenze. Tutti i pacchetti includono riprese con drone di alta qualità e licenza per uso personale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {packageOptions.map((pkg, index) => (
            <ScrollAnimation key={pkg.id} delay={index * 150}>
              <Card 
                className={`relative overflow-hidden bg-neutral-800/40 border ${
                  pkg.popular ? 'border-drone-orange' : 'border-drone-orange/20'
                } hover:border-drone-orange hover:shadow-[0_0_30px_rgba(255,122,0,0.2)] transition-all duration-300 h-full flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-drone-orange text-white text-xs font-bold px-3 py-1 rotate-0 transform origin-top-right">
                      POPOLARE
                    </div>
                  </div>
                )}
                <CardHeader className="pb-2">
                  <div className="mb-2">{pkg.icon}</div>
                  <CardTitle className="text-2xl font-montserrat font-extrabold">{pkg.title}</CardTitle>
                  <div className="mt-2 text-drone-orange font-montserrat font-extrabold text-3xl">{pkg.price}</div>
                  <CardDescription className="text-gray-400 mt-2">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 text-drone-orange mt-0.5">•</div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handlePackageSelect(pkg.id)}
                    className={`w-full font-montserrat font-bold ${
                      pkg.popular 
                        ? 'bg-drone-orange hover:bg-drone-orange/90 text-white' 
                        : 'bg-transparent border border-drone-orange text-drone-orange hover:bg-drone-orange/10'
                    } transition-all duration-300 transform ${
                      selectedPackage === pkg.id ? 'scale-95' : ''
                    }`}
                  >
                    Seleziona Pacchetto
                  </Button>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <p className="text-gray-400 mb-4">
            Hai esigenze particolari? Contattaci per un pacchetto personalizzato
          </p>
          <Button 
            variant="outline" 
            className="border-drone-orange text-drone-orange hover:bg-drone-orange/10"
          >
            Richiedi Preventivo Personalizzato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
