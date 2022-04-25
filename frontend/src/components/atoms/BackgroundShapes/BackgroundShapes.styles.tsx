import styled from 'styled-components';
import { MediaQuery } from 'data/enum/mediaQuery';
import { respondTo } from 'styles/util/respondTo';
import Shape01 from 'svg/shape-01.svg';
import Shape02 from 'svg/shape-02.svg';

export const StyledBackgroundShapes = styled.div`
  display: none;
  position: fixed;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;

  ${respondTo(MediaQuery.MIN_768)} {
    display: block;
  }
`;

export const StyledShape1 = styled(Shape01)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;
export const StyledShape2 = styled(Shape02)`
  position: absolute;
  top: -10rem;
  right: -10rem;
  z-index: 0;
`;
