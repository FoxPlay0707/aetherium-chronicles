import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import aetheriumLogo from "@/assets/aetherium-logo.png";
import telegramIcon from "@/assets/telegram-icon.png";
import youtubeIcon from "@/assets/youtube-icon.png";
import tiktokIcon from "@/assets/tiktok-icon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const socialLinks = [
    {
      name: "Telegram",
      url: "https://t.me/Aetherium_server",
      icon: telegramIcon
    },
    {
      name: "TikTok", 
      url: "https://www.tiktok.com/@aetherium_private?_t=ZM-8zrVpQs56Ro&_r=1",
      icon: tiktokIcon
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@aetherium_private?si=gG6vb288d1hmvfGQ",
      icon: youtubeIcon
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 crystal-card border-0 border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
            <img 
              src={aetheriumLogo} 
              alt="Aetherium Logo" 
              className="h-12 w-auto animate-glow"
            />
            <span className="text-2xl font-bold magic-text hidden sm:block">
              AETHERIUM
            </span>
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
            <a 
              href="https://forms.gle/6DjRB2uywYb2P5C26"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button inline-flex items-center space-x-2"
            >
              <span>Подать заявку</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden crystal-button p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 animate-slide-down">
            <div className="crystal-card p-6 space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                Главная
              </Link>
              <Link 
                to="/rules" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                Правила сервера
              </Link>
              <a 
                href="https://forms.gle/6DjRB2uywYb2P5C26"
                target="_blank"
                rel="noopener noreferrer" 
                className="block gold-button text-center"
              >
                Подать заявку
              </a>
              
              {/* Social Links */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Наши социальные сети:</p>
                <div className="space-y-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-300 py-2"
                    >
                      <img 
                        src={social.icon} 
                        alt={`${social.name} icon`}
                        className="w-5 h-5"
                      />
                      <span>{social.name}</span>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </header>
  );
};

export default Header;