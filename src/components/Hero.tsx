import { ExternalLink, Users, Calendar } from "lucide-react";
import aetheriumLogo from "@/assets/aetherium-logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particles absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={aetheriumLogo} 
              alt="Aetherium Server Logo" 
              className="h-32 md:h-48 w-auto mx-auto animate-glow"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold magic-text mb-6">
            AETHERIUM
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Приватный сервер Minecraft с уникальной сезонной системой
          </p>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="crystal-card p-6 hover:scale-105 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Сезонная система</h3>
              <p className="text-sm text-muted-foreground">6 месяцев игры + 1 месяц межсезонья</p>
            </div>
            <div className="crystal-card p-6 hover:scale-105 transition-transform duration-300">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Кланы и города</h3>
              <p className="text-sm text-muted-foreground">Создавайте альянсы и стройте империи</p>
            </div>
            <div className="crystal-card p-6 hover:scale-105 transition-transform duration-300">
              <ExternalLink className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Уникальные ивенты</h3>
              <p className="text-sm text-muted-foreground">Эксклюзивные приключения каждый сезон</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://forms.gle/6DjRB2uywYb2P5C26"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Подать заявку на сервер</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href="https://t.me/Aetherium_server"
              target="_blank"
              rel="noopener noreferrer"
              className="crystal-button inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>📱</span>
              <span>Telegram канал</span>
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Для входа на сервер необходимо заполнить анкету и дождаться одобрения
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;