import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { journey, type JourneyStop } from '../data/profile';

type WrittenSlice = {
  written: string;
  rest: string;
  caret: boolean;
};

type WriteState = {
  active: number;
  chars: number;
  done: boolean;
};

const headingLines = ['Experience &', 'education.'];

const entryLines = (stop: JourneyStop) => {
  const organization = stop.href ? `${stop.organization} ↗` : stop.organization;
  return [stop.year, stop.title, organization, stop.summary, ...stop.highlights];
};

const script = journey.map(entryLines);
const lineTexts = [...headingLines, ...script.flat()];
const entryStart = script.reduce<number[]>((starts, lines) => {
  const previous = starts.length === 0 ? headingLines.length : starts[starts.length - 1] + script[starts.length - 1].length;
  starts.push(previous);
  return starts;
}, []);

const sliceFor = (index: number, text: string, state: WriteState): WrittenSlice => {
  if (state.done || index < state.active) {
    return { written: text, rest: '', caret: false };
  }
  if (index > state.active) {
    return { written: '', rest: text, caret: false };
  }
  const chars = Math.min(text.length, state.chars);
  return {
    written: text.slice(0, chars),
    rest: text.slice(chars),
    caret: chars < text.length,
  };
};

const Ink: React.FC<{ part: WrittenSlice; className?: string }> = ({ part, className }) => (
  <>
    <span className={className}>{part.written}</span>
    {part.caret ? <span className="write-caret" aria-hidden="true" /> : null}
    <span className={className ? `${className} write-rest` : 'write-rest'}>{part.rest}</span>
  </>
);

const WrittenHeading: React.FC<{ first: WrittenSlice; second: WrittenSlice }> = ({ first, second }) => (
  <h2
    className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.86]"
    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
  >
    <span className="block">
      <Ink
        part={first}
        className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]"
      />
    </span>
    <span className="block">
      <Ink
        part={second}
        className="text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]"
      />
    </span>
  </h2>
);

const JourneyEntry: React.FC<{ stop: JourneyStop; parts: WrittenSlice[]; started: boolean }> = ({ stop, parts, started }) => {
  const [year, title, org, summary, ...highlights] = parts;

  return (
    <div className="experience-stop relative flex flex-col md:flex-row items-start group">
      <div className="experience-stop-year hidden md:block w-[168px] shrink-0 pr-8 pt-1 text-right">
        <span className="text-[10px] font-mono tracking-[0.14em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
          <Ink part={year} />
        </span>
      </div>
      <div className="absolute left-[19px] md:left-[168px] top-1.5 -translate-x-1/2">
        <div
          className={`w-2.5 h-2.5 rounded-full border transition-colors ${
            started
              ? 'bg-[#D4AF37] border-[#D4AF37]'
              : 'bg-[#120F0C] border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37]'
          }`}
        />
      </div>
      <div className="experience-stop-card ml-12 pl-2 max-w-xl">
        <div className="md:hidden mb-1.5">
          <span className="text-[10px] font-mono tracking-[0.14em] text-[#D4AF37]">
            <Ink part={year} />
          </span>
        </div>
        <h3 className="experience-stop-title text-3xl sm:text-4xl tracking-wide text-white mb-1 leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          <Ink part={title} />
        </h3>
        {stop.href ? (
          <a
            href={stop.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[10px] font-medium tracking-[0.16em] uppercase text-[#8C6D4F] hover:text-[#D4AF37] mb-2 transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <Ink part={org} />
          </a>
        ) : (
          <span className="block text-[10px] font-medium tracking-[0.16em] uppercase text-[#8C6D4F] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Ink part={org} />
          </span>
        )}
        <div className="experience-stop-body">
        <p className="experience-stop-text font-light text-[#A8988B] leading-[1.7] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <Ink part={summary} />
        </p>
        <ul className="space-y-2">
          {highlights.map((item, index) => (
            <li key={stop.highlights[index]} className="experience-stop-text flex gap-2 font-light text-[#C4B5A5] leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <span
                className={`mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[#D4AF37] transition-opacity ${
                  item.written.length > 0 || item.caret ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden
              />
              <span>
                <Ink part={item} />
              </span>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

const readState = (value: number): WriteState => {
  const progress = Math.min(1, Math.max(0, value));
  if (progress >= 1) {
    return { active: lineTexts.length - 1, chars: lineTexts[lineTexts.length - 1].length, done: true };
  }
  const scaled = progress * lineTexts.length;
  const active = Math.min(lineTexts.length - 1, Math.floor(scaled));
  return { active, chars: Math.round((scaled - active) * lineTexts[active].length), done: false };
};

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 88%', 'end 62%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [write, setWrite] = useState<WriteState>({ active: 0, chars: 0, done: false });

  useEffect(() => {
    if (reduce) {
      setWrite({ active: lineTexts.length - 1, chars: lineTexts[lineTexts.length - 1].length, done: true });
      return;
    }

    const update = (value: number) => {
      const next = readState(value);
      setWrite((current) =>
        current.done === next.done && current.active === next.active && current.chars === next.chars ? current : next,
      );
    };

    update(scrollYProgress.get());
    return scrollYProgress.on('change', update);
  }, [reduce, scrollYProgress]);

  const parts = lineTexts.map((text, index) => sliceFor(index, text, write));
  const heading = parts.slice(0, headingLines.length);
  let cursor = headingLines.length;
  const entries = script.map((lines) => {
    const slice = parts.slice(cursor, cursor + lines.length);
    cursor += lines.length;
    return slice;
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="scroll-mt-20 relative w-full bg-black text-[#E8DFD8] pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4 mb-7"
        >
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            04 / Experience
          </span>
          <div className="w-20 h-px bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        <div className="mb-16">
          <WrittenHeading first={heading[0]} second={heading[1]} />
        </div>

        <div className="relative w-full">
          <div className="absolute left-[19px] md:left-[168px] top-4 bottom-8 w-px bg-[#8C6D4F]/20" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[168px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, index) => (
              <JourneyEntry
                key={stop.id}
                stop={stop}
                parts={entries[index]}
                started={write.done || write.active > entryStart[index] || (write.active === entryStart[index] && write.chars > 0)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
