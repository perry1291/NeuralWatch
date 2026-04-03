import { motion } from 'framer-motion';

const solutions = [
  {
    label: 'Payment Fraud',
    title: 'Stop payment fraud in real-time',
    desc: 'ML models trained on billions of transactions detect anomalies, synthetic identities, and card testing attacks before they impact revenue.',
    stats: [
      { value: '99.7%', label: 'Detection Rate' },
      { value: '<0.01%', label: 'False Positive Rate' },
    ],
  },
  {
    label: 'Account Takeover',
    title: 'Protect every login',
    desc: 'Behavioral biometrics and device fingerprinting identify compromised accounts, even when credentials are valid.',
    stats: [
      { value: '200+', label: 'Signal Points' },
      { value: '50ms', label: 'Decision Speed' },
    ],
  },
  {
    label: 'Identity Verification',
    title: 'Know your customer instantly',
    desc: 'Multi-layered identity checks combining document verification, liveness detection, and global watchlist screening.',
    stats: [
      { value: '195', label: 'Countries' },
      { value: '10s', label: 'Avg. Verification' },
    ],
  },
];

const SolutionsSection = () => (
  <section className="relative py-32 px-6 bg-cyber-surface/20">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="font-mono text-xs text-secondary tracking-widest uppercase">Solutions</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
          Comprehensive{' '}
          <span className="text-glow-purple text-secondary">Protection</span>
        </h2>
      </motion.div>

      <div className="space-y-8">
        {solutions.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group grid md:grid-cols-[1fr_1fr] gap-8 p-8 rounded-xl border border-border bg-cyber-card/60 backdrop-blur hover:border-primary/20 transition-all"
          >
            <div>
              <span className="font-mono text-xs text-primary tracking-widest uppercase">{s.label}</span>
              <h3 className="font-display text-2xl font-bold mt-3 mb-4 text-foreground">{s.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
            <div className="flex items-center justify-center gap-12">
              {s.stats.map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-primary text-glow-blue">{stat.value}</div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
