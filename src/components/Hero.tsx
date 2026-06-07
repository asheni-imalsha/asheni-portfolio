import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import photo from "@/assets/asheni.jpeg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/40 blur-3xl animate-blob pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center">
          {/* Mobile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:hidden relative mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/40 to-secondary/40 rounded-full blur-2xl" />
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-primary/30 animate-float">
              <img src={photo} alt="Asheni Imalsha" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-center lg:text-left"
          >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6 mx-auto lg:mx-0">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Available for opportunities
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1]">
            Hi, I'm <span className="text-gradient">Asheni Imalsha</span>
            <br />
            <span className="text-muted-foreground font-normal text-2xl sm:text-4xl lg:text-5xl">
              Full-stack developer crafting modern web & mobile experiences.
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0">
            I build scalable applications with the MERN stack, Next.js, Spring Boot, and Kotlin —
            blending clean architecture with thoughtful interfaces.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all glow"
            >
              View my work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-accent transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 sm:mt-10 flex items-center justify-center lg:justify-start gap-5">
            <a href="https://github.com/asheni-imalsha" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/asheni-imalsha" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:asheniimalsha0@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-tr from-primary/40 to-secondary/40 rounded-full blur-3xl" />
            <div className="relative w-96 h-96 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-primary/30 animate-float">
              <img src={photo} alt="Asheni Imalsha" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}