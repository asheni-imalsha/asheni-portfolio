import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { MessageMe } from "@/components/MessageMe";
import { Contact, Footer } from "@/components/Contact";
import { SectionDivider } from "@/components/SectionDivider";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Asheni Imalsha — Full-Stack Developer" },
      { name: "description", content: "Portfolio of Asheni Imalsha — full-stack developer building modern web and mobile applications with MERN, Next.js, Spring Boot, and Kotlin." },
      { property: "og:title", content: "Asheni Imalsha — Full-Stack Developer" },
      { property: "og:description", content: "Portfolio of Asheni Imalsha — full-stack developer building modern web and mobile applications." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Asheni Imalsha",
          jobTitle: "Full-Stack Developer",
          description:
            "BSc (Hons) IT Software Engineering undergraduate at SLIIT building modern web and mobile applications with MERN, Next.js, Spring Boot, and Kotlin.",
          url: "https://asheni-showcase.lovable.app",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Sri Lanka Institute of Information Technology (SLIIT)",
          },
          knowsAbout: [
            "Full-Stack Development",
            "React",
            "Next.js",
            "Node.js",
            "Spring Boot",
            "Kotlin",
            "UI/UX Design",
            "DevOps",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
        <SectionDivider />
        <MessageMe />
      </main>
      <Footer />
    </div>
  );
}
