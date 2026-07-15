import { useState } from "react";

type Lang = "ru" | "en";

const t = {
  ru: {
    name: "Рубаник Захар",
    title: "Младший fullstack разработчик",
    location: "Витебск, Беларусь",
    about: "Обо мне",
    aboutText:
      "Младший fullstack разработчик (JavaScript, TypeScript, React, Node.js, Python) с опытом коммерческой разработки на фриланс-платформах и участия в олимпиадах по программированию. За последний год реализовал 5+ веб-проектов для зарубежных заказчиков: от лендингов до интернет-магазинов с полным циклом клиент–сервер. Финалист областной олимпиады по созданию приложений, участник Яндекс Олимпиады. Ориентирован на написание чистого, масштабируемого кода и быстрое освоение новых технологий.",
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
      "Генерация идей",
    ],
    qualities: "Личностные качества",
    qualitiesItems: [
      "Системное мышление",
      "Креативное моделирование",
      "Рефлексия и рост",
    ],
    tabs: [
      "Образование",
      "Опыт работы",
      "Учебные курсы",
    ],
    education: [
      {
        year: "2025 — н.в.",
        degree: "Бакалавр, Программная инженерия",
        institution:
          "ПГУ имени Ефросинии Полоцкой, факультет информационных технологий",
        description: "",
        tags: [
          "Алгоритмы и структуры данных",
          "Объектно-ориентированное программирование",
          "Базы данных",
          "Операционные системы",
        ],
      },
    ],
    experience: [
      {
        year: "2024–2025",
        role: "Фрилансер",
        company: "Fiverr",
        description:
          "Разработал 5+ адаптивных веб-сайтов и интернет-магазинов (React, Node.js) для зарубежных заказчиков: реализовал архитектуру каталога товаров, корзины и чекаута. Вся коммуникация и постановка задач — на английском языке.",
        tags: ["React", "Node.js", "Git", "HTML/CSS"],
      },
      {
        year: "2024–2025",
        role: "Фрилансер",
        company: "Kwork",
        description:
          "Выполнил 10+ заказов по вёрстке и разработке веб-сайтов (HTML/CSS, JS, React), соблюдая дедлайны и проводя итерационные правки. Получил повторные заказы от 3 клиентов благодаря качеству кода и срокам сдачи.",
        tags: ["HTML/CSS", "JS", "React"],
      },
      {
        year: "2025",
        role: "Участник",
        company: "Яндекс Олимпиада по программированию",
        description:
          "Решил задачи повышенной сложности на Python за ограниченное время, применяя алгоритмы сортировки, графы и динамическое программирование. Подтверждён диплом по информатике.",
        tags: ["Python", "Алгоритмы", "Структуры данных"],
      },
      {
        year: "2023–2024",
        role: "Финалист",
        company: "Олимпиада Витебской области по созданию приложений",
        description:
          "Прошёл в финал областной олимпиады по разработке приложений, разработав проект на Python с версионированием через Git. По итогам финала получил диплом III степени.",
        tags: ["Python", "Git"],
      },
    ],
    courses: [
      {
        year: "2020–2021",
        title: "Python-программирование",
        provider: "Витебский дворец молодёжи",
        description:
          "Основы языка Python: синтаксис, управляющие конструкции, функции, работа с файлами и базовые алгоритмы.",
      },
      {
        year: "2021–2022",
        title: "Веб-программирование",
        provider: "Витебский дворец молодёжи",
        description:
          "HTML, CSS, основы JavaScript. Создание адаптивных страниц, работа с формами и базовая клиентская логика.",
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
      "Junior fullstack developer (JavaScript, TypeScript, React, Node.js, Python) with commercial experience on freelance platforms and competitive programming. Delivered 5+ web projects for international clients over the past year, including e-commerce stores with full client–server architecture. Regional olympiad finalist, Yandex Olympiad participant. Focused on clean, scalable code and rapid adoption of new technologies.",
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
      "Idea Generation",
    ],
    qualities: "Personal Qualities",
    qualitiesItems: [
      "Systems Thinking",
      "Creative Modelling",
      "Reflection & Growth",
    ],
    tabs: [
      "Education",
      "Work Experience",
      "Courses",
    ],
    education: [
      {
        year: "2025 — present",
        degree: "Bachelor, Software Engineering",
        institution:
          "PSU named after Euphrosyne of Polotsk, Faculty of Information Technologies",
        description: "",
        tags: [
          "Algorithms & Data Structures",
          "Object-Oriented Programming",
          "Databases",
          "Operating Systems",
        ],
      },
    ],
    experience: [
      {
        year: "2024–2025",
        role: "Freelancer",
        company: "Fiverr",
        description:
          "Delivered 5+ responsive websites and e-commerce stores (React, Node.js) for international clients, implementing product catalogue, shopping cart, and checkout architecture. All project management and communication in English.",
        tags: ["React", "Node.js", "Git", "HTML/CSS"],
      },
      {
        year: "2024–2025",
        role: "Freelancer",
        company: "Kwork",
        description:
          "Completed 10+ web layout and development orders (HTML/CSS, JS, React), consistently meeting deadlines and delivering iterative revisions. Earned repeat business from 3 clients based on code quality and turnaround time.",
        tags: ["HTML/CSS", "JS", "React"],
      },
      {
        year: "2025",
        role: "Participant",
        company: "Yandex Programming Olympiad",
        description:
          "Solved advanced algorithmic problems in Python under time constraints — sorting, graphs, dynamic programming. Confirmed proficiency in complex data structures. Received a Computer Science diploma.",
        tags: ["Python", "Algorithms", "Data Structures"],
      },
      {
        year: "2023–2024",
        role: "Finalist",
        company: "Vitebsk Region App Development Olympiad",
        description:
          "Reached the final round of the regional application development olympiad, building a project in Python with Git-based version control. Awarded a 3rd Degree Diploma.",
        tags: ["Python", "Git"],
      },
    ],
    courses: [
      {
        year: "2020–2021",
        title: "Python Programming",
        provider: "Vitebsk Youth Palace",
        description:
          "Python fundamentals: syntax, control flow, functions, file handling, and basic algorithms.",
      },
      {
        year: "2021–2022",
        title: "Web Programming",
        provider: "Vitebsk Youth Palace",
        description:
          "HTML, CSS, JavaScript basics. Building responsive pages, working with forms and basic client-side logic.",
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
    items: ["HTML/CSS", "JS", "TS", "Node.js", "React", "Next.js", "Git", "Python", "C++", "Docker"],
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
    items: ["HTML/CSS", "JS", "TS", "Node.js", "React", "Next.js", "Git", "Python", "C++", "Docker"],
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
            onClick={() => setLang(l)}
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
                <p className="mt-1 text-primary-foreground/45 text-xs">{data.location}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 mb-5">
              {[
                { label: "Tel", href: `tel:${data.phone.replace(/\s/g, "")}`, value: data.phone },
                { label: "Email", href: `mailto:${data.email}`, value: data.email },
                { label: "Telegram", href: "https://t.me/CXZPEWQL", value: "t.me/CXZPEWQL" },
                { label: "LinkedIn", href: data.linkedin, value: "linkedin.com/in/zakhar-rubanik-13449b26a" },
                { label: "GitHub", href: data.github, value: "github.com/zahar1143123" },
                { label: "LeetCode", href: "https://leetcode.com/u/zaharrubanik2007/", value: "leetcode.com/u/zaharrubanik2007" },
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

            {/* Hobbies + Qualities + Skills */}
            <div className="flex flex-col gap-5">
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
              <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-[0.12em] text-primary-foreground/30 mb-2"
                  style={{ fontFamily: "'DM Mono', monospace" }}>{data.qualities}</p>
                <div className="flex flex-wrap gap-1.5">
                  {data.qualitiesItems.map((label: string) => (
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
                <p className="mt-2 text-primary-foreground/50 text-xs">{data.location}</p>
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
                { label: "LeetCode", href: "https://leetcode.com/u/zaharrubanik2007/", value: "leetcode.com/u/zaharrubanik2007" },
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

            {/* Qualities */}
            <div>
              <h2
                className="text-xs uppercase tracking-[0.15em] text-primary-foreground/40 mb-4"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {data.qualities}
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.qualitiesItems.map((label: string) => (
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

          {/* Content */}
          <div className="flex-1 px-6 sm:px-10 py-10">
            <div className="max-w-3xl flex flex-col gap-12">

              {/* Work Experience — first for ATS weight */}
              <section>
                <h2 className="text-xs uppercase tracking-[0.15em] text-muted-foreground/50 mb-6"
                  style={{ fontFamily: "'DM Mono', monospace" }}>
                  {data.tabs[1]}
                </h2>
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
                        <span className="text-xs text-accent font-medium tracking-wide"
                          style={{ fontFamily: "'DM Mono', monospace" }}>
                          {item.year}
                        </span>
                        <div className="flex items-baseline gap-2 mt-1 flex-wrap">
                          <h3 className="text-lg font-semibold text-foreground"
                            style={{ fontFamily: "'Playfair Display', serif" }}>
                            {item.role}
                          </h3>
                          <span className="text-muted-foreground/40 text-sm">·</span>
                          <span className="text-sm font-semibold text-accent">{item.company}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {item.tags.map((tag) => (
                            <span key={tag}
                              className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="h-px bg-border" />

              {/* Education */}
              <section>
                <h2 className="text-xs uppercase tracking-[0.15em] text-muted-foreground/50 mb-6"
                  style={{ fontFamily: "'DM Mono', monospace" }}>
                  {data.tabs[0]}
                </h2>
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
                        <span className="text-xs text-accent font-medium tracking-wide"
                          style={{ fontFamily: "'DM Mono', monospace" }}>
                          {item.year}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground mt-1"
                          style={{ fontFamily: "'Playfair Display', serif" }}>
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
                            <span key={tag}
                              className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="h-px bg-border" />

              {/* Courses */}
              <section>
                <h2 className="text-xs uppercase tracking-[0.15em] text-muted-foreground/50 mb-6"
                  style={{ fontFamily: "'DM Mono', monospace" }}>
                  {data.tabs[2]}
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {data.courses.map((item, i) => (
                    <div key={i}
                      className="bg-card rounded-xl border border-border p-5 flex flex-col gap-3">
                      <span className="text-xs text-accent font-medium"
                        style={{ fontFamily: "'DM Mono', monospace" }}>
                        {item.year}
                      </span>
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
              </section>

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
