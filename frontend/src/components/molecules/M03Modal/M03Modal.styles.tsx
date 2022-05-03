import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { respondTo } from 'styles/util/respondTo';
import { MediaQuery } from 'data/enum/mediaQuery';
import { typeStyle } from 'styles/typeStyle';
import { Flex } from 'styles/layout';

const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const StyledM03Modal = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  padding: 6rem 3rem;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: table;
`;

export const Background = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: url('/close.png'), auto;
`;

export const MiddleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;
export const ContentWrapper = styled(motion.div)`
  padding: 5rem;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  animation: ${appear} 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;

  ${respondTo(MediaQuery.MIN_480)} {
    max-width: 43rem;
  }
  ${respondTo(MediaQuery.MIN_768)} {
    max-width: calc(100% - 4rem);
  }
  ${respondTo(MediaQuery.MIN_1024)} {
    max-width: calc(100% - 6rem);
  }
  ${respondTo(MediaQuery.MIN_1280)} {
    max-width: 120rem;
  }
  ${respondTo(MediaQuery.MIN_1440)} {
    max-width: 140rem;
  }
  ${respondTo(MediaQuery.MIN_1920)} {
    max-width: 150rem;
  }
`;
export const Content = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  position: relative;
  text-align: left;
  width: 100%;
`;

export const Title = styled.h2`
  ${typeStyle.heading01};
  text-transform: uppercase;
`;

export const SubTitle = styled.p`
  ${typeStyle.bold};
  opacity: 0.6;
  margin-top: 0.5rem;
`;

export const Bold = styled.p`
  ${typeStyle.bold};
`;

export const Meta = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  row-gap: 0.5rem;
  font-size: 1.4rem;
  align-items: center;
`;

export const Projects = styled.div`
  margin-top: auto;
`;

export const Close = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: white;
  pointer-events: none;

  font-variation-settings: 'FILL' 1, 'wght' 700, 'GRAD' 200, 'opsz' 20;
`;
