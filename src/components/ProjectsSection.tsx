import { ScrollReveal } from "./ScrollReveal";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TaskFlow",
    tagline: "Intelligent Task Management Platform",
    description:
      "A full-stack task management system with real-time collaboration, role-based access control, and an intelligent state machine for workflow automation. Designed for teams that need structure without friction.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "WebSockets"],
    features: [
      "Real-time collaboration with WebSocket-powered live updates",
      "Finite state machine for automated task lifecycle management",
      "Role-based access control with granular permission tiers",
      "Dashboard analytics with actionable productivity insights",
    ],
    github: "https://github.com/niteshlaljani",
    live: "#",
    featured: true,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <ScrollReveal>
          <p className="text-sm font-mono text-accent tracking-wider uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Things I've built</h2>
        </ScrollReveal>

        <div className="mt-12 space-y-8">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={0.1}>
              <div className="p-6 md:p-8 rounded-xl bg-card border border-border card-hover relative overflow-hidden">
                {project.featured && (
                  <span className="absolute top-4 right-4 text-xs font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    Featured
                  </span>
                )}

                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-primary mt-1">{project.tagline}</p>

                <p className="text-sm text-muted-foreground mt-4 max-w-2xl leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                  {project.features.map((f, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-accent shrink-0">▸</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors active:scale-95"
                  >
                    <Github size={16} /> Source
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors active:scale-95"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
