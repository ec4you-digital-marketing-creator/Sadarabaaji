import React, { useState, useEffect } from 'react';
import { 
  Terminal, CheckCircle2, ChevronDown, MessageCircle, 
  Mail, ArrowRight, Clock, MapPin, Phone, CheckCircle 
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = ({ services = [] }) => {
    // State to handle form data
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        vehicle: '',
        service: '',
        requirements: ''
    });
    
    // State for custom dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Helper to format message for WhatsApp and Email
    const getFormattedMessage = () => {
        return `*New Booking Request*%0A%0A` +
               `*Name:* ${formData.name}%0A` +
               `*Phone:* ${formData.phone}%0A` +
               `*Vehicle:* ${formData.vehicle}%0A` +
               `*Service:* ${formData.service}%0A` +
               `*Requirements:* ${formData.requirements}`;
    };

    const submitWhatsApp = () => {
        const phone = '919962411881';
        window.open(`https://wa.me/${phone}?text=${getFormattedMessage()}`, '_blank');
    };

    const submitEmail = () => {
        const email = 'gsscarmakeovers@gmail.com';
        const subject = encodeURIComponent('Professional Car Wash Booking Request');
        const body = getFormattedMessage().replace(/%0A/g, '\n').replace(/\*/g, '');
        window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="py-12 bg-white relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Group */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-primary/30"></div>
                        <span className="text-primary font-bold uppercase text-[10px] tracking-[0.5em]">Request a Service</span>
                        <div className="w-12 h-[1px] bg-primary/30"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary tracking-tight leading-[1.1] uppercase">
                        Book Professional <span className="text-primary">Car Wash</span> <br className="hidden lg:block" /> & Detailing Service Today
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                        
                        {/* Left: Booking Form */}
                        <div className="lg:col-span-8 bg-white p-6 sm:p-10 md:p-14 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-black/5" data-aos="fade-right">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                                <div className="flex items-center gap-3 opacity-40">
                                    <Terminal className="w-4 h-4 text-secondary" />
                                    <span className="text-[9px] font-bold text-secondary uppercase tracking-[0.4em]">Protocol: Booking_System</span>
                                </div>
                                <div className="hidden sm:flex flex-wrap gap-x-6 gap-y-2">
                                    {["Quick Confirmation", "Same-Day Service"].map((text) => (
                                        <div key={text} className="flex items-center gap-2 text-[10px] font-bold uppercase text-secondary/60">
                                            <CheckCircle2 className="w-3 h-3 text-primary" />
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {/* Name Input */}
                                    <div className="space-y-4">
                                        <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1 opacity-60">Full Name *</label>
                                        <input 
                                            type="text" 
                                            placeholder="Your Full Name"
                                            className="w-full bg-gray-50/50 border border-black/5 rounded-[1.5rem] py-5 px-8 text-sm font-semibold focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all outline-none"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    {/* Phone Input */}
                                    <div className="space-y-4">
                                        <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1 opacity-60">Phone Number *</label>
                                        <input 
                                            type="tel" 
                                            placeholder="+91 00000 00000"
                                            className="w-full bg-gray-50/50 border border-black/5 rounded-[1.5rem] py-5 px-8 text-sm font-semibold focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all outline-none"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
                                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[80%] bg-black/5"></div>
                                    {/* Vehicle Segment */}
                                    <div className="space-y-4">
                                        <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1 opacity-60">Vehicle Segment *</label>
                                        <input 
                                            type="text" 
                                            placeholder="e.g. Sedan, SUV, Luxury"
                                            className="w-full bg-gray-50/50 border border-black/5 rounded-[1.5rem] py-5 px-8 text-sm font-semibold focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all outline-none"
                                            value={formData.vehicle}
                                            onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                                        />
                                    </div>
                                    {/* Service Custom Dropdown */}
                                    <div className="space-y-4 relative">
                                        <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1 opacity-60">Requested Service *</label>
                                        
                                        <div className="relative">
                                            {/* Dropdown Button */}
                                            <button
                                                type="button"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className={`w-full flex items-center justify-between bg-gray-50/50 border ${isDropdownOpen ? 'border-primary ring-8 ring-primary/5 bg-white' : 'border-black/5'} rounded-[1.5rem] py-5 px-8 text-sm font-semibold transition-all outline-none text-left`}
                                            >
                                                <span className={formData.service ? 'text-secondary' : 'text-gray-400'}>
                                                    {formData.service || "Choose a Service"}
                                                </span>
                                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                                            </button>

                                            {/* Dropdown Menu */}
                                            {isDropdownOpen && (
                                                <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-black/5 rounded-[1.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                                    <div className="max-h-[280px] overflow-y-auto python-scroll py-2">
                                                        {services.map((s, i) => (
                                                            <button
                                                                key={i}
                                                                type="button"
                                                                onClick={() => {
                                                                    setFormData({...formData, service: s.title});
                                                                    setIsDropdownOpen(false);
                                                                }}
                                                                className={`w-full text-left px-8 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                                                                    formData.service === s.title 
                                                                    ? 'bg-primary/5 text-primary' 
                                                                    : 'text-secondary hover:bg-gray-50 hover:text-primary'
                                                                }`}
                                                            >
                                                                {s.title}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Requirements Textarea */}
                                <div className="space-y-4">
                                    <label className="text-xs font-bold text-secondary uppercase tracking-widest ml-1 opacity-60">Additional Requirements</label>
                                    <textarea 
                                        rows="4" 
                                        placeholder="Any specific requirements or preferred timing.."
                                        className="w-full bg-gray-50/50 border border-black/5 rounded-[2rem] py-5 px-8 text-sm font-semibold focus:bg-white focus:border-primary transition-all outline-none resize-none"
                                        value={formData.requirements}
                                        onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                                    ></textarea>
                                </div>

                                {/* Action Buttons */}
                                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <button onClick={submitWhatsApp} className="group relative flex items-center justify-between bg-[#25D366] text-white px-8 py-6 rounded-3xl font-bold uppercase tracking-[0.15em] text-[10px] overflow-hidden shadow-2xl transition-all hover:translate-y-[-2px] active:scale-95">
                                        <div className="flex items-center gap-3 relative z-10">
                                            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            <span>Chat on WhatsApp</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center relative z-10">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </button>

                                    <button onClick={submitEmail} className="group relative flex items-center justify-between bg-primary text-white px-8 py-6 rounded-3xl font-bold uppercase tracking-[0.15em] text-[10px] overflow-hidden shadow-2xl transition-all hover:translate-y-[-2px] active:scale-95">
                                        <div className="flex items-center gap-3 relative z-10">
                                            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            <span>Request via Email</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center relative z-10">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right: Details Hub */}
                        <div className="lg:col-span-4 flex flex-col gap-8">
                            {/* Timings Card */}
                            <div className="bg-secondary rounded-[3rem] p-10 text-white relative overflow-hidden shadow-3xl" data-aos="fade-left">
                                <div className="relative z-10">
                                    <h5 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-8 flex items-center gap-3">
                                        <Clock className="w-5 h-5" /> Service Timings
                                    </h5>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center bg-white/5 p-5 rounded-2xl border border-white/5">
                                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Working Days</span>
                                            <span className="text-sm font-bold">Mon – Sat</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/5 p-5 rounded-2xl border border-white/5">
                                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Timings</span>
                                            <span className="text-sm font-bold text-primary">9:00 AM – 7:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-[#fdfdfd] rounded-[2.5rem] p-8 md:p-10 border border-black/[0.04] flex-1 shadow-[0_4px_24px_rgba(0,0,0,0.01)]" data-aos="fade-left" data-aos-delay="200">
                                <div className="flex flex-col">
                                    <div className="flex items-start gap-6 pb-8">
                                        <div className="w-[42px] h-[42px] rounded-xl bg-[#ffebdf] flex items-center justify-center text-[#ff6600] shrink-0">
                                            <MapPin className="w-[20px] h-[20px] stroke-[2]" />
                                        </div>
                                        <div className="pt-1.5">
                                            <h4 className="text-[15px] font-black text-[#111] uppercase tracking-[0.02em] mb-3 leading-none">Sadarabaaji Chennai</h4>
                                            <p className="text-[14px] font-semibold text-gray-500 leading-[1.6] pr-2">258/189, Velachery Main Rd,<br />Kamarajapuram, Sembakkam,<br />Chennai - 600073</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 py-8 border-t border-black/5">
                                        <div className="w-[42px] h-[42px] rounded-xl bg-[#1c1c1c] text-white flex items-center justify-center shrink-0">
                                            <Phone className="w-[20px] h-[20px] stroke-[2]" />
                                        </div>
                                        <span className="text-[16px] font-extrabold text-[#111]">+91 99624 11881</span>
                                    </div>
                                    <div className="flex items-center gap-6 pt-8 border-t border-black/5">
                                        <div className="w-[42px] h-[42px] rounded-xl bg-[#1c1c1c] text-white flex items-center justify-center shrink-0">
                                            <Mail className="w-[20px] h-[20px] stroke-[2]" />
                                        </div>
                                        <span className="text-[14px] font-extrabold text-[#111] break-all">sadarabaajidetailing@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Wide Map Hub */}
                    <div className="lg:col-span-12 p-2 md:p-3 bg-secondary/5 rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden shadow-4xl h-[300px] md:h-[450px] border border-black/5">
                        <div className="w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-200">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.780151616938!2d80.15549970000001!3d12.921847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f2b227ccfa7%3A0x391155730ae6993d!2sSadarabaaji%20Car%20Detailing%20%26%20Car%20Wash!5e0!3m2!1sen!2sin!4v1773407885933!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                title="Sadarabaaji Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
