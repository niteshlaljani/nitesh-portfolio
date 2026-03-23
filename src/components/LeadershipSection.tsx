import { ScrollReveal } from "./ScrollReveal";
import { Users, Award } from "lucide-react";

const roles = [
  {
    icon: Users,
    title: "GDG On Campus Lead",
    org: "Google Developer Groups",
    description:
      "Led a 700+ member developer community, organizing technical workshops, hackathons, and speaker sessions. Scaled event attendance to 1500+ participants across the academic year, creating a culture of building and learning.",
    highlights: ["700+ active members", "1500+ event attendees", "15+ technical events organized"],
  },
  {
    icon: Award,
    title: "Chief Operating Officer",
    org: "Team Green",
    description:
      "Directed operations for a sustainability-focused student organization, coordinating cross-team logistics, partnerships, and campus-wide campaigns that drove measurable environmental impact.",
    highlights: ["Operations leadership", "Cross-team coordination", "Campus-wide impact"],
  },
];

export const LeadershipSection = () => {
  return (
    <section id="leadership" className="section-padding">
      <div className="container">
        <ScrollReveal>
          <p className="text-sm font-mono text-accent tracking-wider uppercase mb-3">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Beyond the code</h2>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-card border border-border card-hover h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <role.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{role.title}</h3>
                <p className="text-sm text-primary mb-3">{role.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{role.description}</p>
                <div className="flex flex-wrap gap-2">
                  {role.highlights.map((h) => (
                    <span key={h} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                      {h}
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
