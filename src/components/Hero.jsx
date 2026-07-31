import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Award,
  Microscope,
  Instagram,
  Linkedin,
  Facebook,
  Crosshair,
} from "lucide-react";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    setMouse({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1920&q=80"
          alt="Car Detailing"
          className="w-full h-full object-cover scale-110 transition-transform duration-[20s] ease-linear"
          style={{
            transform: `scale(1.1) translate(${mouse.x * -0.5}px, ${
              mouse.y * -0.5
            }px)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>

      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10 grid lg:grid-cols-12 items-center h-full pt-20">
        {/* Left Content */}
        <div className="lg:col-span-8 flex flex-col justify-center text-center lg:text-left">
          {/* Badge */}
          <div className="flex justify-center lg:justify-start mb-8">
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary font-bold uppercase text-[10px] tracking-[0.3em]">
                Premium Car Wash & Detailing – Chennai
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight uppercase mb-8">
            Precision Cleaning.
            <br />
            <span className="text-primary italic drop-shadow-[0_0_25px_rgba(255,103,0,0.5)]">
              Ultimate Protection.
            </span>
          </h1>

          {/* Description */}
          <p className="text-white max-w-xl text-sm sm:text-base lg:text-lg mb-10 mx-auto lg:mx-0">
            Sadarabaaji Car Wash SPA in Chennai offers professional detailing,
            deep interior cleaning, water wash, under chassis coating, and
            premium accessories installation with advanced technology.
          </p>

          {/* CTA */}
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative bg-primary text-white  hover:text-primary px-10 py-4 font-bold uppercase tracking-widest text-xs overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book Service
                <Crosshair className="w-4 h-4 animate-spin" />
              </span>
              <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>

            {/* Phone */}
            <div
              onClick={() => (window.location.href = "tel:09962411881")}
              className="flex items-center gap-4 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:border-primary transition">
                <Phone className="text-white group-hover:text-primary" />
              </div>
              <div>
                <p className="text-primary text-xs font-semibold uppercase">
                  Rapid Response
                </p>
                <p className="text-white text-xl font-bold">
                  099624 11881
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-6">
          <StatCard icon={<ShieldCheck />} title="9H" subtitle="Surface Protection" />
          <StatCard icon={<Award />} title="5.0" subtitle="Customer Rating" />
          <StatCard icon={<Microscope />} title="Advanced Nano" subtitle="Foam Tech" />
        </div>
      </div>

      {/* Social */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 items-center">
        <Instagram className="text-white/40 hover:text-primary cursor-pointer" />
        <Linkedin className="text-white/40 hover:text-primary cursor-pointer" />
        <Facebook className="text-white/40 hover:text-primary cursor-pointer" />
      </div>
    </section>
  );
}

function StatCard({ icon, title, subtitle }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 relative hover:border-primary/30 transition">
      <div className="absolute top-0 right-0 p-2 opacity-20">{icon}</div>
      <span className="text-primary font-bold text-3xl block mb-1">
        {title}
      </span>
      <span className="text-white text-xs uppercase tracking-widest">
        {subtitle}
      </span>
    </div>
  );
}
