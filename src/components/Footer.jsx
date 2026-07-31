import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";
import Images from "../data/images";

export default function Footer() {
  const services = [
    "Interior Detailing",
    "Water Wash",
    "Under Chassis Coating",
    "Accessories Installation",
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToService = (index) => {
    scrollToSection("services");
    // optional: later you can auto focus specific service card
  };

  return (
    <footer className="bg-white text-black py-12 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle,black_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-20">

          {/* Brand Column */}
          <div className="space-y-6">
            <button
              onClick={() => scrollToSection("home")}
              className="group inline-block"
            >
              <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-black/10 group-hover:border-primary transition-all duration-500 shadow-2xl">
                <img
                  src={Images.logo}
                  loading="lazy"
                  alt="Sadarabaaji Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>

            <p className="text-gray-500 leading-relaxed text-sm font-semibold">
              Defining the future of premium car wash in Rajakilpakkam. We bring
              showroom excellence to your doorstep with precision, passion,
              advanced technology, and top-tier car cleaning Rajakilpakkam.
            </p>

            <div className="flex gap-4">
              <SocialIcon Icon={Instagram} href="https://www.instagram.com/gsscarmakeovers/" />
              <SocialIcon Icon={Facebook} href="https://www.facebook.com/profile.php?id=61580681324035" />
              <SocialIcon Icon={Youtube} href="https://www.youtube.com/@gsscarmakeovers" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <SectionTitle title="Quick Links" />
            <ul className="space-y-4 text-gray-500 text-sm">
              {[
                ["Home", "home"],
                ["About Us", "about"],
                ["Our Services", "services"],
                ["Why Us", "why-choose"],
                ["Reviews", "testimonials"],
                ["Contact Us", "contact"],
              ].map(([label, id], index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="hover:text-primary transition"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <SectionTitle title="Services" />
            <ul className="space-y-4 text-gray-500 text-sm">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => goToService(index)}
                    className="hover:text-primary transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <SectionTitle title="Quick Contact" />
            <p className="text-gray-500 text-sm font-semibold mb-6">
              Need a custom quote? Reach out directly.
            </p>

            <div className="space-y-4 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 99624 11881</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>sadarabaajidetailing@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-400 font-semibold uppercase tracking-widest">
          <p>
            © 2026 Sadarabaaji Private Limited.
          </p>

          <a href="https://ec4you.in/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
            Powered by <span className="text-primary">EC4You</span>
          </a>

          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Reusable Components */

function SectionTitle({ title }) {
  return (
    <h5 className="text-xs font-bold mb-8 relative inline-block uppercase tracking-widest">
      {title}
      <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary"></span>
    </h5>
  );
}

function SocialIcon({ Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-xl border border-black/10 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition duration-300"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}
