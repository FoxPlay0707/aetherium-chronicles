import { ExternalLink } from "lucide-react";
import telegramIcon from "@/assets/telegram-icon.png";
import youtubeIcon from "@/assets/youtube-icon.png";
import tiktokIcon from "@/assets/tiktok-icon.png";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Telegram канал",
      url: "https://t.me/Aetherium_server",
      icon: telegramIcon,
      description: "Новости и обновления сервера"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@aetherium_private?_t=ZM-8zrVpQs56Ro&_r=1",
      icon: tiktokIcon,
      description: "Короткие видео и моменты игры"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@aetherium_private?si=gG6vb288d1hmvfGQ",
      icon: youtubeIcon,
      description: "Полные записи и трейлеры"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold magic-text mb-6">
            Присоединяйтесь к сообществу
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Следите за новостями и общайтесь с другими игроками в наших социальных сетях
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="crystal-card p-8 text-center hover:scale-105 transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={social.icon} 
                  alt={`${social.name} icon`}
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center justify-center">
                {social.name}
                <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
              <p className="text-muted-foreground text-sm">
                {social.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;