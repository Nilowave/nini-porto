import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollTransition = (
  trigger: HTMLElement,
  animation: gsap.core.Animation,
  props?: any,
) => {
  return ScrollTrigger.create({
    trigger,
    animation,
    toggleActions: 'play complete none none',
    start: 'top 90%',
    ...props,
  });
};

export const scrollToggleCallback = (trigger: HTMLElement, callback: () => void, props?: any) =>
  ScrollTrigger.create({
    trigger,
    onToggle: (self) => callback(),
    start: 'top 80%',
    ...props,
  });
