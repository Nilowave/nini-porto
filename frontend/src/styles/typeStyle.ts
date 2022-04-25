import { css } from 'styled-components';

export const typeStyle = {
  heading01: css`
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.1;
    letter-spacing: 0.128rem;
  `,
  heading02: css`
    font-weight: 700;
    font-size: 2.275rem;
    line-height: 1.1;
    letter-spacing: 0.128rem;
  `,
  heading03: css`
    font-weight: 400;
    font-size: 2.16rem;
    line-height: 1.1;
    letter-spacing: 0.128rem;
  `,
  body01: css`
    font-size: 1.6rem;
    line-height: 1.875;
    letter-spacing: 0.128rem;
  `,
  button: css`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.128rem;
    text-align: center;
    vertical-align: middle;
  `,
  caption: css`
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.128rem;
    text-transform: uppercase;
  `,
};

export type TypeStyleType = typeof typeStyle;
