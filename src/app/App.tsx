import { useState } from "react";

type Lang = "ru" | "en";

const t = {
  ru: {
    name: "Р СѓР±Р°РЅРёРє Р—Р°С…Р°СЂ",
    title: "РњР»Р°РґС€РёР№ fullstack СЂР°Р·СЂР°Р±РѕС‚С‡РёРє",
    location: "Р’РёС‚РµР±СЃРє, Р‘РµР»Р°СЂСѓСЃСЊ",
    about: "РћР±Рѕ РјРЅРµ",
    aboutText:
      "РњР»Р°РґС€РёР№ fullstack СЂР°Р·СЂР°Р±РѕС‚С‡РёРє СЃ РіРѕРґРѕРІС‹Рј РѕРїС‹С‚РѕРј СЂР°Р±РѕС‚С‹ РІ РєРѕРјР°РЅРґРµ РЅР°Рґ СѓС‡РµР±РЅС‹РјРё Рё СЂРµР°Р»СЊРЅС‹РјРё РїСЂРѕРµРєС‚Р°РјРё. РџР°СЂР°Р»Р»РµР»СЊРЅРѕ РІС‹РїРѕР»РЅСЏР» Р·Р°РєР°Р·С‹ РЅР° С„СЂРёР»Р°РЅСЃ-РїР»Р°С‚С„РѕСЂРјР°С… Kwork Рё Fiverr: РІС‘СЂСЃС‚РєР°, РЅРµР±РѕР»СЊС€РёРµ РІРµР±-РїСЂРёР»РѕР¶РµРЅРёСЏ, Р°РІС‚РѕРјР°С‚РёР·Р°С†РёСЏ. РЈС‡Р°СЃС‚РЅРёРє РЇРЅРґРµРєСЃ РћР»РёРјРїРёР°Рґ РїРѕ РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°РЅРёСЋ. РЎС‚СЂРµРјР»СЋСЃСЊ РїРёСЃР°С‚СЊ С‡РёСЃС‚С‹Р№, РїРѕРґРґРµСЂР¶РёРІР°РµРјС‹Р№ РєРѕРґ Рё РїРѕСЃС‚РѕСЏРЅРЅРѕ СЂР°СЃС€РёСЂСЏСЋ СЃС‚РµРє.",
    contacts: "РљРѕРЅС‚Р°РєС‚С‹",
    phone: "+375 (29) 897-12-55",
    email: "zaharrubanik2007@gmail.com",
    linkedin: "https://www.linkedin.com/in/zakhar-rubanik-13449b26a/",
    github: "https://github.com/zahar1143123",
    telegram: "https://t.me/CXZPEWQL",
    telegramHandle: "@CXZPEWQL",
    hobbies: "РҐРѕР±Р±Рё Рё РёРЅС‚РµСЂРµСЃС‹",
    hobbiesItems: [
      "РћР»РёРјРїРёР°РґРЅРѕРµ РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°РЅРёРµ",
      "РљРѕРјРїСЊСЋС‚РµСЂРЅС‹Рµ РёРіСЂС‹",
      "Р“РµРЅРµСЂР°С†РёСЏ РёРґРµР№",
    ],
    qualities: "Р›РёС‡РЅРѕСЃС‚РЅС‹Рµ РєР°С‡РµСЃС‚РІР°",
    qualitiesItems: [
      "РЎРёСЃС‚РµРјРЅРѕРµ РјС‹С€Р»РµРЅРёРµ",
      "РљСЂРµР°С‚РёРІРЅРѕРµ РјРѕРґРµР»РёСЂРѕРІР°РЅРёРµ",
      "Р РµС„Р»РµРєСЃРёСЏ Рё СЂРѕСЃС‚",
    ],
    tabs: [
      "РћР±СЂР°Р·РѕРІР°РЅРёРµ",
      "РћРїС‹С‚ СЂР°Р±РѕС‚С‹",
      "РЈС‡РµР±РЅС‹Рµ РєСѓСЂСЃС‹",
    ],
    education: [
      {
        year: "2025 вЂ” РЅ.РІ.",
        degree: "Р‘Р°РєР°Р»Р°РІСЂ, РџСЂРѕРіСЂР°РјРјРЅР°СЏ РёРЅР¶РµРЅРµСЂРёСЏ",
        institution:
          "РџР“РЈ РёРјРµРЅРё Р•С„СЂРѕСЃРёРЅРёРё РџРѕР»РѕС†РєРѕР№, С„Р°РєСѓР»СЊС‚РµС‚ РёРЅС„РѕСЂРјР°С†РёРѕРЅРЅС‹С… С‚РµС…РЅРѕР»РѕРіРёР№",
        description: "",
        tags: [
          "РџСЂРѕРµРєС‚РёСЂРѕРІР°РЅРёРµ РїСЂРѕРіСЂР°РјРј",
          "Р Р°Р±РѕС‚Р° РІ РєРѕРјР°РЅРґРµ",
          "РљР°С‡РµСЃС‚РІРµРЅРЅС‹Р№ Рё РјР°СЃС€С‚Р°Р±РёСЂСѓРµРјС‹Р№ РєРѕРґ",
        ],
      },
    ],
    experience: [
       {
        year: "2023вЂ“2024",
        role: "РЈС‡Р°СЃС‚РЅРёРє",
        company: "РћР»РёРјРїРёР°РґР° Р’РёС‚РµР±СЃРєРѕР№ РѕР±Р»Р°СЃС‚Рё",
        description:
          "РћР»РёРјРїРёР°РґР° РїРѕ СЃРѕР·РґР°РЅРёСЋ РїСЂРёР»РѕР¶РµРЅРёР№ Р’РёС‚РµР±СЃРєРѕР№ РѕР±Р»Р°СЃС‚Рё. РџСЂРѕС€С‘Р» РІ С„РёРЅР°Р», РїРѕ РёС‚РѕРіР°Рј РєРѕС‚РѕСЂРѕРіРѕ РїРѕР»СѓС‡РёР» РґРёРїР»РѕРј III СЃС‚РµРїРµРЅРё.",
        tags: ["Python", "Git"],
      },
      {
        year: "2024вЂ“2025",
        role: "Р¤СЂРёР»Р°РЅСЃРµСЂ",
        company: "Kwork",
        description:
          "Р’С‹РїРѕР»РЅСЏР» Р·Р°РєР°Р·С‹ РїРѕ РІС‘СЂСЃС‚РєРµ Рё СЂР°Р·СЂР°Р±РѕС‚РєРµ РЅРµР±РѕР»СЊС€РёС… РІРµР±-СЃР°Р№С‚РѕРІ. Р Р°Р±РѕС‚Р° СЃ РєР»РёРµРЅС‚Р°РјРё, СЃРѕР±Р»СЋРґРµРЅРёРµ РґРµРґР»Р°Р№РЅРѕРІ, РёС‚РµСЂР°С†РёРѕРЅРЅС‹Рµ РїСЂР°РІРєРё РїРѕ С‚РµС…РЅРёС‡РµСЃРєРѕРјСѓ Р·Р°РґР°РЅРёСЋ.",
        tags: ["HTML/CSS", "TS", "React"],
      },
      {
        year: "2024вЂ“2025",
        role: "Р¤СЂРёР»Р°РЅСЃРµСЂ",
        company: "Fiverr",
        description:
          "Р Р°Р·СЂР°Р±РѕС‚РєР° Р»РµРЅРґРёРЅРіРѕРІ Рё РёРЅС‚РµСЂРЅРµС‚-РјР°РіР°Р·РёРЅРѕРІ РґР»СЏ Р·Р°СЂСѓР±РµР¶РЅС‹С… Р·Р°РєР°Р·С‡РёРєРѕРІ. Р РµР°Р»РёР·РѕРІР°Р» РєР°С‚Р°Р»РѕРі С‚РѕРІР°СЂРѕРІ, РєРѕСЂР·РёРЅСѓ Рё С„РѕСЂРјСѓ РѕС„РѕСЂРјР»РµРЅРёСЏ Р·Р°РєР°Р·Р°. РџРµСЂРµРїРёСЃРєР° Рё РїРѕСЃС‚Р°РЅРѕРІРєР° Р·Р°РґР°С‡ РЅР° Р°РЅРіР»РёР№СЃРєРѕРј СЏР·С‹РєРµ.",
        tags: ["Node.js", "React", "Git"],
      },
      {
        year: "2025",
        role: "РЈС‡Р°СЃС‚РЅРёРє",
        company: "РЇРЅРґРµРєСЃ РћР»РёРјРїРёР°РґС‹",
        description:
          "РЈС‡Р°СЃС‚РёРµ РІ РѕР»РёРјРїРёР°РґРµ РЇРЅРґРµРєСЃР° РїРѕ РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°РЅРёСЋ. Р РµС€РµРЅРёРµ Р°Р»РіРѕСЂРёС‚РјРёС‡РµСЃРєРёС… Р·Р°РґР°С‡ РЅР° РІСЂРµРјСЏ, СЂР°Р±РѕС‚Р° СЃ СЂР°Р·Р»РёС‡РЅС‹РјРё СЃС‚СЂСѓРєС‚СѓСЂР°РјРё РґР°РЅРЅС‹С… Рё РєР»Р°СЃСЃРёС‡РµСЃРєРёРјРё Р°Р»РіРѕСЂРёС‚РјР°РјРё. Р”РёРїР»РѕРј РїРѕ РёРЅС„РѕСЂРјР°С‚РёРєРµ.",
        tags: ["РђР»РіРѕСЂРёС‚РјС‹", "Python", "РЎС‚СЂСѓРєС‚СѓСЂС‹ РґР°РЅРЅС‹С…"],
      },
    ],
    courses: [
      {
        year: "2020вЂ“2021",
        title: "Python-РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°РЅРёРµ",
        provider: "Р’РёС‚РµР±СЃРєРёР№ РґРІРѕСЂРµС† РјРѕР»РѕРґС‘Р¶Рё",
        description:
          "РћСЃРЅРѕРІС‹ СЏР·С‹РєР° Python: СЃРёРЅС‚Р°РєСЃРёСЃ, СѓРїСЂР°РІР»СЏСЋС‰РёРµ РєРѕРЅСЃС‚СЂСѓРєС†РёРё, С„СѓРЅРєС†РёРё, СЂР°Р±РѕС‚Р° СЃ С„Р°Р№Р»Р°РјРё Рё Р±Р°Р·РѕРІС‹Рµ Р°Р»РіРѕСЂРёС‚РјС‹.",
      },
      {
        year: "2021вЂ“2022",
        title: "Р’РµР±-РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°РЅРёРµ",
        provider: "Р’РёС‚РµР±СЃРєРёР№ РґРІРѕСЂРµС† РјРѕР»РѕРґС‘Р¶Рё",
        description:
          "HTML, CSS, РѕСЃРЅРѕРІС‹ JavaScript. РЎРѕР·РґР°РЅРёРµ Р°РґР°РїС‚РёРІРЅС‹С… СЃС‚СЂР°РЅРёС†, СЂР°Р±РѕС‚Р° СЃ С„РѕСЂРјР°РјРё Рё Р±Р°Р·РѕРІР°СЏ РєР»РёРµРЅС‚СЃРєР°СЏ Р»РѕРіРёРєР°.",
      },
    ],
    skills: "РќР°РІС‹РєРё",
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
        year: "2025 вЂ” present",
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
        year: "2023вЂ“2024",
        role: "Participant",
        company: "Vitebsk Region Olympiad",
        description:
          "Regional olympiad in application development. Reached the final stage and was awarded a 3rd Degree Diploma.",
        tags: ["Python", "Git"],
      },
      {
        year: "2024вЂ“2025",
        role: "Freelancer",
        company: "Kwork",
        description:
          "Completed orders for web layout and small website development. Client communication, deadline management, iterative revisions based on technical specs.",
        tags: ["HTML/CSS", "TS", "React"],
      },
      {
        year: "2024вЂ“2025",
        role: "Freelancer",
        company: "Fiverr",
        description:
          "Built landing pages and e-commerce stores for international clients: product catalogue, shopping cart, and checkout form. All communication conducted in English.",
        tags: ["Node.js", "React", "Git"],
      },
      {
        year: "2025",
        role: "Participant",
        company: "Yandex Olympiads",
        description:
          "Competed in Yandex Programming Olympiad. Solved algorithmic problems under time constraints, working with data structures and classical algorithms. Received a diploma in Computer Science.",
        tags: ["Algorithms", "Python", "Data Structures"],
      },
    ],
    courses: [
      {
        year: "2020вЂ“2021",
        title: "Python Programming",
        provider: "Vitebsk Youth Palace",
        description:
          "Python fundamentals: syntax, control flow, functions, file handling, and basic algorithms.",
      },
      {
        year: "2021вЂ“2022",
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
    items: ["Р СѓСЃСЃРєРёР№ вЂ” СЂРѕРґРЅРѕР№", "English вЂ” B1"],
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
<<<<<<< HEAD
    items: ["HTML/CSS", "JS", "TS", "Node.js", "React", "Next.js", "Git", "Python", "C++", "Docker"],
=======
    items: ["HTML/CSS", "JS", "TS", "Node.js", "React", "Git", "Python", "C++", "Docker"],
>>>>>>> aba626a4da2f61016515a8cbcc8acecc9bc666a2
  },
  {
    label: "Tools",
    items: ["Jira", "Notion", "Miro"],
  },
  {
    label: "Languages",
    items: ["Russian вЂ” Native", "English вЂ” B1"],
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
        {/* в”Ђв”Ђ Sidebar в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ */}
        <aside className="lg:w-[300px] xl:w-[320px] lg:flex-shrink-0 bg-primary text-primary-foreground flex flex-col">

          {/* в”Ђв”Ђ Mobile / tablet header (<lg) в”Ђв”Ђ */}
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

          {/* в”Ђв”Ђ Desktop sidebar (lg+) в”Ђв”Ђ */}
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

        {/* в”Ђв”Ђ Main Content в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ */}
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

              {/* Work Experience */}
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
                          <span className="text-muted-foreground/40 text-sm">В·</span>
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
              В© {new Date().getFullYear()} вЂ” {data.name}
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
