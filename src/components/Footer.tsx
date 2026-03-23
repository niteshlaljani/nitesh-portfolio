export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nitesh Laljani. Crafted with intention.
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/niteshlaljani" },
            { label: "LinkedIn", href: "https://linkedin.com/in/niteshlaljani" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
