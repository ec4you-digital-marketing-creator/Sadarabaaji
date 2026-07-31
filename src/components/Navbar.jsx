import React, { useState, useEffect } from 'react';
import { Zap, MessageCircle, Phone, Home, User, Wrench, Book, PhoneCall } from 'lucide-react';
import  Images  from "../data/images";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle Scroll logic for Navbar shrink and Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // For Navbar style change
      setIsScrolled(window.scrollY > 50);

      // For Active Section tracking
      const sections = ['home', 'about', 'services', 'why-choose', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for sticky navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  return (
    <>
      {/* --- Desktop & Mobile Header --- */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'}`}>
        
        {/* Floating Glass Container (Desktop Only) */}
        <div className="container mx-auto lg:px-2 xl:px-6 hidden lg:block">
          <div className={`relative flex justify-between items-center backdrop-blur-md rounded-[2.5rem] border transition-all duration-500 lg:px-3 xl:px-8 py-4 ${
            isScrolled ? 'bg-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-black/10 -top-2' : 'bg-white/50 border-transparent'
          }`}>

            {/* Logo Area */}
            <div onClick={() => scrollToSection('home')} className="group relative z-10 cursor-pointer">
              <div className="flex items-center lg:gap-2 xl:gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-xl overflow-hidden border border-black/10 group-hover:border-primary/50 transition-all duration-500 bg-white">
                      <img src={Images.logo} loading="lazy" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" alt="Sadarabaaji Logo" />
                    </div>
                </div>
                <div className="flex flex-col">
                  <span className="lg:text-xl xl:text-2xl font-bold text-black tracking-tighter leading-none">
                    SADA<span className="text-primary group-hover:text-orange-400 transition-colors duration-300">RABAAJI</span>
                  </span>
                  <span className="text-[8px] text-gray-500 font-semibold lg:tracking-[0.2em] xl:tracking-[0.5em] uppercase mt-1 group-hover:text-gray-600 transition-colors duration-300 whitespace-nowrap">Elite Car Care</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="flex items-center lg:space-x-1 xl:space-x-2 bg-black/5 rounded-full p-1.5 border border-black/5">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`lg:px-3 xl:px-6 py-2 rounded-full lg:text-[10px] xl:text-[11px] font-bold uppercase lg:tracking-wider xl:tracking-widest transition-all duration-500 relative group overflow-hidden whitespace-nowrap ${
                    activeSection === item.id ? 'text-white bg-primary' : 'text-black hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Header Actions */}
            <div className="flex items-center lg:gap-2 xl:gap-6 relative z-10">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative lg:px-5 lg:py-2.5 xl:px-8 xl:py-3 bg-black text-white rounded-full lg:text-[10px] xl:text-xs font-bold uppercase lg:tracking-wider xl:tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,103,0,0.3)] whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary animate-pulse" />
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Header (Logo Only) */}
        <div className="container mx-auto px-6 lg:hidden flex justify-center py-2">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-full px-5 py-2 border border-black/10 shadow-xl">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-primary/30">
              <img src={Images.logo} loading="lazy" className="w-full h-full object-cover" alt="Logo" />
            </div>
            <span className="text-lg font-bold text-black tracking-tighter">SADA<span className="text-primary">RABAAJI</span></span>
          </div>
        </div>
      </nav>

      {/* --- Floating Action Buttons (Mobile Only) --- */}
      <div className="fixed right-6 bottom-32 flex flex-col gap-4 z-[110]">
        <a href="https://wa.me/919962411881" target="_blank" rel="noreferrer"
           className="w-14 h-14 bg-primary border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform active:scale-90 animate-bounce">
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
        <a href="tel:09962411881"
           className="w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl transition-transform active:scale-90">
          <Phone className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* --- Premium Mobile Bottom Nav --- */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[110] lg:hidden w-[94vw] max-w-[380px]">
        <div className="bg-white/95 backdrop-blur-2xl rounded-[1.75rem] shadow-[0_8px_32px_rgba(0,0,0,0.10),0_0_0_1px_rgba(0,0,0,0.05)] px-2 py-2.5 flex items-center">
          
          <MobileNavItem 
            id="home" icon={<Home className="w-5 h-5" />} label="Home" 
            active={activeSection === 'home'} onClick={scrollToSection} 
          />
          <MobileNavItem 
            id="about" icon={<User className="w-5 h-5" />} label="About" 
            active={activeSection === 'about'} onClick={scrollToSection} 
          />
          <MobileNavItem 
            id="contact" icon={<PhoneCall className="w-5 h-5" />} label="Contact" 
            active={activeSection === 'contact'} onClick={scrollToSection} 
          />
          <MobileNavItem 
            id="services" icon={<Wrench className="w-5 h-5" />} label="Services" 
            active={activeSection === 'services'} onClick={scrollToSection} 
          />
          <MobileNavItem 
            id="testimonials" icon={<Book className="w-5 h-5" />} label="Reviews" 
            active={activeSection === 'testimonials'} onClick={scrollToSection} 
          />

        </div>
      </nav>
    </>
  );
};

// Helper Component for Mobile Items
const MobileNavItem = ({ id, icon, label, active, onClick }) => (
  <button onClick={() => onClick(id)} className="relative flex-1 flex flex-col items-center gap-1 py-1 rounded-xl transition-all duration-300 active:scale-90">
    {active && <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary"></span>}
    <div className={`transition-all duration-300 ${active ? 'text-primary scale-110 drop-shadow-[0_0_6px_rgba(255,103,0,0.5)]' : 'text-gray-400'}`}>
      {icon}
    </div>
    <span className={`text-[8px] font-bold uppercase tracking-wide transition-colors ${active ? 'text-primary' : 'text-gray-400'}`}>
      {label}
    </span>
  </button>
);

export default Navbar;
