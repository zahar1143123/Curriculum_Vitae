import { useState } from "react";
import { MapPin } from "lucide-react";

type Lang = "ru" | "en";

const t = {
  ru: {
    name: "Рубаник Захар",
    title: "Младший fullstack разработчик",
    location: "Витебск, Беларусь",
    about: "Обо мне",
    aboutText:
      "Младший fullstack разработчик с годовым опытом работы в команде над учебными и реальными проектами. Параллельно выполнял заказы на фриланс-платформах Kwork и Fiverr: вёрстка, небольшие веб-приложения, автоматизация. Участник Яндекс Олимпиад по программированию. Стремлюсь писать чистый, поддерживаемый код и постоянно расширяю стек.",
    contacts: "Контакты",
    phone: "+375 (29) 897-12-55",
    email: "zaharrubanik2007@gmail.com",
    linkedin: "https://www.linkedin.com/in/zakhar-rubanik-13449b26a/",
    github: "https://github.com/zahar1143123",
    telegram: "https://t.me/CXZPEWQL",
    telegramHandle: "@CXZPEWQL",
    hobbies: "Хобби и интересы",
    hobbiesItems: [
      "Олимпиадное программирование",
      "Компьютерные игры",
    ],
    tabs: [
      "Образование",
      "Опыт работы",
      "Учебные курсы",
    ],
    education: [
      {
        year: "2025–2029",
        degree: "Бакалавр, Программная инженерия",
        institution:
          "ПГУ имени Ефросинии Полоцкой, факультет информационных технологий",
        description: "",
        tags: [
          "Проектирование программ",
          "Работа в команде",
          "Качественный и масштабируемый код",
        ],
      },
    ],
    experience: [
      {
        year: "2024–2025",
        role: "Фрилансер",
        company: "Kwork",
        description:
          "Выполнял заказы по вёрстке и разработке небольших веб-сайтов. Работа с клиентами, соблюдение дедлайнов, итерационные правки по техническому заданию.",
        tags: ["HTML/CSS", "JS", "React"],
      },
      {
        year: "2024–2025",
        role: "Фрилансер",
        company: "Fiverr",
        description:
          "Разработка лендингов и простых веб-приложений для зарубежных заказчиков. Переписка и постановка задач на английском языке.",
        tags: ["Node.js", "React", "Git"],
      },
      {
        year: "2025",
        role: "Участник",
        company: "Яндекс Олимпиады",
        description:
          "Участие в олимпиаде Яндекса по программированию. Решение алгоритмических задач на время, работа с различными структурами данных и классическими алгоритмами.",
        tags: ["Алгоритмы", "Python", "Структуры данных"],
      },
    ],
    courses: [
      {
        year: "2020–2021",
        title: "Python-программирование",
        provider: "Витебский дворец молодёжи",
        description:
          "Основы языка Python: синтаксис, управляющие конструкции, функции, работа с файлами и базовые алгоритмы.",
        cert: "Свидетельство",
      },
      {
        year: "2021–2022",
        title: "Веб-программирование",
        provider: "Витебский дворец молодёжи",
        description:
          "HTML, CSS, основы JavaScript. Создание адаптивных страниц, работа с формами и базовая клиентская логика.",
        cert: "Свидетельство",
      },
    ],
    skills: "Навыки",
  },
  en: {
    name: "Zakhar Rubanik",
    title: "Junior Fullstack Developer",
    location: "Vitebsk, Belarus",
    about: "About Me",
    aboutText:
      "Junior fullstack developer with a year of teamwork experience on academic and real-world projects. Simultaneously took freelance orders on Kwork and Fiverr: layouts, small web applications, automation. Participant in Yandex Programming Olympiads. I focus on writing clean, maintainable code and continuously expanding my stack.",
    contacts: "Contact",
    phone: "+375 (29) 897-12-55",
    email: "zaharrubanik2007@gmail.com",
    linkedin: "https://www.linkedin.com/in/zakhar-rubanik-13449b26a/",
    github: "https://github.com/zahar1143123",
    telegram: "https://t.me/CXZPEWQL",
    telegramHandle: "@CXZPEWQL",
    hobbies: "Hobbies & Interests",
    hobbiesItems: [
      "Competitive Programming",
      "PC Gaming",
    ],
    tabs: [
      "Education",
      "Work Experience",
      "Courses",
    ],
    education: [
      {
        year: "2025–2029",
        degree: "Bachelor, Software Engineering",
        institution:
          "PSU named after Euphrosyne of Polotsk, Faculty of Information Technologies",
        description: "",
        tags: [
          "Software Design",
          "Teamwork",
          "Clean & Scalable Code",
        ],
      },
    ],
    experience: [
      {
        year: "2024–2025",
        role: "Freelancer",
        company: "Kwork",
        description:
          "Completed orders for web layout and small website development. Client communication, deadline management, iterative revisions based on technical specs.",
        tags: ["HTML/CSS", "JS", "React"],
      },
      {
        year: "2024–2025",
        role: "Freelancer",
        company: "Fiverr",
        description:
          "Built landing pages and simple web apps for international clients. All task management and communication conducted in English.",
        tags: ["Node.js", "React", "Git"],
      },
      {
        year: "2025",
        role: "Participant",
        company: "Yandex Olympiads",
        description:
          "Competed in Yandex Programming Olympiad. Solved algorithmic problems under time constraints, working with data structures and classical algorithms.",
        tags: ["Algorithms", "Python", "Data Structures"],
      },
    ],
    courses: [
      {
        year: "2020–2021",
        title: "Python Programming",
        provider: "Vitebsk Youth Palace",
        description:
          "Python fundamentals: syntax, control flow, functions, file handling, and basic algorithms.",
        cert: "Certificate",
      },
      {
        year: "2021–2022",
        title: "Web Programming",
        provider: "Vitebsk Youth Palace",
        description:
          "HTML, CSS, JavaScript basics. Building responsive pages, working with forms and basic client-side logic.",
        cert: "Certificate",
      },
    ],
    skills: "Skills",
  },
};

