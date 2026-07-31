import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";

// Lazy loading components to fix "Large Chunks" warning
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const BrandNetwork = lazy(() => import("./components/BrandNetwork"));
const Footer = lazy(() => import("./components/Footer"));

// Loading fallback component
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40">Sadarabaaji Loading...</p>
    </div>
  </div>
);

function App() {
  const servicesData = [
    { title: "Ceramic Coating", id: "ceramic" },
    { title: "Interior Detailing", id: "interior" },
    { title: "Water Wash", id: "wash" },
    { title: "Underbody Coating", id: "underbody" },
    { title: "Paint Correction", id: "paint" },
    { title: "Accessories", id: "acc" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar is usually small, so no need to lazy load it */}
      <Navbar scrollToSection={scrollToSection} />
      
      <Suspense fallback={<PageLoader />}>
        <Hero scrollToSection={scrollToSection} />
        <div id="about"><About /></div>
        <BrandNetwork />
        <div id="services"><Services services={servicesData} /></div>
        <div id="why-us"><WhyChooseUs /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="contact"><Contact services={servicesData} /></div>
        <Footer services={servicesData} scrollToSection={scrollToSection} />
      </Suspense>
    </div>
  );
}

export default App;