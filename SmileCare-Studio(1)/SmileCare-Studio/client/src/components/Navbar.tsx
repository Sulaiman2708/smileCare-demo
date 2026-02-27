import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass-nav py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-primary"
              >
                <path d="M12 2C7.03 2 3 6.03 3 11v2.5a3.5 3.5 0 0 0 3.5 3.5H12a3.5 3.5 0 0 0 3.5-3.5V11c0-4.97-4.03-9-9-9Z" />
                <path d="M14 13.5a2.5 2.5 0 0 0 5 0V11c0-2.4-1.2-4.5-3-5.8" />
                <path d="M12 18h.01" />
              </svg>
            </div>
            <span className={cn("text-2xl font-bold tracking-tight text-slate-900", scrolled ? "text-slate-900" : "text-slate-900 md:text-white lg:text-slate-900")}>
              SmileCare
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="rounded-full px-6 shadow-lg hover:shadow-primary/25 transition-all"
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl md:hidden flex flex-col p-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="py-3 text-left text-slate-600 font-medium hover:text-primary border-b border-slate-50 last:border-0"
              >
                {item.name}
              </button>
            ))}
            <Button className="mt-4 w-full" onClick={() => scrollToSection("#contact")}>
              <Phone className="mr-2 h-4 w-4" /> Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
