import { ScrollReveal } from "./ScrollReveal";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding-lg bg-surface-overlay/50">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-mono text-accent tracking-wider uppercase mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Let's build something impactful together
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're looking for a technical co-builder, a product-minded engineer,
              or just want to chat about interesting problems — I'm always open to connecting.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:niteshlaljani@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
              >
                <Mail size={16} />
                niteshlaljani@gmail.com
                <ArrowUpRight size={14} />
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-secondary text-secondary-foreground font-medium text-sm hover:bg-muted active:scale-[0.97] transition-all duration-200"
              >
                <Phone size={16} />
                Let's Talk
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
