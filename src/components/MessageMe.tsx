import { useState } from "react";
import { motion } from "motion/react";
import { Send, Sparkles } from "lucide-react";
import { z } from "zod";

const messageSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(5, "Message is too short").max(800),
});

const waNumber = "94762047659";

export function MessageMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = messageSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const text = `Hi Asheni, I'm ${parsed.data.name} (${parsed.data.email}).\n\n${parsed.data.message}`;
    window.open(
      `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noreferrer",
    );
  };

  return (
    <section id="message" className="relative py-24 sm:py-32 overflow-hidden">
      {/* ambient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div
          className="absolute bottom-0 right-1/4 w-[36rem] h-[36rem] rounded-full bg-secondary/30 blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            Say hello
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Have an idea? <span className="text-gradient">Let's talk.</span>
          </h2>
          <p className="mt-5 mx-auto max-w-2xl text-lg text-muted-foreground">
            Drop a message below and it'll open in WhatsApp ready to send — no inbox detours,
            no waiting around.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mt-14 mx-auto rounded-[2rem] border border-border bg-card/80 backdrop-blur-xl p-8 sm:p-12 shadow-2xl shadow-primary/10"
        >
          <div className="grid lg:grid-cols-2 gap-6">
            <Field label="Your name" error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={80}
                placeholder="Jane Cooper"
                className="w-full bg-transparent border-0 border-b-2 border-border focus:border-primary text-lg py-3 px-1 focus:outline-none transition-colors placeholder:text-muted-foreground/60"
              />
            </Field>
            <Field label="Your email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={160}
                placeholder="jane@example.com"
                className="w-full bg-transparent border-0 border-b-2 border-border focus:border-primary text-lg py-3 px-1 focus:outline-none transition-colors placeholder:text-muted-foreground/60"
              />
            </Field>
          </div>

          <div className="mt-6">
            <Field label="Your message" error={errors.message}>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={800}
                rows={5}
                placeholder="Tell me about your project, role, or just say hi…"
                className="w-full bg-transparent border-0 border-b-2 border-border focus:border-primary text-lg py-3 px-1 focus:outline-none transition-colors resize-none placeholder:text-muted-foreground/60"
              />
            </Field>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">
              Prefer email?{" "}
              <a href="mailto:asheniimalsha0@gmail.com" className="text-primary font-medium hover:underline">
                asheniimalsha0@gmail.com
              </a>
            </p>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
            >
              <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              Send via WhatsApp
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      <div className="mt-1">{children}</div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </label>
  );
}