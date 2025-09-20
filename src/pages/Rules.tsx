import { Shield, Users, Coins, UserCheck, FileText } from "lucide-react";
import Header from "@/components/layout/Header";

const Rules = () => {
  const rulesSections = [
    {
      id: 1,
      title: "Общие правила",
      icon: Shield,
      color: "text-primary",
      rules: [
        {
          id: "1.1",
          text: "Запрещены сторонние программы которые изменяют геймплей игры и текстур паки которые делают некоторые блоки прозрачными.",
          punishment: "бан 3 дня, если повторится то бан навсегда"
        },
        {
          id: "1.2", 
          text: "Оскорбления, дискриминация по религии, мировоззрению и прочее — строго запрещены.",
          punishment: "мут 3 часа"
        },
        {
          id: "1.3",
          text: "Не знание правил не освобождает от ответственности.",
          punishment: ""
        },
        {
          id: "1.4",
          text: "После 3/3 предупреждении выдает бан на 2 дня и за каждое повторное накапливание предупреждение будет добавляться +2 дня к бану",
          punishment: ""
        },
        {
          id: "1.5",
          text: "Снятие одного предупреждение через 3 недели",
          punishment: ""
        }
      ]
    },
    {
      id: 2,
      title: "Правила для геймплея",
      icon: Users,
      color: "text-secondary",
      rules: [
        {
          id: "2.1",
          text: "Можно создать клан, город и выбирать правителя. Но нельзя править общественными местами(главный остров энда, спавн до 350 блоков) без соглашение администраций и только при голосовании всех игроков сервера.",
          punishment: "предупреждение +1"
        },
        {
          id: "2.2",
          text: "Можно делать разные договоры между игроков и показывать их администрацию сервера, если игрок то что не сделает в написанном договоре, то администрация накажет так как подписаны в договоре. Договоры можно использовать например при: вступление клана, при долге и т.д. Но нужно иметь доказательство об договоре и нельзя разрушать договоры.",
          punishment: "условие договора"
        }
      ]
    },
    {
      id: 3,
      title: "Экономика и торговля",
      icon: Coins,
      color: "text-accent",
      rules: [
        {
          id: "3.1",
          text: "Торговля ресурсами разрешена, но только в рамках игрового процесса запрещено использования реальных денег).",
          punishment: "предупреждение +3, если повторно то бан навсегда"
        },
        {
          id: "3.2",
          text: "Мошенничество запрещено(не в виде игрового геймплея). Будьте честными в сделках и не пытайтесь обманывать других игроков.",
          punishment: "бан навсегда, компенсация пострадавшему"
        },
        {
          id: "3.3",
          text: "Можно создавать свою валюту и выбирать курс. Но нельзя обменивать внутри игровую валюту на настоящие.",
          punishment: "предупреждение +6"
        }
      ]
    },
    {
      id: 4,
      title: "Правила для администрации",
      icon: UserCheck,
      color: "text-primary",
      rules: [
        {
          id: "4.1",
          text: "Администрации запрещено изменять правила в свою пользу.",
          punishment: ""
        },
        {
          id: "4.2",
          text: "Использование команд, которые могут повлиять на геймплей, запрещено, если это не связано с багами или техническими проблемами. В случае багов нужно предоставить скриншоты как доказательство.",
          punishment: ""
        },
        {
          id: "4.3",
          text: "Если администрация будет играть на сервере как игрок он не имеет право шантажировать игроками об своих правах и власти. Еще будут временно убраны все команды админа включая /gm, /time и т.д.",
          punishment: ""
        },
        {
          id: "4.4",
          text: "Наказание для этого пункта(4) будет решено самой администрации не включая правонарушителя",
          punishment: ""
        }
      ]
    },
    {
      id: 5,
      title: "Правила анкет",
      icon: FileText,
      color: "text-secondary",
      rules: [
        {
          id: "5.1",
          text: "В обязательных пунктов анкеты должно указываться правильная, достоверная информация.",
          punishment: "отклонение анкеты"
        },
        {
          id: "5.2",
          text: "Если игрок будущий с принятой анкетой не зайдёт после открытие будущего сезона через 3 дня, то его анкета и место на сервере освобождается.",
          punishment: "отклонение анкеты"
        },
        {
          id: "5.3",
          text: "Нельзя игроку писать анкету за 2 или больше игрока и иметь 2 или больше аккаунтов на сервере.",
          punishment: "бан по айпи"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold magic-text mb-6">
              Правила сервера Aetherium
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Соблюдение правил обеспечивает комфортную игру для всех участников сервера
            </p>
          </div>

          {/* Rules Sections */}
          <div className="space-y-12">
            {rulesSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div key={section.id} className="crystal-card p-8">
                  <div className="flex items-center mb-8">
                    <IconComponent className={`w-8 h-8 ${section.color} mr-4`} />
                    <h2 className="text-3xl font-bold text-foreground">
                      {section.id}. {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    {section.rules.map((rule) => (
                      <div key={rule.id} className="border-l-2 border-primary/30 pl-6 py-2">
                        <div className="flex items-start mb-2">
                          <span className="font-semibold text-primary mr-2 min-w-[3rem]">
                            {rule.id}.
                          </span>
                          <p className="text-foreground leading-relaxed">
                            {rule.text}
                          </p>
                        </div>
                        {rule.punishment && (
                          <div className="ml-12">
                            <span className="text-sm font-medium text-destructive">
                              Наказание: {rule.punishment}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="crystal-card p-8 mt-12 text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Важная информация
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Незнание правил не освобождает от ответственности. 
              Все игроки обязаны ознакомиться с правилами перед началом игры на сервере.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rules;