import { gsap, Power2 } from 'gsap';

export const baseComponentTransition = (
  elements: ReadonlyArray<HTMLElement | null> | HTMLElement,
  props?: any,
) => {
  return gsap.from(elements, {
    duration: 1,
    y: 20,
    opacity: 0,
    ease: Power2.easeOut,
    clearProps: 'all',
    stagger: 0.1,
    ...props,
  });
};
