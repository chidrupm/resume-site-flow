
import { useState, useEffect } from "react";
import { Menu, X, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" },
];

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Update active section based on scroll
      const sections = navItems.map((item) => item.id);
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveSection]);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold">
              <a href="#home" onClick={() => handleNavClick("home")} className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded">CM</span>
                <span>Chidrup M</span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={cn(
                      "relative px-1 py-2 transition-all",
                      activeSection === item.id
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile Navigation Toggle */}
            <button 
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-16">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col space-y-4 py-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={cn(
                      "block py-2 text-lg",
                      activeSection === item.id
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed right-6 bottom-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 z-30",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

export default Header;
