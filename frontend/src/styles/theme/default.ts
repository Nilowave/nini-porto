import hexToRgba from 'hex-to-rgba';

export const colors = {
  white: '#fff',
  black: '#000',
  offWhite: '#f3f3f3',
  cottonGrey: '#e1e1e1',
  grey: '#757575',
  background: '#f3f3f3',
  secondary: '#e1e1e1',
  primary: '#c0e3e7',
};

export const theme = {
  colors,
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

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
