import hexToRgba from 'hex-to-rgba';

export const colors = {
  white: '#fff',
  black: '#000',
  offWhite: '#f3f3f3',
  cottonGrey: '#e1e1e1',
  grey: '#757575',
  primary: '#c0e3e7',
};

export const theme = {
  colors,
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
export type ColorType = ThemeType['colors'][keyof ThemeType['colors']];
export type ColorKey = keyof ThemeType['colors'];

// Overwrite styled-components DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
