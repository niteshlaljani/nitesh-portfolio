import { ScrollReveal } from "./ScrollReveal";

const skillGroups = [
  {
    category: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "React", "Node.js", "Express", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Databases & Infrastructure",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Git", "CI/CD", "REST APIs", "WebSockets"],
  },
  {
    category: "Product & Business",
    items: ["Market Research", "Go-to-Market Strategy", "Competitive Analysis", "Investor Decks", "Product Roadmaps"],
  },
  {
    category: "Soft Skills",
    items: ["Team Leadership", "Public Speaking", "Community Building", "Cross-functional Collaboration", "Strategic Thinking"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding-lg bg-surface-overlay/50">
      <div className="container">
        <ScrollReveal>
          <p className="text-sm font-mono text-accent tracking-wider uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What I work with</h2>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-sm font-semibold text-foreground mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-muted transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
