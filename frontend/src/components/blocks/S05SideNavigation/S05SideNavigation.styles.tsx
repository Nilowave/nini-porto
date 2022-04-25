import styled from 'styled-components';
import { MediaQuery } from 'data/enum/mediaQuery';
import { respondTo } from 'styles/util/respondTo';

export const StyledS05SideNavigation = styled.nav`
  grid-area: navigation;
`;

export const ContentWrapper = styled.nav`
  position: sticky;
  top: 1rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  z-index: 10;

  ${respondTo(MediaQuery.MIN_768)} {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const StyledIconLink = styled.a`
  position: relative;
  width: 3rem;
  height: 3rem;
  margin: 1rem 0;

  &:first-of-type {
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    overflow: hidden;
  }
`;
