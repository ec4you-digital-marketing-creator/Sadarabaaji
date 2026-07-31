import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Droplets, Settings, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';


const iconMap = {
  sparkles: Sparkles,
  droplets: Droplets,
  settings: Settings,
  'shield-check': ShieldCheck,
};

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch timer (5 seconds)
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % servicesData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, activeService]);

  const handleManualSelect = (index) => {
    setActiveService(index);
    // Timer-ah reset panna small pause
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 50);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-12 bg-white relative overflow-hidden">
      
      {/* Premium Technical Backdrop */}
      <div className="absolute inset-0 tech-grid opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header: System Status */}
        <div className="mb-24 text-center" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-primary/30"></div>
            <span className="text-primary font-bold uppercase text-[10px] tracking-[0.5em] flex items-center gap-3">
              Premium Detailing Protocols
            </span>
            <div className="w-16 h-[1px] bg-primary/30"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary uppercase leading-[1.1] tracking-tight">
            Advanced <span className="text-primary">Car Care</span> <br className="hidden lg:block" /> & Studio Services
          </h2>
        </div>

        {/* 3-Column Tactical Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6 xl:gap-16">

          {/* Column 1: Service Tabs */}
          <div className="w-full lg:w-[25%] xl:w-[22%] grid grid-cols-2 lg:flex lg:flex-col gap-4 pb-2 lg:pb-0 relative z-20 self-stretch justify-center">
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              const isActive = activeService === index;

              return (
                <button 
                  key={service.id}
                  onClick={() => handleManualSelect(index)}
                  className={`relative group lg:h-auto lg:flex-1 px-4 xl:px-6 py-5 lg:py-0 rounded-[2rem] border transition-all duration-500 flex flex-col justify-center text-left shrink-0 lg:shrink w-full lg:min-w-0 ${
                    isActive ? 'bg-black border-primary/50 shadow-3xl' : 'bg-black/5 border-black/5 hover:bg-black/10 hover:border-primary/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${
                      isActive ? 'text-primary' : 'text-gray-400'
                    }`}>
                      SERVICE-0{index + 1}
                    </span>
                    {IconComponent && (
                      <IconComponent className={`w-5 h-5 transition-all duration-500 ${
                        isActive ? 'text-primary scale-110' : 'text-gray-400 group-hover:text-primary'
                      }`} />
                    )}
                  </div>
                  <span className={`text-xs md:text-sm lg:text-[10px] xl:text-sm font-bold uppercase tracking-tight transition-colors duration-500 leading-snug ${
                    isActive ? 'text-white' : 'text-secondary'
                  }`}>
                    {service.title}
                  </span>

                  {/* Progress Bar (Only for Active) */}
                  {isActive && (
                    <div className="absolute bottom-3 left-8 right-8 h-[2px] bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                        className="h-full bg-primary"
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Column 2: Visual Focus */}
          <div className="w-full lg:w-[40%] xl:w-[43%] relative group h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[650px] lg:sticky lg:top-32" data-aos="zoom-in">
            {/* Corner Brackets */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-[3rem] z-20 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-[3rem] z-20 group-hover:scale-105 transition-transform duration-700"></div>

            <div className="relative h-full w-full rounded-[3.5rem] overflow-hidden shadow-4xl border border-black/5 bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeService}
                  src={servicesData[activeService].image}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1.05 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Service Protocol Visual"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Column 3: Integrated Context & Details */}
          <div className="w-full lg:w-[35%] xl:w-[35%] flex flex-col justify-center py-2 relative z-20 self-stretch" data-aos="fade-left">
            <div className="space-y-6 xl:space-y-8 lg:pb-12">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-[2px] bg-primary"></span>
                  <span className="text-primary font-bold uppercase text-[10px] tracking-[0.4em]">
                    {servicesData[activeService].tier}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-3xl xl:text-6xl font-bold text-secondary uppercase leading-[0.95] tracking-tighter mb-4 xl:mb-6">
                  {servicesData[activeService].title}
                </h3>
                <p className="text-gray-500 font-semibold text-sm xl:text-base leading-relaxed">
                  {servicesData[activeService].desc}
                </p>
              </div>

              {/* Perfect For indicator */}
              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                <span className="text-[8px] text-primary font-bold uppercase tracking-[0.3em] block mb-1">
                  Optimal Application:
                </span>
                <p className="text-secondary text-[11px] font-semibold leading-snug">
                  {servicesData[activeService].perfectFor}
                </p>
              </div>

              {/* Highlight Stats Grid */}
              <div className="grid grid-cols-3 gap-2 xl:gap-3">
                {Object.entries(servicesData[activeService].stats).map(([key, val]) => (
                  <div key={key} className="bg-white border border-gray-100 p-2 xl:p-4 rounded-2xl shadow-sm hover:border-primary/20 hover:shadow-md transition-all">
                    <span className="text-[7px] xl:text-[8px] text-gray-400 font-bold uppercase tracking-widest block mb-1">{key}</span>
                    <span className="text-[10px] text-secondary font-bold uppercase">{val}</span>
                  </div>
                ))}
              </div>

              {/* Protocols List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.3em]">Operational Points</span>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-tight">Verified</span>
                </div>
                {/* Scrollable Container with Hidden Scrollbar for sleek look */}
                <div className="grid grid-cols-1 gap-2.5 max-h-[180px] lg:max-h-[220px] xl:max-h-[280px] overflow-y-auto pr-2" 
                     style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {servicesData[activeService].points.map((point, pIndex) => (
                    <div key={pIndex} className="flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary/20 shrink-0"></div>
                      <span className="text-gray-600 text-[11px] font-semibold uppercase tracking-tight group-hover:text-secondary transition-colors">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 lg:mt-6 lg:hidden">
              <button onClick={() => scrollToSection("contact")} className="group relative flex items-center justify-between bg-black text-white w-full px-8 py-6 rounded-[2rem] font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden shadow-3xl transition-all hover:translate-y-[-2px] active:scale-[0.98]">
                <span className="relative z-10 flex items-center gap-3">
                  <Zap className="w-4 h-4 text-primary fill-primary" />
                  Book Secure Slot
                </span>
                <div className="relative z-10 bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <div className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-20"></div>
              </button>
              <p className="text-[8px] text-gray-400 font-semibold uppercase tracking-widest text-center mt-4 lg:text-left">
                Chennai Precision Detailing Protocol v2.0
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
