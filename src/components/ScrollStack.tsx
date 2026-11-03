import React, { useLayoutEffect, useRef } from 'react';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
}) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 0,
  itemStackDistance = 0,
  stackPosition = '88px',
  blurAmount = 2,
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 767px)');
    let frame = 0;

    // 100svh does not change when the mobile browser bar shows or hides.
    // Reading innerHeight here made every card jump while scrolling.
    const heightProbe = document.createElement('div');
    heightProbe.setAttribute('aria-hidden', 'true');
    heightProbe.style.cssText =
      'position:absolute;left:0;top:0;width:0;height:100svh;visibility:hidden;pointer-events:none;';
    document.body.appendChild(heightProbe);

    const surfaceOf = (card: HTMLElement) => (card.firstElementChild as HTMLElement | null) ?? card;

    const viewportHeight = () => heightProbe.offsetHeight || window.innerHeight;

    const layout = () => {
      const vh = viewportHeight();
      const stackTop = stackPosition.endsWith('px')
        ? parseFloat(stackPosition)
        : (parseFloat(stackPosition) / 100) * vh;
      const bottomGap = 20;

      cards.forEach((card, index) => {
        const room = vh - stackTop - bottomGap;
        const fits = card.offsetHeight <= room;
        const top = fits
          ? stackTop + itemStackDistance * index
          : vh - card.offsetHeight - bottomGap;

        card.style.position = 'sticky';
        card.style.top = `${top}px`;
        card.style.zIndex = `${index + 1}`;
        card.style.marginBottom = index < cards.length - 1 ? `${itemDistance}px` : '0px';
      });
    };

    const clearBlur = () => {
      cards.forEach((card) => {
        surfaceOf(card).style.filter = '';
      });
    };

    const paint = () => {
      frame = 0;
      // Blur on these tall sticky cards forces a new graphics layer per project.
      // Phones then paint a black tile and the card looks like it reloads.
      if (mobile.matches || blurAmount <= 0 || reduceMotion.matches) {
        clearBlur();
        return;
      }

      const vh = viewportHeight();
      cards.forEach((card, index) => {
        const surface = surfaceOf(card);
        const next = cards[index + 1];
        if (!next) {
          surface.style.filter = '';
          return;
        }

        const currentBox = card.getBoundingClientRect();
        const nextBox = next.getBoundingClientRect();
        const overlap = currentBox.bottom - nextBox.top;
        if (overlap <= 0 || currentBox.bottom < 0 || currentBox.top > vh) {
          surface.style.filter = '';
          return;
        }

        const entered = vh - nextBox.top;
        const progress = Math.min(1, Math.max(0, entered / (vh * 0.72)));
        const blur = progress * blurAmount;
        surface.style.filter = blur > 0.35 ? `blur(${blur.toFixed(2)}px)` : '';
      });
    };

    const onScroll = () => {
      if (mobile.matches || frame) return;
      frame = requestAnimationFrame(paint);
    };

    const onModeChange = () => {
      layout();
      paint();
    };

    layout();
    paint();

    const observer = new ResizeObserver(() => {
      layout();
    });
    observer.observe(root);

    window.addEventListener('scroll', onScroll, { passive: true });
    reduceMotion.addEventListener('change', onModeChange);
    mobile.addEventListener('change', onModeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      reduceMotion.removeEventListener('change', onModeChange);
      mobile.removeEventListener('change', onModeChange);
      if (frame) cancelAnimationFrame(frame);
      heightProbe.remove();
      clearBlur();
    };
  }, [blurAmount, itemDistance, itemStackDistance, stackPosition, children]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
