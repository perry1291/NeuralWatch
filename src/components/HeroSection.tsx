import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import heroAbstract from '@/assets/hero-abstract.jpg';

const transactions = [
  { id: 'TXN-8842', amount: '$2,340.00', location: 'New York, US', status: 'clear' },
  { id: 'TXN-8843', amount: '$14,890.00', location: 'Lagos, NG', status: 'fraud' },
  { id: 'TXN-8844', amount: '$89.99', location: 'London, UK', status: 'clear' },
  { id: 'TXN-8845', amount: '$7,200.00', location: 'Unknown VPN', status: 'fraud' },
  { id: 'TXN-8846', amount: '$450.00', location: 'Tokyo, JP', status: 'clear' },
  { id: 'TXN-8847', amount: '$23,100.00', location: 'Proxy Server', status: 'fraud' },
  { id: 'TXN-8848', amount: '$1,200.00', location: 'Berlin, DE', status: 'clear' },
  { id: 'TXN-8849', amount: '$56,000.00', location: 'Tor Exit Node', status: 'fraud' },
];

const HeroSection = () => {
  const [visibleTxns, setVisibleTxns] = useState<typeof transactions>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => {
        const next = (prev + 1) % transactions.length;
        setVisibleTxns(curr => [transactions[next], ...curr].slice(0, 5));
        return next;
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Abstract hero background */}
      <div className="absolute inset-0">
        <img
          src={heroAbstract}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-green/30 bg-neon-green/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse-glow" />
            <span className="font-mono text-xs text-neon-green tracking-widest">★ #1 IN FRAUD PREVENTION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
          >
            <span className="text-foreground">Stop Fraud.</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-neon-green bg-clip-text text-transparent">
              Grow Faster.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
          >
            Real-time AI detection processing 2.4M+ transactions per second.
            Trusted by hundreds of global brands to secure revenue and stop threats before they strike.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <button
              className="px-8 py-3.5 rounded-lg font-display text-sm tracking-widest uppercase text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: 'hsl(350, 85%, 58%)' }}
            >
              Request a Demo
            </button>
            <button className="px-8 py-3.5 rounded-lg font-display text-sm tracking-widest uppercase border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-all">
              See Customer Stories
            </button>
          </motion.div>
        </div>

        {/* Right: Live feed terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="rounded-xl border border-border bg-cyber-card/80 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-cyber-surface/50">
              <div className="w-3 h-3 rounded-full bg-neon-red/70" />
              <div className="w-3 h-3 rounded-full bg-neon-amber/70" />
              <div className="w-3 h-3 rounded-full bg-neon-green/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">fraud_monitor — live</span>
            </div>

            {/* Transactions */}
            <div className="p-4 space-y-2 min-h-[300px] font-mono text-sm">
              {visibleTxns.map((txn, i) => (
                <motion.div
                  key={`${txn.id}-${i}-${counter}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`flex items-center justify-between p-3 rounded-lg border ${
                    txn.status === 'fraud'
                      ? 'border-neon-red/30 bg-neon-red/5'
                      : 'border-border bg-cyber-surface/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${
                      txn.status === 'fraud' ? 'bg-neon-red animate-pulse' : 'bg-neon-green'
                    }`} />
                    <span className="text-muted-foreground">{txn.id}</span>
                  </div>
                  <span className="text-foreground">{txn.amount}</span>
                  <span className="text-muted-foreground text-xs hidden sm:block">{txn.location}</span>
                  <span className={`text-xs font-bold tracking-wider uppercase ${
                    txn.status === 'fraud' ? 'text-neon-red text-glow-red' : 'text-neon-green'
                  }`}>
                    {txn.status === 'fraud' ? '⚠ FRAUD' : '✓ CLEAR'}
                  </span>
                </motion.div>
              ))}

              {visibleTxns.length === 0 && (
                <div className="flex items-center justify-center h-[280px] text-muted-foreground">
                  <span className="animate-pulse">Initializing feed...</span>
                </div>
              )}
            </div>

            {/* Footer stats */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-border bg-cyber-surface/30 text-xs font-mono text-muted-foreground">
              <span>Latency: <span className="text-neon-green">12ms</span></span>
              <span>Processed: <span className="text-primary">2,847,392</span></span>
              <span>Threats: <span className="text-neon-red">847</span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
