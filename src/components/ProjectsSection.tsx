import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { earlierBuilds, profile, projects } from '../data/profile';
import type { EarlierBuild, ProjectHighlight } from '../data/profile';

function HighlightGrid({ highlights }: { highlights: ProjectHighlight[] }) {
  return (
    <div>
      <span className="text-[10px] font-medium tracking-[0.28em] uppercase text-[#FFD45A]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Key highlights
      </span>
      <div className="mt-3 grid sm:grid-cols-2 gap-3">
        {highlights.map((item, index) => {
          const spansRow = highlights.length % 2 === 1 && index === highlights.length - 1;
          return (
            <div
              key={item.title}
              className={`border border-[#FFD45A]/45 bg-[#120E08] p-4 ${spansRow ? 'sm:col-span-2' : ''}`}
            >
              <h4 className="highlight-title-gold text-[13px] font-semibold mb-1.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {item.title}
              </h4>
              <p className="text-[12px] font-light text-[#B3A497] leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SiteCard({ build }: { build: EarlierBuild }) {
  return (
    <article className="border border-[#8C6D4F]/35 bg-[#100D0B] p-5 flex flex-col gap-4">
      <h4 className="project-name-gold text-3xl uppercase leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{build.title}</h4>
      <p className="text-xs sm:text-sm font-light text-[#B3A497] leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>{build.description}</p>
      {build.tech.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {build.tech.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-[10px] tracking-[0.12em] uppercase border border-[#8C6D4F]/35 text-[#E8D7C5]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {tech}
            </span>
          ))}
        </div>
      )}
      <HighlightGrid highlights={build.highlights} />
      <div className="mt-auto flex flex-wrap gap-3">
        {build.liveUrl && (
          <a href={build.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.16em] uppercase text-[#D4AF37] hover:text-[#F7E7C4]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Live site ↗
          </a>
        )}
        {build.githubUrl && (
          <a href={build.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.16em] uppercase text-[#D4AF37] hover:text-[#F7E7C4]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Repository ↗
          </a>
        )}
      </div>
    </article>
  );
}

const actionClass =
  'inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#FFD45A] bg-[#16120A] hover:border-[#FFE58A] hover:bg-[#FFD45A] text-[#FFE7A8] hover:text-black text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-300';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="work" className="scroll-mt-20 relative w-full bg-black text-[#E8DFD8] pt-20 pb-28 px-6 sm:px-12 lg:px-20">
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4 mb-5"
        >
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            02 / Featured work
          </span>
          <div className="w-20 h-px bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.86]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              Selected
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              platforms.
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Production platforms and live sites across real estate, IT, education, and marketing.
          </p>
        </motion.div>

        <ScrollStack itemDistance={0} itemScale={0} itemStackDistance={0} stackPosition="88px" scaleEndPosition="88px" baseScale={1} useWindowScroll>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <article className="relative w-full border border-[#FFD45A] bg-[#0C0A07] p-6 sm:p-10 shadow-[0_0_28px_rgba(255,212,90,0.16),0_25px_70px_rgba(0,0,0,0.98)] group hover:border-[#FFE58A] hover:shadow-[0_0_36px_rgba(255,212,90,0.28),0_25px_70px_rgba(0,0,0,0.98)] transition-colors">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFE58A] to-transparent" />
                <span className="absolute -bottom-4 -right-1 text-8xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {project.number}
                </span>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono font-bold text-[#FFD45A]">{project.number} //</span>
                      <span className="text-[10.5px] font-mono tracking-[0.18em] uppercase text-[#A8988B]">{project.category}</span>
                    </div>
                    <h3 className="project-name-gold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4 uppercase leading-[0.9]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-[#BDB0A4] leading-[1.85] mb-5 max-w-2xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {project.description}
                    </p>
                    {project.contributions.length > 0 && (
                      <ul className="space-y-2 mb-6">
                        {project.contributions.map((item) => (
                          <li key={item} className="flex gap-2 text-xs sm:text-sm font-light text-[#C4B5A5] leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#FFD45A]" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-5 border-t border-[#FFD45A]/25">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-[10px] font-medium tracking-[0.14em] uppercase border border-[#FFD45A]/55 bg-[#16120A] text-[#FFE7A8]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-5 flex flex-col gap-4 lg:pl-6 lg:border-l lg:border-[#FFD45A]/30">
                    <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#FFD45A]">// Project facts</span>
                    {project.facts.map((fact) => (
                      <div key={fact.label} className="p-3.5 border border-[#FFD45A]/35 bg-[#050403] flex items-center justify-between gap-4">
                        <span className="text-[10px] font-mono text-[#A8988B]">{fact.label}</span>
                        <span className="text-[11px] font-mono text-[#F7E7C4] text-right">{fact.value}</span>
                      </div>
                    ))}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={actionClass} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        View live site <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-[#FFD45A]/30 relative z-10">
                  <HighlightGrid highlights={project.highlights} />
                </div>
              </article>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        <div className="relative z-20 mt-2 bg-black pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.86]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
                Personal
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                projects.
              </span>
            </h3>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.2em] uppercase text-[#D4AF37] hover:text-[#F7E7C4] pb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              GitHub profile ↗
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {earlierBuilds.map((build) => (
              <SiteCard key={build.title} build={build} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
