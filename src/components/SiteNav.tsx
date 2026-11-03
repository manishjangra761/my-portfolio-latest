import React, { useEffect, useState } from 'react';
import { profile } from '../data/profile';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SiteNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass =
    'text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] hover:text-[#FFF5EB] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#D4AF37]';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'bg-black/85 backdrop-blur-md border-b border-[#8C6D4F]/30' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 sm:px-12 lg:px-16 h-16">
        <a
          href="#top"
          className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {profile.mark}
        </a>

        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`${linkClass} relative group py-1`}>
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4AF37]/70 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex text-[11px] tracking-[0.22em] uppercase text-[#BFA895] hover:text-[#EAD8C7] transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.22em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-colors"
          >
            Let&apos;s talk
            <span aria-hidden>↗</span>
          </a>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-[#8C6D4F]/50 text-[#EAD8C7]"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="text-lg leading-none">{open ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden border-t border-[#8C6D4F]/25 bg-black px-6 py-6 flex flex-col gap-5"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={linkClass} onClick={() => setOpen(false)}>
              {item.name}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
          <a href="#contact" className={linkClass} onClick={() => setOpen(false)}>
            Let&apos;s talk
          </a>
        </nav>
      )}
    </header>
  );
};

export default SiteNav;
