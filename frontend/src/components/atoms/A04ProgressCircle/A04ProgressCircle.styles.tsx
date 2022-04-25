import styled from 'styled-components';

export const StyledA04ProgressCircle = styled.div`
  position: relative;
`;

export const Caption = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledSVG = styled.svg`
  width: 10rem;
  height: 10rem;
`;

export const OutlineCircle = styled.circle`
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.offWhite};
  stroke-width: 5px;
`;

export const ProgressCircle = styled.circle<{ progress: number }>`
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.primary};
  stroke-width: 5px;
  stroke-dasharray: 250;
  stroke-dashoffset: ${({ progress }) => progress && 250 - (progress * 250) / 100};
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
`;
