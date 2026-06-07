import { Github, Linkedin, Mail, Phone, MessageCircle, Download } from "lucide-react";
import { motion } from "motion/react";
import { SectionHeading } from "./About";

const phone = "+94762047659";
const phoneDisplay = "+94 76 204 7659";
const waNumber = "94762047659";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading kicker="Contact" title="Let's build something" />

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          I'm currently open to internship opportunities and freelance work.
          Reach out through any channel below — I'll get back to you quickly.
        </p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <ContactCard
            icon={<Mail className="w-5 h-5" />}
            label="Email"
            value="asheniimalsha0@gmail.com"
            href="mailto:asheniimalsha0@gmail.com"
          />
          <ContactCard
            icon={<Phone className="w-5 h-5" />}
            label="Call me"
            value={phoneDisplay}
            href={`tel:${phone}`}
          />
          <ContactCard
            icon={<MessageCircle className="w-5 h-5" />}
            label="WhatsApp"
            value={phoneDisplay}
            href={`https://wa.me/${waNumber}`}
            external
          />
          <ContactCard
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
            value="in/asheni-imalsha"
            href="https://www.linkedin.com/in/asheni-imalsha"
            external
          />
          <ContactCard
            icon={<Github className="w-5 h-5" />}
            label="GitHub"
            value="@asheni-imalsha"
            href="https://github.com/asheni-imalsha"
            external
          />
          <ContactCard
            icon={<Download className="w-5 h-5" />}
            label="Resume"
            value="Download CV (PDF)"
            href="/Asheni_Imalsha_CV.pdf"
            download
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({
  icon, label, value, href, external, download,
}: {
  icon: React.ReactNode; label: string; value: string; href: string;
  external?: boolean; download?: boolean;
}) {
  return (
    <motion.a
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
      className="group relative rounded-2xl border p-6 transition-all hover:-translate-y-1 bg-card border-border hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:shadow-primary/30"
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-primary/10 text-primary group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground group-hover:text-primary-foreground/80 group-hover:opacity-90">
        {label}
      </p>
      <p className="mt-1 font-semibold text-base break-all">{value}</p>
    </motion.a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Asheni Imalsha. All rights reserved.</p>
        <p>Designed & built with care.</p>
      </div>
    </footer>
  );
}