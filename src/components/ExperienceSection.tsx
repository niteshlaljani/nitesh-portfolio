import { ScrollReveal } from "./ScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "CEO Office Intern",
    company: "Xponentium India LLP",
    duration: "Jun 2024 – Aug 2024",
    bullets: [
      "Drove strategic market research and competitive analysis that directly informed executive decision-making and product positioning",
      "Developed go-to-market frameworks and investor-ready presentations that accelerated fundraising efforts",
      "Collaborated cross-functionally with leadership to identify growth levers and optimize operational workflows",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Asmita Solutions",
    duration: "Jan 2024 – Apr 2024",
    bullets: [
      "Engineered full-stack features that reduced client project turnaround time by 35% through streamlined workflows",
      "Built RESTful APIs and optimized database queries, improving response times by 40% across critical endpoints",
      "Implemented CI/CD pipelines and automated testing, significantly reducing deployment friction",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Asmita Solutions",
    duration: "Sep 2023 – Dec 2023",
    bullets: [
      "Designed and shipped responsive web applications serving hundreds of active users",
      "Translated Figma mockups into pixel-perfect, accessible front-end code using React and Tailwind CSS",
      "Established component libraries and coding standards adopted by the wider development team",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding-lg bg-surface-overlay/50">
      <div className="container">
        <ScrollReveal>
          <p className="text-sm font-mono text-accent tracking-wider uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Where I've made impact</h2>
        </ScrollReveal>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                      <Briefcase size={16} className="text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 p-6 rounded-xl bg-card border border-border card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-sm text-primary">{exp.company}</p>
                      </div>
                      <p className="text-xs font-mono text-muted-foreground">{exp.duration}</p>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-accent mt-1.5 shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
