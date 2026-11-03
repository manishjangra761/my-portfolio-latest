import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { skillGroups } from '../data/profile';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-20 relative w-full bg-black text-[#E8DFD8] pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4 mb-7"
        >
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            03 / Skills
          </span>
          <div className="w-20 h-px bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.86]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              The stack
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              behind the work.
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {skillGroups.map((block) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`${block.colSpan} relative p-7 sm:p-9 border border-[#8C6D4F]/35 bg-[#100D0B]/85 overflow-hidden hover:border-[#D4AF37]/80 transition-colors`}
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/50" />
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">{block.badge}</span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#8C6D4F]/40 text-[#C4B5A5]">{block.stat}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl tracking-wide text-white mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {block.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A8988B] font-light leading-relaxed mb-7 max-w-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {block.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8C6D4F]/20">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-[10.5px] font-medium tracking-[0.14em] uppercase border border-[#8C6D4F]/35 bg-[#171310] text-[#E8D7C5]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
