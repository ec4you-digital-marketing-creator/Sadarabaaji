import React from 'react';
import { ExternalLink, Globe, ShieldCheck, Star } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { images } from '../data/images';


const BrandNetwork = () => {
    const brands = [
        {
            name: "GSS Car Makeovers",
            url: "https://gsscarmakeovers.com/",
            logo: images.gssLogo, // Assuming GSS uses the main logo for now
            description: "Premium Paint Protection, Advanced Sun Films & Custom Car Wraps",
            tags: ["PPF", "Sun film", "Ceramic Coating", "Graphene Coating", "Car Wrap"],
            color: "from-primary/20 to-primary/5",
            borderColor: "border-primary/20"
        },
        {
            name: "FCA Sembakkam",
            url: "https://fcasembakkam.in/",
            logo: images.fcaLogo,
            description: "Authorized Luxury Car Service, Premium Accessories & Product Sales",
            tags: ["Authorized Service", "Car Accessories", "Pro Products"],
            color: "from-secondary/20 to-secondary/5",
            borderColor: "border-secondary/20"
        }
    ];

    AOS.init({
        duration: 1000,
        once: true,
    });


    return (
        <section id="network" className="py-24 bg-gray-50/50 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(circle,black_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header Group */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-primary/30"></div>
                            <span className="text-primary font-bold uppercase text-[10px] tracking-[0.5em]">Our Group Network</span>
                            <div className="w-12 h-[1px] bg-primary/30"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight leading-tight uppercase mb-4">
                            Explore Our <span className="text-primary italic">Associated Brands</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm font-semibold">
                            Beyond Sadarabaaji, our group excels in premium automotive care and authorized service excellence across Chennai.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {brands.map((brand, index) => (
                            <div 
                                key={index} 
                                data-aos={index === 0 ? "fade-right" : "fade-left"}
                                data-aos-delay={index * 200}
                                className="group relative"
                            >
                                <a 
                                    href={brand.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block h-full p-8 md:p-10 bg-black rounded-[3rem] border border-black/5 hover:border-primary/30 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden"
                                >
                                    {/* Brand Background Accent */}
                                    <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${brand.color} blur-[60px] translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                    
                                    <div className="relative z-10 flex flex-col h-full text-center lg:text-left">
                                        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 mb-8 lg:mb-0 relative">
                                            <div className="flex flex-col lg:flex-row items-center gap-6">
                                                <div className="w-48 h-auto md:w-48 md:h-48 flex items-center justify-center text-secondary shrink-0 overflow-hidden -mb-8 lg:mb-0">
                                                    {brand.logo ? (
                                                        <img src={brand.logo} className="w-full h-full object-contain" alt={brand.name} />
                                                    ) : (
                                                        <Globe className="w-8 h-8" />
                                                    )}
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                                                    {brand.name}
                                                </h3>
                                            </div>
                                            <div className="hidden lg:block p-3 rounded-full bg-white/5 text-white/40 group-hover:text-primary transition-colors shrink-0">
                                                <ExternalLink className="w-5 h-5" />
                                            </div>
                                            <div className="lg:hidden absolute top-0 right-0 p-3 rounded-full bg-white/5 text-white/40 group-hover:text-primary transition-colors shrink-0">
                                                <ExternalLink className="w-5 h-5" />
                                            </div>
                                        </div>
                                        
                                        <div className="flex-grow flex flex-col items-center lg:items-start">
                                            <p className="text-gray-400 font-semibold mb-8 text-sm md:text-base">
                                                {brand.description}
                                            </p>

                                            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                                                {brand.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="px-4 py-1.5 rounded-full bg-white/5 text-[9px] font-bold uppercase tracking-widest text-white/60 border border-white/5 group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20 transition-all">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-white/5 flex flex-col lg:flex-row items-center gap-4 lg:gap-3">
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map((_, i) => (
                                                    <div key={i} className="w-6 h-6 rounded-full bg-primary/20 border-2 border-black flex items-center justify-center text-primary">
                                                        <ShieldCheck className="w-3 h-3" />
                                                    </div>
                                                ))}
                                            </div>
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                                                Trusted Automotive Excellence
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandNetwork;
