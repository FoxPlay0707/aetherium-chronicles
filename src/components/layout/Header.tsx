import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import aetheriumLogo from "@/assets/aetherium-logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 crystal-card backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <img 
              src={aetheriumLogo} 
              alt="Aetherium Server Logo" 
              className="h-10 w-auto animate-glow"
            />
            <span className="text-xl font-bold magic-text">AETHERIUM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Главная
            </Link>
            <Link 
              to="/rules" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Правила
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/rules" 
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Правила
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;