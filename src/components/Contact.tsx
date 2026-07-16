import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { profile } from '../data';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'abhishek-mali-0911', href: profile.linkedin },
    { icon: Github, label: 'GitHub', value: 'abhishekmali09', href: profile.github },
  ];

  return (
    <section id="contact" className="section-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          variant="dark"
          eyebrow="Contact"
          title={<>Let&apos;s <span className="text-gradient-static">build something</span></>}
          subtitle="Open to 2026 full-time roles and internships. Drop a message and I'll get back to you."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 rounded-[var(--radius)] border border-purple-100 bg-white/95 p-5 text-ink-900 shadow-[0_4px_24px_rgba(76,29,149,0.12)] transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(76,29,149,0.16)]"
                >
                  <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-ink-600 uppercase tracking-wider">{item.label}</p>
                    <p className="text-ink-900 font-medium">{item.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[var(--radius)] border border-purple-100 bg-white/95 p-8 text-ink-900 shadow-[0_4px_24px_rgba(76,29,149,0.12)]"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-ink-700 mb-1.5">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-light"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-ink-700 mb-1.5">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input-light"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-ink-700 mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input-light resize-none"
                  placeholder="Tell me about the role or project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full btn-white ${sent ? '!bg-emerald-500 !text-white' : ''}`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
