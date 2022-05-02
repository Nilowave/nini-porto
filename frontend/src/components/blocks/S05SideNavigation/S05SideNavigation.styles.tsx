import styled from 'styled-components';
import { MediaQuery } from 'data/enum/mediaQuery';
import { respondTo } from 'styles/util/respondTo';

export const StyledS05SideNavigation = styled.div`
  grid-area: navigation;

  ${respondTo(MediaQuery.MAX_767)} {
    overflow-x: auto;
    padding: 0 ${({ theme }) => theme.sitePadding};
  }
`;

export const ContentWrapper = styled.nav`
  top: 1rem;
  z-index: 10;
  white-space: nowrap;

  ${respondTo(MediaQuery.MIN_768)} {
    position: sticky;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
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
