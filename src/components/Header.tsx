
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-4 glass border-b border-border/40 glass-dark"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 group animate-in"
          style={{ "--index": 0 } as React.CSSProperties}
        >
          <div className="relative size-8 rounded-lg bg-primary/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 opacity-80"></div>
            <span className="relative font-bold text-primary-foreground">SB</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Shop<span className="text-primary">Buttons</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 animate-in" style={{ "--index": 1 } as React.CSSProperties}>
          <Link
            to="/"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/")
                ? "text-primary font-semibold"
                : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
            }`}
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  location.pathname.includes("/buttons")
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                }`}
              >
                Buttons <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/buttons/plain" className="w-full cursor-pointer">
                  Plain Buttons
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/buttons/colorful" className="w-full cursor-pointer">
                  Colorful Buttons
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/buttons/animated" className="w-full cursor-pointer">
                  Animated Buttons
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/buttons/neon" className="w-full cursor-pointer">
                  Neon Buttons
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            to="/documentation"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/documentation")
                ? "text-primary font-semibold"
                : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
            }`}
          >
            Documentation
          </Link>
        </nav>

        <div className="flex items-center space-x-3 animate-in" style={{ "--index": 2 } as React.CSSProperties}>
          <ThemeToggle />
          <Button
            variant="ghost"
            className="md:hidden"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transform ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } transition-all duration-300 ease-in-out pt-20 glass glass-dark md:hidden`}
      >
        <nav className="flex flex-col items-center p-4 space-y-4">
          <Link
            to="/"
            className={`w-full px-4 py-3 rounded-md text-center font-medium transition-colors ${
              isActive("/")
                ? "bg-primary/10 text-primary font-semibold"
                : "hover:bg-accent/50"
            }`}
          >
            Home
          </Link>
          <Link
            to="/buttons"
            className={`w-full px-4 py-3 rounded-md text-center font-medium transition-colors ${
              location.pathname.includes("/buttons")
                ? "bg-primary/10 text-primary font-semibold"
                : "hover:bg-accent/50"
            }`}
          >
            All Buttons
          </Link>
          <Link
            to="/buttons/plain"
            className="w-full px-4 py-3 rounded-md text-center font-medium transition-colors hover:bg-accent/50 pl-8"
          >
            Plain Buttons
          </Link>
          <Link
            to="/buttons/colorful"
            className="w-full px-4 py-3 rounded-md text-center font-medium transition-colors hover:bg-accent/50 pl-8"
          >
            Colorful Buttons
          </Link>
          <Link
            to="/buttons/animated"
            className="w-full px-4 py-3 rounded-md text-center font-medium transition-colors hover:bg-accent/50 pl-8"
          >
            Animated Buttons
          </Link>
          <Link
            to="/buttons/neon"
            className="w-full px-4 py-3 rounded-md text-center font-medium transition-colors hover:bg-accent/50 pl-8"
          >
            Neon Buttons
          </Link>
          <Link
            to="/documentation"
            className={`w-full px-4 py-3 rounded-md text-center font-medium transition-colors ${
              isActive("/documentation")
                ? "bg-primary/10 text-primary font-semibold"
                : "hover:bg-accent/50"
            }`}
          >
            Documentation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
