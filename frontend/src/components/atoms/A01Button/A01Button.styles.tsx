import styled, { css } from 'styled-components';
import { typeStyle } from 'styles/typeStyle';
import { useContrastingTextColor } from 'util/useContrastingTextColor';

export const StyledA01Button = styled.button<{ outline?: boolean; big?: boolean }>`
  ${typeStyle.button};
  padding: 1rem 2.5rem;
  border-radius: 3.5rem;
  box-shadow: transparent 0 0 0;
  transition: box-shadow 0.3s ease;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${({ theme }) =>
    useContrastingTextColor(theme.colors.primary, theme.colors.white, theme.colors.black)};

  ${({ big }) =>
    big &&
    css`
      padding: 1.4rem 3.5rem;
      gap: 1.4rem;
    `}

  ${({ outline }) =>
    outline &&
    css`
      border: solid 2px ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.black};
      background-color: transparent;
    `}

  @media (hover: hover) {
    &:hover {
      box-shadow: -1px 2px 4px rgb(0 0 0 / 25%);
    }
  }
`;

export const StyledIcon = styled.span`
  font-size: 1.8rem;
`;
