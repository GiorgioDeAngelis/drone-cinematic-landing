
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const PackagesPage = () => {
  useEffect(() => {
    console.log("PackagesPage mounted");
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar />
      
      <div className="pt-24"> {/* Padding to account for navbar */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto">
            <div className="mb-16">
              <span className="text-xs uppercase tracking-widest text-drone-orange mb-2 block">I Nostri Servizi</span>
              <h2 className="text-2xl md:text-3xl font-montserrat font-extrabold tracking-tight pb-4 text-white">Pacchetti Riprese con Drone</h2>
              <p className="text-gray-400 max-w-2xl mt-4">
                Scegli il pacchetto più adatto alle tue esigenze. Tutti i pacchetti includono riprese con drone di alta qualità e licenza per uso personale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Base Package */}
              <div className="bg-neutral-800/40 border border-drone-orange/20 hover:border-drone-orange rounded-lg overflow-hidden transition-all duration-300 flex flex-col h-full">
                <div className="p-6">
                  <div className="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-drone-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-montserrat font-extrabold text-slate-50">Base</h3>
                  <div className="mt-2 text-drone-orange font-montserrat font-extrabold text-3xl">150-500€</div>
                  <p className="text-gray-400 mt-2">Perfetto per piccoli progetti e riprese essenziali</p>
                </div>
                <div className="p-6 pt-0 flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">10 foto aeree ad alta risoluzione</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">1 video breve (30-60 secondi)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">Consegna entro 3 giorni lavorativi</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">1 revisione inclusa</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <button className="w-full py-2 px-4 border border-drone-orange text-drone-orange hover:bg-drone-orange/10 font-montserrat font-bold rounded transition-all duration-300">
                    Seleziona Pacchetto
                  </button>
                </div>
              </div>

              {/* Pro Package */}
              <div className="bg-neutral-800/40 border border-drone-orange rounded-lg overflow-hidden transition-all duration-300 flex flex-col h-full relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-drone-orange text-white text-xs font-bold px-3 py-1">
                    POPOLARE
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-drone-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-montserrat font-extrabold text-slate-50">Pro</h3>
                  <div className="mt-2 text-drone-orange font-montserrat font-extrabold text-3xl">500-1.200€</div>
                  <p className="text-gray-400 mt-2">Ideale per progetti commerciali e campagne di marketing</p>
                </div>
                <div className="p-6 pt-0 flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">20 foto aeree professionali</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">Video con editing professionale (2-3 minuti)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">Color grading e correzioni avanzate</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">Licenza commerciale inclusa</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">Consegna entro 5 giorni lavorativi</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">2 revisioni incluse</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <button className="w-full py-2 px-4 bg-drone-orange hover:bg-drone-orange/90 text-white font-montserrat font-bold rounded transition-all duration-300">
                    Seleziona Pacchetto
                  </button>
                </div>
              </div>

              {/* Premium Package */}
              <div className="bg-neutral-800/40 border border-drone-orange/20 hover:border-drone-orange rounded-lg overflow-hidden transition-all duration-300 flex flex-col h-full">
                <div className="p-6">
                  <div className="mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-drone-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-montserrat font-extrabold text-slate-50">Premium</h3>
                  <div className="mt-2 text-drone-orange font-montserrat font-extrabold text-3xl">1.200-2.500€</div>
                  <p className="text-gray-400 mt-2">Soluzione completa per eventi e produzioni di alto livello</p>
                </div>
                <div className="p-6 pt-0 flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">Riprese aeree illimitate dell'evento</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">Montaggio video avanzato (5-10 minuti)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">Riprese con drone a doppio operatore</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">Effetti speciali e transizioni cinematiche</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">Licenza commerciale estesa</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">Consegna prioritaria entro 7 giorni lavorativi</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-drone-orange mt-0.5">•</div>
                      <span className="text-gray-300 text-sm">Revisioni illimitate per 30 giorni</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <button className="w-full py-2 px-4 border border-drone-orange text-drone-orange hover:bg-drone-orange/10 font-montserrat font-bold rounded transition-all duration-300">
                    Seleziona Pacchetto
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-400 mb-4">
                Hai esigenze particolari? Contattaci per un pacchetto personalizzato
              </p>
              <button className="py-2 px-4 border border-drone-orange text-drone-orange hover:bg-drone-orange/10 font-montserrat font-bold rounded transition-all duration-300">
                Richiedi Preventivo Personalizzato
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <FooterSection />
    </div>
  );
};

export default PackagesPage;
