import hexToRgba from 'hex-to-rgba';

export const color = {
  white: '#fff',
};

export const theme = {
  color,
  boxShadow: {
    A: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    B: '1px 1px 5px rgba(0, 0, 0, 0.1)',
  },
  fonts: {
    quicksand: 'Quicksand, sans-serif;',
  },
  sitePadding: '2rem',
  utils: {
    hexToRgba,
  },
};

export type ThemeType = typeof theme;
export type ColorType = ThemeType['color'][keyof ThemeType['color']];
export type ColorKey = keyof ThemeType['color'];

// Overwrite styled-components DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
