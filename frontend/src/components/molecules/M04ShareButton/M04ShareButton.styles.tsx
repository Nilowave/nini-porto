import styled from 'styled-components';
import { Flex } from 'styles/layout';

export const ShareList = styled(Flex)`
  overflow: hidden;
  width: 0;
  transition: width 0s linear 0.3s;
`;

export const ShareIconButton = styled.button<{ color?: string; index: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  width: 4.2rem;
  height: 4.2rem;
  opacity: 0;
  transform: scale(0);
  ${({ color }) => color && `background-color: ${color}`};
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.3s ease ${({ index }) => `${index * 0.1}s`},
    transform 0.3s ease ${({ index }) => `${index * 0.1}s`}, color 0.2s ease,
    background-color 0.2s ease, border-color 0.2s ease;
  border: solid 1px transparent;

  &:hover {
    transition-delay: 0 !important;
    color: ${({ color }) => color};
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ color }) => color};
  }
`;

export const StyledM04ShareButton = styled(Flex)`
  &:hover {
    ${ShareList} {
      display: flex;
      width: 100%;
      transition: width 0s linear;
    }
    ${ShareIconButton} {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
