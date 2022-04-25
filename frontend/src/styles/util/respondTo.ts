import type { MediaQuery } from '../../data/enum/mediaQuery';

export const respondTo = (query: MediaQuery): string => `@media only screen and ${query}`;
