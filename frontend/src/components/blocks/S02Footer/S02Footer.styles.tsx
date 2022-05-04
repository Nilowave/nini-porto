import { MediaQuery } from 'data/enum/mediaQuery';
import styled from 'styled-components';
import { RichText } from 'styles/layout';
import { typeStyle } from 'styles/typeStyle';
import { respondTo } from 'styles/util/respondTo';

export const StyledS02Footer = styled.div`
  ${typeStyle.body02};
  grid-area: content;
  text-align: center;
  padding: 2rem 0;
  min-height: 6rem;
  position: relative;
`;

export const StyledRichText = styled(RichText)`
  ${respondTo(MediaQuery.MAX_767)} {
    ${typeStyle.body02};
  }
`;