const skillGroups = [
  {
    label: "Design",
    items: ["Figma", "Blender"],
  },
  {
    label: "Research",
    items: ["User Interviews", "Usability Testing", "Card Sorting", "Journey Mapping"],
  },
  {
    label: "Dev",
    items: ["HTML/CSS", "JS", "Node.js", "React", "Git", "Python", "Docker"],
  },
  {
    label: "Tools",
    items: ["Jira", "Notion", "Miro"],
  },
  {
    label: "Languages",
    items: ["Русский — родной", "English — B1"],
  },
];

const skillGroupsEn = [
  {
    label: "Design",
    items: ["Figma", "Blender"],
  },
  {
    label: "Research",
    items: ["User Interviews", "Usability Testing", "Card Sorting", "Journey Mapping"],
  },
  {
    label: "Dev",
    items: ["HTML/CSS", "JS", "Node.js", "React", "Git", "Python", "Docker"],
  },
  {
    label: "Tools",
    items: ["Jira", "Notion", "Miro"],
  },
  {
    label: "Languages",
    items: ["Russian — Native", "English — B1"],
  },
];

export default function App() {
  const [lang, setLang] = useState<Lang>("ru");
  const [activeTab, setActiveTab] = useState(0);
  const data = t[lang];
  const groups = lang === "ru" ? skillGroups : skillGroupsEn;

  return (
    <div
      className="min-h-screen bg-background font-sans"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Language toggle */}
      <div className="fixed top-4 right-6 z-50 flex items-center gap-1 bg-primary/90 backdrop-blur-sm rounded-full px-1 py-1 shadow-lg">
        {(["ru", "en"] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => { setLang(l); setActiveTab(0); }}
            className={`px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-200 ${
              lang === l
                ? "bg-accent text-accent-foreground shadow-sm"
                : "text-primary-foreground/60 hover:text-primary-foreground"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="flex min-h-screen lg:flex-row flex-col">
        {/* ── Sidebar ─────────────────────────────────────────── */}
        <aside className="lg:w-[300px] xl:w-[320px] lg:flex-shrink-0 bg-primary text-primary-foreground flex flex-col">

          {/* ── Mobile / tablet header (<lg) ── */}
          <div className="lg:hidden px-6 py-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 ring-1 ring-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <span className="text-base font-semibold text-primary-foreground/70 select-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {data.name.split(" ").slice(0, 2).map((w: string) => w[0]).join("")}
                </span>
              </div>
              <div>
                <h1 className="text-base font-semibold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  {data.name}
                </h1>
                <p className="text-accent text-xs mt-0.5 font-medium">{data.title}</p>
                <div className="flex items-center gap-1 mt-1 text-primary-foreground/45 text-xs">
                  <MapPin className="w-3 h-3" />{data.location}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 mb-5">
              {[
                { label: "Tel", href: `tel:${data.phone.replace(/\s/g, "")}`, value: data.phone },
                { label: "Email", href: `mailto:${data.email}`, value: data.email },
                { label: "Telegram", href: "https://t.me/CXZPEWQL", value: "t.me/CXZPEWQL" },
                { label: "LinkedIn", href: data.linkedin, value: "linkedin.com/in/zakhar-rubanik-13449b26a" },
                { label: "GitHub", href: data.github, value: "github.com/zahar1143123" },
              ].map(({ label, href, value }) => (
                <a key={label} href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  title={value}
                  className="group flex flex-col gap-0.5 min-w-0">
                  <span className="text-[9px] uppercase tracking-[0.12em] text-primary-foreground/30 group-hover:text-accent/60 transition-colors"
                    style={{ fontFamily: "'DM Mono', monospace" }}>{label}</span>
                  <span className="text-xs text-primary-foreground/70 group-hover:text-accent transition-colors truncate">{value}</span>
                </a>
              ))}
            </div>

            <div className="h-px bg-primary-foreground/10 mb-5" />

            {/* Hobbies + Skills compact row */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-[0.12em] text-primary-foreground/30 mb-2"
                  style={{ fontFamily: "'DM Mono', monospace" }}>{data.hobbies}</p>
                <div className="flex flex-wrap gap-1.5">
                  {data.hobbiesItems.map((label: string) => (
                    <span key={label} className="bg-primary-foreground/8 rounded px-2 py-1 text-xs text-primary-foreground/65 whitespace-nowrap">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[9px] uppercase tracking-[0.12em] text-primary-foreground/30 mb-2"
                  style={{ fontFamily: "'DM Mono', monospace" }}>{data.skills}</p>
                <div className="flex flex-col gap-2">
                  {groups.map((group) => (
                    <div key={group.label}>
                      <p className="text-[9px] text-accent/70 mb-1 font-medium">{group.label}</p>
                      <div className="flex flex-wrap gap-1">
                        {group.items.map((skill) => (
                          <span key={skill} className="text-xs bg-primary-foreground/8 text-primary-foreground/60 px-2 py-0.5 rounded whitespace-nowrap">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Desktop sidebar (lg+) ── */}
          <div className="hidden lg:flex flex-col gap-7 p-7 sticky top-0 min-h-screen">
            {/* Monogram */}
            <div className="flex flex-col items-center gap-4 pt-8">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/10 ring-1 ring-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <span
                  className="text-2xl font-semibold text-primary-foreground/70 tracking-wide select-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {data.name.split(" ").slice(0, 2).map((w: string) => w[0]).join("")}
                </span>
              </div>
              <div className="text-center">
                <h1
                  className="text-lg font-semibold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {data.name}
                </h1>
                <p className="text-accent text-sm mt-1 font-medium tracking-wide">
                  {data.title}
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-2 text-primary-foreground/50 text-xs">
                  <MapPin className="w-3 h-3" />
                  {data.location}
                </div>
              </div>
            </div>

            <div className="h-px bg-primary-foreground/10" />

            {/* Contact */}
            <div>
              <h2
                className="text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-4"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {data.contacts}
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Tel", href: `tel:${data.phone.replace(/\s/g, "")}`, value: data.phone },
                  { label: "Email", href: `mailto:${data.email}`, value: data.email },
                  { label: "Telegram", href: "https://t.me/CXZPEWQL", value: "t.me/CXZPEWQL" },
                  { label: "LinkedIn", href: data.linkedin, value: "linkedin.com/in/zakhar-rubanik-13449b26a" },
                  { label: "GitHub", href: data.github, value: "github.com/zahar1143123" },
                ].map(({ label, href, value }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    title={value}
                    className="group flex flex-col gap-0.5 min-w-0"
                  >
                    <span
                      className="text-[10px] uppercase tracking-[0.12em] text-primary-foreground/30 group-hover:text-accent/60 transition-colors"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {label}
                    </span>
                    <span className="text-sm text-primary-foreground/70 group-hover:text-accent transition-colors truncate">
                      {value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="h-px bg-primary-foreground/10" />

            {/* Hobbies */}
            <div>
              <h2
                className="text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-4"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {data.hobbies}
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.hobbiesItems.map((label: string) => (
                  <span
                    key={label}
                    className="bg-primary-foreground/8 rounded px-2.5 py-1.5 text-xs text-primary-foreground/65 whitespace-nowrap"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-primary-foreground/10" />

            {/* Skills */}
            <div className="pb-8">
              <h2
                className="text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-4"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {data.skills}
              </h2>
              <div className="flex flex-col gap-3">
                {groups.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs text-accent/80 mb-1.5 font-medium">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-primary-foreground/8 text-primary-foreground/60 px-2 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main Content ─────────────────────────────────────── */}
        <main className="flex-1 flex flex-col bg-background">
          {/* About */}
          <div className="px-10 py-10 border-b border-border bg-card">
            <div className="max-w-3xl">
              <h2
                className="text-2xl font-semibold text-foreground mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {data.about}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-2xl">
                {data.aboutText}
              </p>
            </div>
          </div>

          {/* Tab bar */}
          <div className="px-10 border-b border-border bg-card sticky top-0 z-40 overflow-x-auto">
            <div className="flex gap-0 min-w-max">
              {data.tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-5 py-4 text-sm font-medium border-b-2 transition-all duration-150 whitespace-nowrap ${
                    activeTab === i
                      ? "border-accent text-accent"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="flex-1 px-10 py-10">
            <div className="max-w-3xl">

              {/* Education */}
              {activeTab === 0 && (
                <div className="flex flex-col gap-8">
                  {data.education.map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center pt-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                        {i < data.education.length - 1 && (
                          <div className="w-px flex-1 bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-2">
                        <span
                          className="text-xs text-accent font-medium tracking-wide"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          {item.year}
                        </span>
                        <h3
                          className="text-lg font-semibold text-foreground mt-1"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {item.degree}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground mt-0.5">
                          {item.institution}
                        </p>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Work Experience */}
              {activeTab === 1 && (
                <div className="flex flex-col gap-8">
                  {data.experience.map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center pt-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                        {i < data.experience.length - 1 && (
                          <div className="w-px flex-1 bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-2">
                        <span
                          className="text-xs text-accent font-medium tracking-wide"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          {item.year}
                        </span>
                        <div className="flex items-baseline gap-2 mt-1 flex-wrap">
                          <h3
                            className="text-lg font-semibold text-foreground"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {item.role}
                          </h3>
                          <span className="text-muted-foreground/40 text-sm">·</span>
                          <span className="text-sm font-semibold text-accent">
                            {item.company}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Courses */}
              {activeTab === 2 && (
                <div className="grid sm:grid-cols-2 gap-5">
                  {data.courses.map((item, i) => (
                    <div
                      key={i}
                      className="bg-card rounded-xl border border-border p-5 flex flex-col gap-3 hover:border-accent/40 hover:shadow-sm transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span
                          className="text-xs text-accent font-medium"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          {item.year}
                        </span>
                        <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                          {item.cert}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                          {item.provider}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* Footer */}
          <div className="px-10 py-5 border-t border-border">
            <p
              className="text-xs text-muted-foreground/50"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              © {new Date().getFullYear()} — {data.name}
            </p>
          </div>
        </main>
      </div>

      <style>{`
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(26,41,66,0.15); border-radius: 99px; }
        *:hover::-webkit-scrollbar-thumb { background: rgba(26,41,66,0.3); }
      `}</style>
    </div>
  );
}
