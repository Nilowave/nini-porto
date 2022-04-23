import styled from 'styled-components';
import { MediaQuery } from '../data/enum/mediaQuery';
import { respondTo } from './util/respondTo';

export const Container = styled.div`
  max-width: 119.6rem;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  @media ${respondTo(MediaQuery.MIN_768)} {
    column-gap: 1rem;
    display: grid;
    grid-template: 'profile content navigation' 1fr/32rem auto 4.6rem;
  }
`;

export const SitePadding = styled.div`
  padding: 0 ${({ theme }) => theme.sitePadding};
`;

export const DesktopPadding = styled.div`
  @media ${respondTo(MediaQuery.MIN_768)} {
    padding: 0 ${({ theme }) => theme.sitePadding};
  }
`;
