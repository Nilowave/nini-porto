import type { MediaQuery } from '../../data/enum/mediaQuery';

export const respondTo = (query: MediaQuery): string => `only screen and ${query}`;
