import styled from 'styled-components';

export const StyledA05Image = styled.div<{
  size: number | string;
  rounded?: boolean | number;
  autoWidth?: boolean;
  autoHeight?: boolean;
  width?: string | number;
  height?: string | number;
  layout?: string;
}>`
  position: relative;
  overflow: hidden;

  width: ${({ size, autoWidth }) =>
    autoWidth ? 'auto' : typeof size === 'string' ? size : `${size}rem`};
  height: ${({ size, autoHeight }) =>
    autoHeight ? 'auto' : typeof size === 'string' ? size : `${size}rem`};

  ${({ width, layout }) =>
    width &&
    layout != 'responsive' &&
    `width: ${typeof width === 'string' ? width : `${width}px`}`};

  ${({ height, layout }) =>
    height &&
    layout != 'responsive' &&
    `height: ${typeof height === 'string' ? height : `${height}px`}`};

  ${({ rounded }) =>
    rounded && (rounded === true ? 'border-radius: 50%;' : `border-radius: ${rounded}px;`)};
`;
