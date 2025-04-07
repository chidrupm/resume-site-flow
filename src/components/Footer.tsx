
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold flex items-center gap-2">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded">CM</span>
                <span>Chidrup M</span>
              </div>
              <p className="text-muted-foreground mt-2">Cloud Engineer & Software Developer</p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/M-Chidrup"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/chidrupm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:chidrupmadhu7@gmail.com"
                className="p-2 rounded-full bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <hr className="border-border my-6" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Chidrup M. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
