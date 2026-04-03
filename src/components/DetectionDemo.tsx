import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const DetectionDemo = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { risk: number; label: string; factors: string[] }>(null);
  const [formData, setFormData] = useState({ amount: '', location: '', type: 'online' });

  const analyze = () => {
    setResult(null);
    setAnalyzing(true);
    
    const amount = parseFloat(formData.amount) || 0;
    const isSuspicious = amount > 5000 || formData.location.toLowerCase().includes('vpn') || formData.location.toLowerCase().includes('tor');
    
    setTimeout(() => {
      setAnalyzing(false);
      const risk = isSuspicious ? 72 + Math.floor(Math.random() * 25) : 5 + Math.floor(Math.random() * 20);
      setResult({
        risk,
        label: risk > 70 ? 'HIGH RISK' : risk > 40 ? 'MODERATE' : 'LOW RISK',
        factors: isSuspicious
          ? ['Unusual transaction amount', 'Suspicious origin detected', 'Pattern anomaly flagged']
          : ['Normal spending pattern', 'Known merchant', 'Verified location'],
      });
    }, 3000);
  };

  const riskColor = (risk: number) =>
    risk > 70 ? 'text-neon-red' : risk > 40 ? 'text-neon-amber' : 'text-neon-green';
  const riskGlow = (risk: number) =>
    risk > 70 ? 'text-glow-red' : risk > 40 ? '' : 'text-glow-green';
  const riskBorder = (risk: number) =>
    risk > 70 ? 'border-neon-red/40' : risk > 40 ? 'border-neon-amber/40' : 'border-neon-green/40';

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-glow-blue text-primary">Interactive</span> Detection
          </h2>
          <p className="text-muted-foreground font-body text-lg">Input a transaction. Watch the AI think.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Input */}
          <div className="rounded-lg border border-border bg-cyber-card/80 backdrop-blur-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-mono text-sm text-muted-foreground">TRANSACTION INPUT</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="font-mono text-xs text-muted-foreground mb-1 block">AMOUNT (USD)</label>
                <input
                  type="text"
                  value={formData.amount}
                  onChange={e => setFormData(d => ({ ...d, amount: e.target.value }))}
                  placeholder="e.g. 15000"
                  className="w-full px-4 py-3 rounded border border-border bg-cyber-surface/50 font-mono text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground mb-1 block">ORIGIN LOCATION</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={e => setFormData(d => ({ ...d, location: e.target.value }))}
                  placeholder="e.g. VPN Proxy"
                  className="w-full px-4 py-3 rounded border border-border bg-cyber-surface/50 font-mono text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground mb-1 block">TYPE</label>
                <select
                  value={formData.type}
                  onChange={e => setFormData(d => ({ ...d, type: e.target.value }))}
                  className="w-full px-4 py-3 rounded border border-border bg-cyber-surface/50 font-mono text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                >
                  <option value="online">Online Purchase</option>
                  <option value="wire">Wire Transfer</option>
                  <option value="atm">ATM Withdrawal</option>
                </select>
              </div>

              <button
                onClick={analyze}
                disabled={analyzing}
                className="w-full py-3 mt-2 font-display text-sm tracking-widest uppercase border border-primary/40 rounded bg-primary/10 text-primary-foreground hover:bg-primary/20 hover:border-primary transition-all disabled:opacity-50"
              >
                {analyzing ? 'Analyzing...' : 'Run Analysis'}
              </button>
            </div>
          </div>

          {/* Output */}
          <div className="rounded-lg border border-border bg-cyber-card/80 backdrop-blur-xl p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
              <span className="font-mono text-sm text-muted-foreground">AI OUTPUT</span>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {analyzing && (
                  <motion.div
                    key="analyzing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          className="absolute inset-0 rounded-full border-2 border-primary/30"
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                        />
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                          className="w-16 h-16 rounded-full border-2 border-t-primary border-r-secondary border-b-transparent border-l-transparent"
                        />
                      </div>
                    </div>
                    <p className="font-mono text-sm text-muted-foreground animate-pulse">
                      Neural network processing...
                    </p>
                    <div className="flex justify-center gap-1 mt-3">
                      {[0,1,2,3,4].map(i => (
                        <motion.div
                          key={i}
                          className="w-1 h-4 bg-primary/50 rounded-full"
                          animate={{ scaleY: [1, 2, 1] }}
                          transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {!analyzing && result && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full"
                  >
                    {/* Risk score */}
                    <div className={`text-center p-6 rounded-lg border ${riskBorder(result.risk)} bg-cyber-surface/30 mb-4`}>
                      <span className="font-mono text-xs text-muted-foreground block mb-2">RISK SCORE</span>
                      <span className={`font-display text-6xl font-bold ${riskColor(result.risk)} ${riskGlow(result.risk)}`}>
                        {result.risk}
                      </span>
                      <span className={`block mt-2 font-mono text-sm font-bold tracking-widest ${riskColor(result.risk)}`}>
                        {result.label}
                      </span>
                    </div>

                    {/* Risk meter */}
                    <div className="h-2 rounded-full bg-cyber-surface overflow-hidden mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.risk}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          result.risk > 70 ? 'bg-neon-red' : result.risk > 40 ? 'bg-neon-amber' : 'bg-neon-green'
                        }`}
                      />
                    </div>

                    {/* Factors */}
                    <div className="space-y-2">
                      {result.factors.map((f, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.2 }}
                          className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${riskColor(result.risk).replace('text-', 'bg-')}`} />
                          {f}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {!analyzing && !result && (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-muted-foreground font-mono text-sm"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-border flex items-center justify-center">
                      <span className="text-2xl opacity-30">⟐</span>
                    </div>
                    Awaiting input...
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetectionDemo;
