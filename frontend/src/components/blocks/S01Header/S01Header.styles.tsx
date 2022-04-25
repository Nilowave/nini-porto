import styled from 'styled-components';
import { MediaQuery } from 'data/enum/mediaQuery';
import { Container } from 'styles/layout';
import { respondTo } from 'styles/util/respondTo';

export const StyledS01Header = styled.header`
  position: relative;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.white};

  ${respondTo(MediaQuery.MAX_767)} {
    border-bottom: solid 1px ${({ theme }) => theme.colors.cottonGrey};
  }

  ${respondTo(MediaQuery.MIN_768)} {
    background-color: transparent;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;

  ${respondTo(MediaQuery.MIN_768)} {
    height: 5rem;
  }
`;

export const StyledLogo = styled.img`
  grid-area: content;
  max-height: 4.5rem;
  width: auto;
`;
