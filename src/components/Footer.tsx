
import { Link } from "react-router-dom";
import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative size-6 rounded-lg bg-primary/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 opacity-80"></div>
                <span className="relative font-bold text-primary-foreground text-xs">SB</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                Shop<span className="text-primary">Buttons</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A premium collection of stylish, reusable buttons for modern web applications using ReactJs.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Site Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/buttons" className="text-sm hover:text-primary transition-colors">
                Buttons
              </Link>
              <Link to="/documentation" className="text-sm hover:text-primary transition-colors">
                Documentation
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:sathishjeevan2004@gmail.com"
                className="flex items-center text-sm hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                sathishjeevan2004@gmail.com
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ShopButtons. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:sathishjeevan2004@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
