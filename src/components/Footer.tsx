const Footer = () => (
  <footer className="border-t border-border bg-cyber-card/30 py-12 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-display text-lg font-bold text-foreground">
        FRAUD<span className="text-primary">SHIELD</span>
      </div>
      <div className="font-mono text-xs text-muted-foreground">
        © 2026 FraudShield AI — All systems operational
      </div>
      <div className="flex gap-6">
        {['Docs', 'API', 'Status'].map(l => (
          <a key={l} href="#" className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
