import { A05Image } from 'components/atoms/A05Image/A05Image';
import { MediaQuery } from 'data/enum/mediaQuery';
import styled from 'styled-components';
import { RichText } from 'styles/layout';
import { typeStyle } from 'styles/typeStyle';
import { respondTo } from 'styles/util/respondTo';

export const StyledC07References = styled.ul``;

export const ListItem = styled.li`
  padding: 5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cottonGrey};
  display: grid;
  justify-content: flex-start;
  grid-template:
    'image heading'
    'image text';
  grid-template-columns: 5.2rem auto;
  column-gap: 2rem;
  align-items: center;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
    border: none;
  }

  ${respondTo(MediaQuery.MIN_1024)} {
    padding: 5rem 0;
    margin: 0 7rem;
  }
`;

export const StyledImage = styled(A05Image)`
  grid-area: image;
  text-align: left;
`;

export const StyledHeading = styled.div`
  grid-area: heading;
`;

export const StyledTitle = styled.h4`
  ${typeStyle.button};
  grid-area: title;
  text-align: left;
  text-transform: uppercase;
`;

export const StyledSubTitle = styled.h5`
  ${typeStyle.body02};
  grid-area: subtitle;
  text-align: left;
  color: ${({ theme }) => theme.colors.grey};
`;

export const StyledText = styled(RichText)`
  ${typeStyle.body02};
  grid-area: text;
  text-align: left;
  margin-top: 1.6rem;
`;
