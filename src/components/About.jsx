import React, { useEffect } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { images } from '../data/images';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const qualityPoints = [
        "Spotless exterior shine",
        "Deep interior cleaning",
        "Paint & rust protection",
        "100% Satisfaction"
    ];

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="about" className="py-12 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 space-y-8 order-2 lg:order-1" data-aos="fade-right">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-primary/30"></div>
                            <span className="text-primary font-bold uppercase text-[10px] tracking-[0.5em]">Our Story</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-[1.1] tracking-tight uppercase">
                            About <span className="text-primary">Sadarabaaji</span> <br className="hidden lg:block" />
                            <span className="text-primary">Car Wash in Rajakilpakkam</span>
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-900 text-lg font-semibold leading-relaxed">
                                At Sadarabaaji, we redefine professional car cleaning Rajakilpakkam with precision, technology, and customer-first service.
                            </p>
                            <p className="text-gray-500 text-base font-semibold leading-relaxed">
                                Our mission is simple — to provide high-quality, eco-friendly, and affordable auto car wash in Rajakilpakkam that protect your vehicle and enhance its lifespan.
                            </p>

                            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 space-y-4">
                                <p className="text-secondary font-bold uppercase text-xs tracking-widest border-b border-gray-200 pb-2">
                                    Our Quality Commitment:
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                                    {qualityPoints.map((point, index) => (
                                        <li key={index} className="flex items-center gap-3 text-gray-700 text-[11px] font-bold uppercase tracking-tight">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button onClick={() => scrollToSection("contact")} className="bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[12px] hover:bg-primary hover:scale-105 transition-all duration-500 shadow-2xl active:scale-95 flex items-center gap-5 group">
                                <span>Explore Our Services</span>
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right Visual Column: Responsive Layouts */}
                    <div className="lg:col-span-6 relative order-1 lg:order-2 px-4 lg:px-0">
                        {/* --- MOBILE LAYOUT (Default: < md) --- */}
                        <div className="block md:hidden relative w-full aspect-[4/5] max-w-[400px] mx-auto">
                            {/* Top Image */}
                            <div className="absolute top-0 right-0 w-[85%] z-20" data-aos="zoom-in">
                                <div className="rounded-[2rem] overflow-hidden shadow-xl border-b-[6px] border-primary aspect-[4/3]">
                                    <img src={images.about1} className="w-full h-full object-cover" alt="Detailing" />
                                </div>
                            </div>
                            {/* Bottom Image */}
                            <div className="absolute bottom-4 left-0 w-[85%] z-10" data-aos="zoom-in" data-aos-delay="200">
                                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-l-[6px] border-secondary -translate-x-2 aspect-[4/3]">
                                    <img src={images.about2} className="w-full h-full object-cover" alt="Care" />
                                </div>
                            </div>
                        </div>

                        {/* --- TABLET LAYOUT (md to lg) --- */}
                        <div className="hidden md:block lg:hidden relative w-full aspect-[16/9] max-w-[700px] mx-auto">
                            <div className="grid grid-cols-2 gap-6 h-full p-8">
                                <div className="relative" data-aos="fade-right">
                                    <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-primary rounded-tl-2xl z-20"></div>
                                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-b-[6px] border-primary h-full">
                                        <img src={images.about1} className="w-full h-full object-cover" alt="Detailing" />
                                    </div>
                                </div>
                                <div className="relative translate-y-12" data-aos="fade-left" data-aos-delay="200">
                                    <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-secondary rounded-br-2xl z-20"></div>
                                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-l-[6px] border-secondary h-full">
                                        <img src={images.about2} className="w-full h-full object-cover" alt="Care" />
                                    </div>
                                </div>
                            </div>
                            {/* Floating Badge for Tablet */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30" data-aos="zoom-in" data-aos-delay="400">
                                <div className="bg-black/95 backdrop-blur-xl text-white px-6 py-3 rounded-2xl border border-white/10 shadow-3xl flex items-center gap-3">
                                    <ShieldCheck className="w-4 h-4 text-primary" />
                                    <span className="text-[9px] font-bold uppercase tracking-wider">Certified Care</span>
                                </div>
                            </div>
                        </div>

                        {/* --- DESKTOP LAYOUT (lg and above) --- */}
                        <div className="hidden lg:block relative w-full aspect-[5/6] max-w-[550px] ml-auto">
                            {/* Top-Right Image */}
                            <div className="absolute top-0 right-0 w-[82%] z-20" data-aos="zoom-in" data-aos-delay="200">
                                <div className="relative group">
                                    <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-primary rounded-tr-3xl z-20"></div>
                                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-b-[8px] border-primary translate-y-4 group-hover:translate-y-0 transition-all duration-700 aspect-[4/3]">
                                        <img
                                            src={images.about1}
                                            loading="lazy"
                                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                                            alt="Precision Detailing"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom-Left Image */}
                            <div className="absolute bottom-4 left-0 w-[82%] z-10" data-aos="zoom-in" data-aos-delay="400">
                                <div className="relative group">
                                    <div className="absolute -bottom-3 -left-6 w-12 h-12 border-b-2 border-l-2 border-secondary rounded-bl-3xl z-20"></div>
                                    <div className="rounded-[3rem] overflow-hidden shadow-3xl border-l-[8px] border-secondary -translate-x-4 group-hover:translate-x-0 transition-all duration-700 aspect-[4/3]">
                                        <img
                                            src={images.about2}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                                            alt="Elite Care"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Metadata Badge */}
                            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30" data-aos="fade-up" data-aos-delay="600">
                                <div className="bg-black/95 backdrop-blur-2xl text-white px-7 py-4 rounded-3xl shadow-3xl border border-white/20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                                            <ShieldCheck className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <span className="text-[8px] font-bold text-primary uppercase tracking-widest block mb-0.5">Quality Seal</span>
                                            <span className="text-[10px] font-bold uppercase tracking-tight">100% Certified Care</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-1/2 -left-20 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        </section>
    );
};

export default About;