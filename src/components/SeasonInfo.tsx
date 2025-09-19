import { Calendar, Trophy, Users, Sparkles } from "lucide-react";

const SeasonInfo = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold magic-text mb-6">
            Сезонная система Aetherium
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Каждые 6 месяцев — новый сезон с уникальной темой, стилем и атмосферой
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Сезон */}
          <div className="crystal-card p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Calendar className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Сезон (6 месяцев)</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Основной мир с полным развитием
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Кланы и территории
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Уникальные ивенты и лор
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Своя тема и визуальный стиль
              </li>
            </ul>
          </div>

          {/* Межсезонье */}
          <div className="crystal-card p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-secondary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Межсезонье (1 месяц)</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Временное приключение для всех
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Новая уникальная идея каждый раз
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Мини-режимы, которых нигде нет
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Неповторяющиеся концепции
              </li>
            </ul>
          </div>
        </div>

        {/* Награды */}
        <div className="crystal-card p-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="w-10 h-10 text-secondary mr-3" />
            <h3 className="text-3xl font-bold magic-text">Награды и признание</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Users className="w-12 h-12 text-primary mx-auto" />
              <h4 className="text-xl font-semibold text-foreground">Участникам межсезоний</h4>
              <p className="text-muted-foreground">
                Редкие награды, титулы и предметы для использования в следующем сезоне
              </p>
            </div>
            <div className="space-y-4">
              <Trophy className="w-12 h-12 text-secondary mx-auto" />
              <h4 className="text-xl font-semibold text-foreground">Героям сервера</h4>
              <p className="text-muted-foreground">
                Самые активные игроки будут увековечены в истории Aetherium
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonInfo;