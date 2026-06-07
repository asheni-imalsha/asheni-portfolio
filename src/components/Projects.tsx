import { useEffect, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { SectionHeading } from "./About";
import ceylonbrew from "@/assets/projects/ceylonbrew.png";
import beautyqueen from "@/assets/projects/beautyqueen.png";
import medicare from "@/assets/projects/medicare.png";
import hopeflow from "@/assets/projects/hopeflow.png";
import uplift from "@/assets/projects/uplift.jpeg";
import blum from "@/assets/projects/blum.jpeg";
import telemedicine from "@/assets/projects/telemedicine.jpeg";
import flexride from "@/assets/projects/flexride.png";
import cafelounge from "@/assets/projects/cafelounge.png";

type Project = {
  title: string;
  category: "Web" | "Mobile" | "Enterprise";
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  accent: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Cafe Lounge – Booking & Ordering",
    category: "Web",
    description: "Relaxed cafe workspace platform — book a table, browse the menu, place orders and manage bookings in one cohesive experience.",
    stack: ["React", "TypeScript", "Tailwind", "Node.js"],
    github: "https://github.com/asheni-imalsha/Cafe-lounge",
    accent: "from-amber-500/30 to-rose-500/20",
    image: cafelounge,
  },
  {
    title: "Medicare – Healthcare Management",
    category: "Web",
    description: "Full-stack healthcare platform with appointment booking, patient management, pharmacy orders, diagnostic tests and role-based admin.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Vite"],
    demo: "https://health-center-virid.vercel.app/",
    github: "https://github.com/asheni-imalsha/Health-Center",
    accent: "from-violet-500/30 to-fuchsia-500/20",
    image: medicare,
  },
  {
    title: "Telemedicine Platform",
    category: "Enterprise",
    description: "Production-ready microservices telemedicine platform with Docker, Kubernetes, API Gateway and Kafka for real-time communication.",
    stack: ["MERN", "Kafka", "Docker", "Kubernetes"],
    github: "https://github.com/sanudarusara/Telemedicine-Platform",
    accent: "from-purple-500/30 to-indigo-500/20",
    image: telemedicine,
  },
  {
    title: "CeylonBrew – Tea Plantation System",
    category: "Enterprise",
    description: "Enterprise full-stack app automating tea plantation workflows with role-based access and graphical data visualization.",
    stack: ["Next.js", "Spring Boot", "MySQL"],
    github: "https://github.com/Visna-Sithmi/CeylonBrew",
    accent: "from-emerald-500/30 to-violet-500/20",
    image: ceylonbrew,
  },
  {
    title: "Blüm – Flower Shop App",
    category: "Mobile",
    description: "Android app for a flower shop with browsing, orders, authentication and order management.",
    stack: ["Kotlin", "XML", "Android"],
    github: "https://github.com/asheni-imalsha/flower_shop",
    accent: "from-pink-500/30 to-violet-500/20",
    image: blum,
  },
  {
    title: "Uplift – Health & Well-being",
    category: "Mobile",
    description: "Health-focused Android app with activity tracking, reminders and personalized insights.",
    stack: ["Kotlin", "XML", "Android"],
    github: "https://github.com/asheni-imalsha/Uplift",
    accent: "from-teal-500/30 to-violet-500/20",
    image: uplift,
  },
  {
    title: "Hope Flow – Blood Donation",
    category: "Web",
    description: "Blood donation management system with AJAX-powered real-time updates and optimized MySQL queries.",
    stack: ["PHP", "MySQL", "jQuery", "AJAX"],
    github: "https://github.com/anupaprabhasara/sliit-iwt-project-2024",
    accent: "from-rose-500/30 to-violet-500/20",
    image: hopeflow,
  },
  {
    title: "FlexRide – Vehicle Renting",
    category: "Web",
    description: "Java web app for vehicle renting following MVC architecture with full CRUD for vehicles, bookings, and users.",
    stack: ["Java", "Servlets", "JSP", "JDBC"],
    github: "https://github.com/anupaprabhasara/flexiride-vehicle-rental-system",
    accent: "from-amber-500/30 to-violet-500/20",
    image: flexride,
  },
  {
    title: "Beauty Queen Fashion",
    category: "Web",
    description: "Client website for a digital printing and fashion business with modern responsive UI and customer inquiry features.",
    stack: ["TypeScript", "JavaScript", "CSS"],
    demo: "https://beautyqueenfashion.com/",
    github: "https://github.com/asheni-imalsha/beauty-queen-designs",
    accent: "from-cyan-500/30 to-violet-500/20",
    image: beautyqueen,
  },
];

const categories = ["All", "Web", "Mobile", "Enterprise"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="projects" className="py-20 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading kicker="Projects" title="Selected work" />

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                filter === c
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.title}
              onClick={() => setSelected(p)}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 animate-fade-up flex flex-col cursor-pointer text-left"
            >
              <div className={`h-48 bg-gradient-to-br ${p.accent} relative overflow-hidden`}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full ${p.category === "Mobile" ? "object-contain p-3" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                  />
                ) : (
                  <div className="absolute inset-0 bg-grid opacity-30" />
                )}
                <span className="absolute top-4 left-4 z-10 text-xs font-semibold uppercase tracking-wider text-foreground bg-background/80 backdrop-blur rounded-full px-3 py-1">
                  {p.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] font-medium px-2 py-1 rounded-md bg-muted text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                <div
                  className="mt-5 flex items-center gap-2 pt-4 border-t border-border"
                  onClick={(e) => e.stopPropagation()}
                >
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full bg-primary text-primary-foreground px-3 py-1.5 hover:bg-primary/90"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full border border-border px-3 py-1.5 hover:bg-accent"
                    >
                      <Github className="w-3.5 h-3.5" /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {selected && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-up"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-accent"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <div className={`h-72 sm:h-96 bg-gradient-to-br ${selected.accent} relative overflow-hidden`}>
                {selected.image ? (
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className={`w-full h-full ${selected.category === "Mobile" ? "object-contain p-4" : "object-cover"}`}
                  />
                ) : (
                  <div className="absolute inset-0 bg-grid opacity-30" />
                )}
              </div>
              <div className="p-6 sm:p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{selected.category}</span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold">{selected.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{selected.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.stack.map((s) => (
                    <span key={s} className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground">{s}</span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {selected.demo && (
                    <a href={selected.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground px-5 py-2.5 hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {selected.github && (
                    <a href={selected.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold rounded-full border border-border px-5 py-2.5 hover:bg-accent">
                      <Github className="w-4 h-4" /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}