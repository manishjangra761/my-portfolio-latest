import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactChannels, profile } from '../data/profile';

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';
const EMAILJS_SERVICE = 'service_d7svy1m';
const EMAILJS_TEMPLATE = 'template_pi74hr7';
const EMAILJS_PUBLIC_KEY = 'VBpboKP9Skvjp8Cah';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${formData.name || 'a visitor'}`)}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`)}`;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch(EMAILJS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE,
          template_id: EMAILJS_TEMPLATE,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            user_name: formData.name,
            user_email: formData.email,
            message: formData.message,
            from_name: formData.name,
            reply_to: formData.email,
          },
        }),
      });
      if (!response.ok) throw new Error('Email request failed');
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="scroll-mt-20 relative w-full bg-black text-[#E8DFD8] pt-16 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center space-x-4 mb-5">
              <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                05 / Contact
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.86] mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">Let&apos;s</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">talk.</span>
            </motion.h2>
            <p className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              I&apos;m open to full-time software engineering roles. Write with a role, a product question, or a collaboration.
            </p>
            <div className="space-y-3">
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-baseline justify-between gap-6 border-b border-[#8C6D4F]/20 py-3 group"
                >
                  <span className="shrink-0 text-[10px] tracking-[0.2em] uppercase text-[#8C6D4F]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{channel.label}</span>
                  <span className="text-sm text-[#F4EBE2] group-hover:text-[#D4AF37] transition-colors text-right" style={{ fontFamily: "'Montserrat', sans-serif" }}>{channel.value}</span>
                </a>
              ))}
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="inline-flex mt-4 text-[11px] tracking-[0.2em] uppercase text-[#D4AF37] hover:text-[#F7E7C4]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Download resume ↓
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full border border-[#8C6D4F]/40 bg-[#0A0806] p-6 sm:p-10 lg:col-span-7"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            {status === 'sent' ? (
              <div className="py-16 text-center space-y-4">
                <h3 className="text-4xl text-white uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Message sent</h3>
                <p className="text-xs text-[#A8988B]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Thanks. I&apos;ll reply at the email you entered.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="text-[11px] tracking-[0.2em] uppercase text-[#D4AF37]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">Name</span>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-sm text-white px-4 py-3 outline-none"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </label>
                  <label className="block">
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">Email</span>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-sm text-white px-4 py-3 outline-none"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">Message</span>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-sm text-white p-4 outline-none resize-y min-h-[140px]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </label>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.22em] uppercase transition-colors disabled:opacity-60"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                {status === 'error' && (
                  <p className="text-xs text-[#E7C7A1] leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    The form could not send just now.{' '}
                    <a className="underline text-[#F7E7C4]" href={mailtoHref}>Email {profile.email} directly</a>.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>

        <div className="pt-14 mt-14 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            {profile.name} · Full Stack Developer
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">© {new Date().getFullYear()} · Rohtak</span>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
