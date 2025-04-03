
import { useState } from "react";
import { Camera, Image, Video } from "lucide-react";

const DronePackagesSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  
  const packages = [
    {
      id: 1,
      title: "Base",
      price: "150-500€",
      description: "Perfetto per piccoli progetti e riprese essenziali",
      features: [
        "10 foto aeree ad alta risoluzione", 
        "1 video breve (30-60 secondi)", 
        "Consegna entro 3 giorni lavorativi", 
        "1 revisione inclusa"
      ],
      icon: <Image className="h-10 w-10 text-orange-500" />
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
      icon: <Camera className="h-10 w-10 text-orange-500" />,
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
      icon: <Video className="h-10 w-10 text-orange-500" />
    }
  ];

  const handlePackageSelect = (id: number) => {
    setSelectedPackage(id);
    setTimeout(() => {
      setSelectedPackage(null);
    }, 300);
  };

  return (
    <div id="drone-packages" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-neutral-900">
      <div className="container mx-auto">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-orange-500 mb-2 block">I Nostri Servizi</span>
          <h2 className="text-2xl md:text-3xl font-montserrat font-extrabold tracking-tight pb-4 text-white">Pacchetti Riprese con Drone</h2>
          <p className="text-gray-400 max-w-2xl mt-4">
            Scegli il pacchetto più adatto alle tue esigenze. Tutti i pacchetti includono riprese con drone di alta qualità e licenza per uso personale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg) => (
            <div key={pkg.id} className={`relative overflow-hidden bg-neutral-800/40 border rounded-lg ${pkg.popular ? 'border-orange-500' : 'border-orange-500/20'} hover:border-orange-500 transition-all duration-300 h-full flex flex-col`}>
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rotate-0 transform origin-top-right">
                    POPOLARE
                  </div>
                </div>
              )}
              <div className="p-6 pb-0">
                <div className="mb-2">{pkg.icon}</div>
                <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
                <div className="mt-2 text-orange-500 font-bold text-3xl">{pkg.price}</div>
                <p className="text-gray-400 mt-2">{pkg.description}</p>
              </div>
              <div className="p-6 pt-4 flex-grow">
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 text-orange-500 mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <button 
                  onClick={() => handlePackageSelect(pkg.id)} 
                  className={`w-full py-2 px-4 rounded font-bold ${pkg.popular ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'border border-orange-500 text-orange-500 hover:bg-orange-500/10'} transition-all duration-300 transform ${selectedPackage === pkg.id ? 'scale-95' : ''}`}
                >
                  Seleziona Pacchetto
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Hai esigenze particolari? Contattaci per un pacchetto personalizzato
          </p>
          <button className="py-2 px-4 border border-orange-500 text-orange-500 hover:bg-orange-500/10 font-bold rounded transition-all duration-300">
            Richiedi Preventivo Personalizzato
          </button>
        </div>
      </div>
    </div>
  );
};

export default DronePackagesSection;
