import styled from 'styled-components';
import { MediaQuery } from 'data/enum/mediaQuery';
import { respondTo } from 'styles/util/respondTo';

export const StyledImageWrapper = styled.div`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  margin: 1rem 0;

  ${respondTo(MediaQuery.MIN_768)} {
    width: 3rem;
    height: 3rem;
  }
`;

export const StyledCaption = styled.div<{ align: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  padding: 0 2rem;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  pointer-events: none;
  z-index: 2;
  box-shadow: 0 7px 15px 1px rgb(0 0 0 / 20%);
  transition: opacity 0.3s ease;

  left: ${({ align }) => (align === 'left' ? 0 : 'auto')};
  right: ${({ align }) => (align === 'right' ? 0 : 'auto')};
  transform: translateY(-50%)
    ${({ align }) =>
      align === 'left' ? 'translateX(calc(-100% - 1.6rem))' : 'translateX(calc(100% + 1.6rem))'};

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${({ align }) => (align === 'left' ? 'calc(100% - 0.5rem)' : '-0.5rem')};
    width: 1rem;
    height: 1rem;
    transform: translateY(-50%) rotate(45deg);
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledMenuLink = styled.a`
  position: relative;

  &:first-of-type ${StyledImageWrapper} {
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    overflow: hidden;
  }

  @media (hover: hover) {
    &:hover ${StyledCaption} {
      opacity: 1;
    }
  }
`;
