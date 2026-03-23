import { ScrollReveal } from "./ScrollReveal";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <ScrollReveal>
          <p className="text-sm font-mono text-accent tracking-wider uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Engineer. Strategist. Builder.
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science student with a rare blend of deep technical skill and strategic product thinking.
                While most engineers stay in code, I've spent time in the CEO's office — analyzing markets,
                shaping go-to-market strategy, and understanding what makes products win.
              </p>
              <p>
                My engineering work spans full-stack development, real-time systems, and scalable architectures.
                I've built platforms that reduced turnaround times by 35%, designed task management systems
                with complex state machines, and led developer communities of 700+ members.
              </p>
              <p>
                I believe the best technology is invisible — it just works. That principle drives everything
                I build: clean architecture, thoughtful UX, and solutions that create measurable impact.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: "3+", label: "Internship experiences" },
                { metric: "700+", label: "Community members led" },
                { metric: "35%", label: "Efficiency improvement" },
                { metric: "1500+", label: "Event attendees" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-card border border-border card-hover"
                >
                  <p className="text-2xl font-bold text-gradient-primary">{item.metric}</p>
                  <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
