import Image from 'next/image';
import styled from 'styled-components';
import { MediaQuery } from '../../../data/enum/mediaQuery';
import { typeStyle } from '../../../styles/typeStyle';
import { respondTo } from '../../../styles/util/respondTo';

export const StyledS03ProfileCard = styled.div`
  position: relative;
  grid-area: profile;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};

  @media ${respondTo(MediaQuery.MIN_768)} {
    width: 29rem;
    margin-right: 3rem;
    box-shadow: -4px 7px 15px 1px rgb(0 0 0 / 20%);
  }

  & > :last-child {
    margin-bottom: 0;
  }

  > ::selection {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledImage = styled(Image)`
  position: absolute;
`;

export const ImageWrapper = styled.div`
  transition: opacity 0.5s ease;

  &:last-child {
    opacity: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 19.5rem;
  height: 19.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 3.3rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      ${ImageWrapper}:last-child {
        opacity: 1;
      }
    }
  }
`;

export const StyledHeading = styled.h2`
  ${typeStyle.heading02};
  margin-bottom: 1.6rem;
`;

export const StyledParagraph = styled.p`
  ${typeStyle.body01};
  margin-bottom: 2.2rem;
`;
