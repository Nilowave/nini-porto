import { css } from 'styled-components';

export const typeStyle = {
  heading01: css``,
  heading02: css`
    font-weight: 700;
    font-size: 2.275rem;
    line-height: 1.1;
    letter-spacing: 0.128rem;
  `,
  body01: css`
    font-size: 1.6rem;
    line-height: 1.875;
    letter-spacing: 0.128rem;
  `,
};

export type TypeStyleType = typeof typeStyle;
