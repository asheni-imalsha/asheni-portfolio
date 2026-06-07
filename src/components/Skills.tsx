import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "./About";
import { Code2, Layout, Server, Database, Cloud, Wrench, Smartphone, Lightbulb } from "lucide-react";

type Skill = { name: string; icon: string };

// Devicon CDN — official tech logos
const d = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

const groups: { key: string; label: string; Icon: typeof Code2; items: Skill[] }[] = [
  {
    key: "languages", label: "Languages", Icon: Code2,
    items: [
      { name: "Python", icon: d("python") },
      { name: "R", icon: d("r") },
      { name: "Java", icon: d("java") },
      { name: "JavaScript", icon: d("javascript") },
      { name: "TypeScript", icon: d("typescript") },
      { name: "PHP", icon: d("php") },
      { name: "SQL", icon: d("mysql") },
      { name: "Kotlin", icon: d("kotlin") },
      { name: "C", icon: d("c") },
      { name: "C++", icon: d("cplusplus") },
    ],
  },
  {
    key: "frontend", label: "Frontend", Icon: Layout,
    items: [
      { name: "React", icon: d("react") },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", icon: d("tailwindcss") },
      { name: "HTML5", icon: d("html5") },
      { name: "CSS3", icon: d("css3") },
    ],
  },
  {
    key: "backend", label: "Backend", Icon: Server,
    items: [
      { name: "Node.js", icon: d("nodejs") },
      { name: "Express.js", icon: d("express") },
      { name: "Spring Boot", icon: d("spring") },
      { name: "PHP", icon: d("php") },
      { name: "Java Servlets", icon: d("java") },
    ],
  },
  {
    key: "mobile", label: "Mobile", Icon: Smartphone,
    items: [
      { name: "Android", icon: d("android") },
      { name: "Kotlin", icon: d("kotlin") },
      { name: "Java", icon: d("java") },
    ],
  },
  {
    key: "databases", label: "Databases", Icon: Database,
    items: [
      { name: "MySQL", icon: d("mysql") },
      { name: "MongoDB", icon: d("mongodb") },
      { name: "Oracle", icon: d("oracle") },
    ],
  },
  {
    key: "devops", label: "DevOps & Cloud", Icon: Cloud,
    items: [
      { name: "Docker", icon: d("docker") },
      { name: "Kubernetes", icon: d("kubernetes") },
    ],
  },
  {
    key: "tools", label: "Tools", Icon: Wrench,
    items: [
      { name: "Git", icon: d("git") },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: d("vscode") },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Playwright", icon: "https://playwright.dev/img/playwright-logo.svg" },
    ],
  },
  {
    key: "concepts", label: "Concepts", Icon: Lightbulb,
    items: [
      { name: "OOP", icon: "" },
      { name: "REST APIs", icon: "" },
      { name: "MVC", icon: "" },
      { name: "Microservices", icon: "" },
      { name: "CI/CD", icon: "" },
      { name: "Cloud Computing", icon: "" },
      { name: "Data Warehousing", icon: "" },
      { name: "ETL", icon: "" },
      { name: "Business Intelligence", icon: "" },
    ],
  },
];

export function Skills() {
  const [active, setActive] = useState(groups[0].key);
  const current = groups.find((g) => g.key === active) ?? groups[0];
  return (
    <section id="skills" className="py-20 sm:py-32 bg-muted/30 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading kicker="Skills" title="Tools I work with" />

        <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
          Always eager to learn — picking up new frameworks, tools and patterns is part of the fun.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid lg:grid-cols-[260px_1fr] gap-6"
        >
          {/* Side tabs — wraps on mobile, vertical on desktop */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="flex flex-wrap lg:flex-col gap-2">
              {groups.map((g) => {
                const isActive = g.key === active;
                return (
                  <button
                    key={g.key}
                    onClick={() => setActive(g.key)}
                    className={`flex items-center gap-2 lg:gap-3 px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all text-left ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                        : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                    }`}
                  >
                    <g.Icon className="w-4 h-4" />
                    {g.label}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Active category panel */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 min-h-[300px]">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <current.Icon className="w-5 h-5" />
              </span>
              {current.label}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {current.items.map((s) => (
                <div
                  key={s.name + current.key}
                  className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background p-5 hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all animate-fade-up"
                >
                  {s.icon ? (
                    <img
                      src={s.icon}
                      alt={`${s.name} logo`}
                      loading="lazy"
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <span className="text-sm font-semibold text-center">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}