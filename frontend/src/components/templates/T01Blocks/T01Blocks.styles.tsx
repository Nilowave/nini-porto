import { MediaQuery } from 'data/enum/mediaQuery';
import styled from 'styled-components';
import { typeStyle } from 'styles/typeStyle';
import { respondTo } from 'styles/util/respondTo';

export const StyledT01Blocks = styled.div`
  position: relative;
  grid-area: content;
  display: flex;
  flex-direction: column;

  ${respondTo(MediaQuery.MIN_768)} {
    gap: 1.6rem;
  }
`;

export const StyledBlock = styled.section`
  padding: 4rem 2rem;
  padding-bottom: 10rem;
  background-color: ${({ theme }) => theme.colors.white};

  ${respondTo(MediaQuery.MIN_768)} {
    border: solid 1px ${({ theme }) => theme.colors.cottonGrey};
    padding: 4rem 4.6rem;
  }
`;

export const StyledTitle = styled.h2`
  ${typeStyle.heading01};
  margin-bottom: 5rem;
  text-transform: uppercase;
`;
