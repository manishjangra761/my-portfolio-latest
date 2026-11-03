import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';
import { profile } from '../data/profile';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const [overHero, setOverHero] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const updatePointer = () => setFinePointer(media.matches);
    updatePointer();
    media.addEventListener('change', updatePointer);

    const handleMouseMove = (event: MouseEvent) => {
      setCursorPos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      media.removeEventListener('change', updatePointer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.play().catch(() => {});
          return;
        }
        video.pause();
      },
      { threshold: 0.05 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="top"
      onMouseEnter={() => setOverHero(true)}
      onMouseLeave={() => setOverHero(false)}
      className={`relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black ${
        finePointer && overHero ? 'cursor-none' : ''
      }`}
    >
      {finePointer && overHero && cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/40 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      <div className="hero-media overflow-hidden pointer-events-none bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="hidden md:flex absolute bottom-6 right-6 lg:bottom-10 lg:right-12 items-center justify-center z-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-black/85 rounded-full blur-xl" />
            <motion.div
              animate={{ y: [-3, 3, -3], scale: [1, 1.03, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex items-center justify-center"
            >
              <img
                src={watermarkImg}
                alt=""
                className="w-28 h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="hero-copy relative z-10 flex flex-col justify-center min-h-[100svh] w-full px-6 sm:px-12 lg:px-16 pt-24 pb-12 pointer-events-none">
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl lg:max-w-[40rem] pointer-events-auto z-20"
          >
            <motion.p
              variants={fadeUpVariants}
              className="mb-4 text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Software Developer
            </motion.p>

            <motion.div variants={fadeUpVariants} className="relative mb-4 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[7.6rem] tracking-tight uppercase leading-[0.84]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  I build
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  production
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  software
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              className="mb-4 text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.22em] uppercase text-[#C4B29E]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Full Stack Developer <span className="text-[#8C6D4F] mx-1">•</span> MERN Stack{' '}
              <span className="text-[#8C6D4F] mx-1">•</span> DevOps 
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.85] tracking-wide max-w-xl mb-7"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {profile.summary}
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-300"
              >
                <span>Explore my work</span>
                <span aria-hidden>↗</span>
              </motion.a>
              <motion.a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-300"
              >
                <span>Download resume</span>
                <span aria-hidden>↓</span>
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[10px] tracking-[0.22em] uppercase text-[#8C6D4F]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <a className="hover:text-[#EAD8C7] transition-colors" href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="hover:text-[#EAD8C7] transition-colors" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="hover:text-[#EAD8C7] transition-colors" href={`mailto:${profile.email}`}>
                Email
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-none pr-24 xl:pr-36 z-20 select-none"
          >
            <span className="text-xl text-[#C99E5D] leading-none font-serif mb-2">“</span>
            <div
              className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#E0D3C5] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>Clear interfaces.</p>
              <p>APIs that hold.</p>
            </div>
            <div className="w-28 h-px bg-gradient-to-r from-[#D4AF37] via-[#E8D7C5]/70 to-transparent mb-2" />
            <div
              className="text-[2.4rem] text-[#D8AB64] font-normal leading-none"
              style={{ fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive" }}
            >
              {profile.signature}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="hero-stick-runway" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;
