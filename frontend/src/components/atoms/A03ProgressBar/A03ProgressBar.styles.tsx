import styled from 'styled-components';

export const StyledA03ProgressBar = styled.div`
  width: 100%;
  position: relative;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  position: relative;
  overflow: hidden;
`;

export const Progress = styled.div<{ progress: number }>`
  position: absolute;
  top: 0;
  left: 0px;
  ${({ progress }) => progress && `width: ${progress}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Caption = styled.p`
  position: absolute;
  right: 0;
  top: -1.5rem;
  transform: translateY(-100%);
`;
