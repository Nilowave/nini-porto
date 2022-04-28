import styled from 'styled-components';

export const StyledA05Image = styled.div<{ size: number; rounded?: boolean }>`
  position: relative;
  overflow: hidden;
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};

  ${({ rounded }) => rounded && 'border-radius: 50%;'};
`;
