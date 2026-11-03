import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import portrait from '../assets/portrait.png';
import { practices, profile, stats } from '../data/profile';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), { damping: 18, stiffness: 220 });
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 240px at ${x}px ${y}px, rgba(255,255,255,0.35), rgba(212,175,55,0.18), transparent 80%)`,
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
    spotlightX.set(event.clientX - rect.left);
    spotlightY.set(event.clientY - rect.top);
  };

  return (
    <section
      id="about"
      className="scroll-mt-20 relative w-full bg-black text-[#E8DFD8] py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-[#D4AF37] rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-10"
        >
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            01 / About
          </span>
          <div className="w-20 h-px bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
                  Full stack,
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                  in production.
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-[#B3A497] leading-[1.85] tracking-wide mb-8 max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I&apos;m <span className="text-[#F3DBB3] font-medium">{profile.name}</span>, a {profile.role.toLowerCase()} currently
              working as a Software Developer at Delve Professionals Pvt. Ltd. in Rohtak. Before that I built education-platform
              features at Qvolv Technologies in Noida, and ONDC domain workflows at SequelString AI in New Delhi. I completed an MCA
              at Maharshi Dayanand University, Rohtak, and full-stack training at QSpiders.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="grid sm:grid-cols-3 gap-3 mb-8">
              {practices.map((item) => (
                <div key={item.title} className="border border-[#8C6D4F]/30 bg-[#120F0C]/70 p-4">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[#D4AF37] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {item.title}
                  </p>
                  <p className="text-xs text-[#C4B5A5] leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUpVariants} className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#8C6D4F]/25">
              {stats.map((item, index) => (
                <div key={item.label} className="flex flex-col">
                  <span
                    className={`text-3xl sm:text-4xl font-light tracking-tight ${index % 2 === 1 ? 'text-[#D4AF37]' : 'text-[#F4EBE2]'}`}
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.value}
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#A8988B] mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px]">
            <motion.div
              animate={{ scale: isCardHovered ? 1.12 : 1, opacity: isCardHovered ? 0.3 : 0.14 }}
              transition={{ duration: 0.6 }}
              className="absolute -inset-6 bg-[conic-gradient(from_0deg,#D4AF37_0%,#8C6D4F_30%,transparent_60%,#D4AF37_100%)] blur-2xl rounded-3xl pointer-events-none"
            />
            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => {
                setIsCardHovered(false);
                mouseX.set(0);
                mouseY.set(0);
              }}
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-3.5 border border-[#8C6D4F]/40 rounded-sm bg-[#120F0C]/80 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] group hover:border-[#D4AF37]/80 transition-colors"
            >
              <div className="pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]" />
              </div>
              <div className="relative overflow-hidden w-full max-w-[390px] aspect-[4/5] bg-black">
                <img
                  src={portrait}
                  alt="Portrait of Manish Jangra"
                  className="w-full h-full object-cover object-top"
                />
                <motion.div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay"
                  style={{ background: spotlightBg, opacity: isCardHovered ? 1 : 0 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between">
                  <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <p className="text-[10px] tracking-[0.22em] uppercase text-[#D4AF37]">Currently</p>
                    <p className="text-sm text-[#F4EBE2]">Delve Professionals</p>
                  </div>
                  <span className="text-3xl text-[#F2D8A7]" style={{ fontFamily: "'Herr Von Muellerhoff', cursive" }}>
                    {profile.signature}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
