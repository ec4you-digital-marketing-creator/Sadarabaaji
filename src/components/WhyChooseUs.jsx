import React from 'react';
import { motion } from 'framer-motion';
import { Users, LayoutGrid, Check, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const differentiators = [
    "Scratch-free microfiber wash method",
    "High-quality foam & nano coating products",
    "Advanced rust protection technology",
    "Affordable pricing with premium results",
    "Quick service & easy booking system"
  ];

  return (
    <section id="why-choose" className="py-12 bg-white text-black relative overflow-hidden">
      
      {/* Background Layer: Low Opacity Car Visual */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.pinimg.com/736x/2b/dc/e7/2bdce748a16682ccbf105ff0ec49c2fe.jpg" 
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.8]" 
          alt="Car Background Overlay" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-white"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header Block */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-20">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary/30"></div>
              <span className="text-primary font-bold uppercase text-[10px] tracking-[0.5em]">
                Why Choose Sadarabaaji
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-[1.1] tracking-tight uppercase">
              Why You Should <span className="text-primary">Trust</span> <br className="hidden lg:block" />
              Sadarabaaji <span className="text-primary">Car Wash & Detailing</span> in Chennai
            </h2>
          </motion.div>
          
          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.2 }}
            className="lg:pb-2"
          >
            <p className="text-gray-500 text-lg font-semibold leading-relaxed max-w-2xl">
              At Sadarabaaji Car Wash SPA, we don’t just clean cars — we restore, protect, and enhance your 
              vehicle’s performance and appearance. Our advanced techniques, premium-grade products, and trained 
              professionals ensure every car leaves with a flawless finish.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Statistics Column */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1: Customers */}
            <motion.div 
              {...fadeInUp}
              className="p-8 lg:p-10 rounded-[3rem] bg-gray-50 border border-gray-100 flex flex-col justify-start text-left hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl md:text-5xl font-bold text-secondary">6,000+</span>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h4 className="text-secondary font-bold uppercase text-xs tracking-widest mb-3">Happy Customers</h4>
              <p className="text-gray-500 text-[13px] font-semibold leading-relaxed">
                Successfully served over 6,000+ car owners in Chennai, delivering consistent quality, on-time 
                service, and exceptional detailing results.
              </p>
            </motion.div>

            {/* Card 2: Packages */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="p-8 lg:p-10 rounded-[3rem] bg-gray-50 border border-gray-100 flex flex-col justify-start text-left hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl md:text-5xl font-bold text-secondary">12+</span>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <LayoutGrid className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h4 className="text-secondary font-bold uppercase text-xs tracking-widest mb-3">Service Packages</h4>
              <p className="text-gray-500 text-[13px] font-semibold leading-relaxed">
                Multiple customized packages suitable for hatchbacks, sedans, SUVs, and luxury cars, from basic 
                wash to complete detailing.
              </p>
            </motion.div>

            {/* Card 3: Water Conservation */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 p-8 lg:p-10 rounded-[3.5rem] bg-black text-white flex flex-col md:flex-row md:items-center gap-8 hover:shadow-3xl transition-all duration-500 group"
            >
              <div className="shrink-0">
                <span className="block text-5xl md:text-6xl font-bold text-primary mb-2">100K+</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                  Litres Conserved
                </span>
              </div>
              <div className="h-[1px] md:h-12 w-full md:w-[1px] bg-white/10"></div>
              <p className="text-gray-400 text-sm font-semibold leading-relaxed max-w-md">
                We use eco-friendly washing systems and controlled water pressure technology that helps conserve 
                water while maintaining industry-leading cleaning standards.
              </p>
            </motion.div>

          </div>

          {/* Differentiators Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-secondary rounded-[3.5rem] p-10 lg:p-12 text-white relative overflow-hidden group shadow-4xl"
          >
            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>

            <h3 className="text-3xl font-bold uppercase tracking-tighter mb-8 relative z-10">
              What Makes <br /> <span className="text-primary">Us Different?</span>
            </h3>

            <ul className="space-y-6 relative z-10">
              {differentiators.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group/item">
                  <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/40 transition-colors">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-gray-300 text-[13px] font-semibold uppercase tracking-tight leading-snug group-hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Decorative Element */}
            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between opacity-50">
              <span className="text-[8px] font-bold uppercase tracking-[0.4em]">Operational Excellence</span>
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
