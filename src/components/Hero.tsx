
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[100vh] flex flex-col justify-center relative bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-primary">Chidrup M</span>
            <span className="block mt-3">Certified Azure Professional</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Cloud Engineer & Software Developer
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button 
              variant="default" 
              size="lg"
              className="text-lg"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Me
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg"
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Projects
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-8 text-muted-foreground">
            <a 
              href="mailto:chidrupmadhu7@gmail.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              chidrupmadhu7@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/M-Chidrup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              linkedin.com/in/M-Chidrup
            </a>
            <a 
              href="https://github.com/chidrupm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              github.com/chidrupm
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-primary p-2 rounded-full transition-colors hover:text-primary/80"
          aria-label="Scroll down"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
