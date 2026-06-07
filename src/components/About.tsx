import { GraduationCap, MapPin, Briefcase, Award, Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import photo from "@/assets/asheni.jpeg";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading kicker="About" title="A bit about me" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-12 grid lg:grid-cols-5 gap-10 items-start"
        >
          <div className="lg:col-span-2 relative lg:sticky lg:top-24 max-w-sm mx-auto lg:max-w-none w-full">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-2xl" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border animate-float">
              <img src={photo} alt="Asheni Imalsha" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate software engineer who loves turning complex problems into elegant,
              user-friendly products. From mobile apps in Kotlin to enterprise-scale microservices
              with Spring Boot and Kubernetes, I enjoy working across the entire stack.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently focused on full-stack development with the MERN stack and Next.js,
              I'm always exploring new tools that help me ship faster without compromising quality.
            </p>

            <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Education</p>
                  <p className="font-semibold mt-0.5">BSc (Hons) in IT — Specializing in Software Engineering</p>
                  <p className="text-sm text-muted-foreground">Sri Lanka Institute of Information Technology (SLIIT)</p>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1"><Award className="w-3.5 h-3.5 text-primary" /> GPA 3.76</span>
                    <span>•</span>
                    <span>Nov 2023 – Present</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard icon={<MapPin className="w-5 h-5" />} label="Location" value="Sri Lanka" />
              <InfoCard icon={<Briefcase className="w-5 h-5" />} label="Status" value="Open to intern roles" />
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-primary" /> Open to internship roles
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full Stack Developer Intern",
                  "UI/UX Designer Intern",
                  "Backend Developer Intern",
                  "Software QA Intern",
                  "Quality Engineering Intern",
                  "DevOps Intern",
                  "Mobile App Developer Intern",
                  "Software Engineering Intern",
                ].map((role) => (
                  <span key={role} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 p-5 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">Always learning</p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Eager to pick up new technologies, frameworks and tools — curiosity is my favorite stack.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 hover:border-primary/50 transition-colors">
      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
        {icon}
      </div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold mt-0.5">{value}</p>
    </div>
  );
}

export function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{kicker}</span>
      <h2 className="mt-3 text-4xl sm:text-5xl font-bold">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </div>
  );
}