import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { FaGithub } from 'react-icons/fa6';
import { profile } from '../data';
import SectionHeading from './SectionHeading';

type ContactFormElement = HTMLFormElement & {
  user_username: HTMLInputElement;
  user_email: HTMLInputElement;
  user_message: HTMLTextAreaElement;
};

export default function Contact() {
  const formRef = useRef<ContactFormElement | null>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;

    if (!form) {
      setError(true);
      setSent(false);
      return;
    }

    const name = form.user_username.value.trim();
    const email = form.user_email.value.trim();
    const message = form.user_message.value.trim();

    if (!name || !email || !message) {
      setError(true);
      setSent(false);
      return;
    }

    setLoading(true);
    setError(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        () => {
          setSent(true);
          setError(false);
          form.reset();
          setTimeout(() => setSent(false), 3000);
        },
        (err) => {
          console.log(err);
          setError(true);
          setSent(false);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'abhishek-mali-09', href: profile.linkedin },
    { icon: FaGithub, label: 'GitHub', value: 'abhishekmali09', href: profile.github },
  ];

  let buttonContent: ReactNode;

  if (loading) {
    buttonContent = 'Sending...';
  } else if (sent) {
    buttonContent = (
      <>
        <CheckCircle2 size={18} /> Message Sent!
      </>
    );
  } else {
    buttonContent = (
      <>
        Send Message <Send size={18} />
      </>
    );
  }

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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink-600">{item.label}</p>
                    <p className="font-medium text-ink-900">{item.value}</p>
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
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label htmlFor="user_username" className="mb-1.5 block text-sm text-ink-700">
                  Name
                </label>
                <input
                  required
                  name="user_username"
                  id="user_username"
                  className="input-light"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="mb-1.5 block text-sm text-ink-700">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="user_email"
                  id="user_email"
                  className="input-light"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="user_message" className="mb-1.5 block text-sm text-ink-700">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  name="user_message"
                  id="user_message"
                  className="input-light resize-none"
                  placeholder="Tell me about the role or project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className={`w-full btn-white ${sent ? '!bg-emerald-500 !text-white' : ''}`}
              >
                {buttonContent}
              </motion.button>
              {error ? (
                <p className="text-sm text-red-600">Please check the form details and try again.</p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}