import styled from 'styled-components';
import { respondTo } from 'styles/util/respondTo';
import { MediaQuery } from 'data/enum/mediaQuery';
import { motion } from 'framer-motion';
import { typeStyle } from 'styles/typeStyle';

export const StyledProjectDetails = styled.div``;

export const Content = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  position: relative;
  text-align: left;
  width: 100%;

  ${respondTo(MediaQuery.MIN_768)} {
    gap: 5rem;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Title = styled.h2`
  ${typeStyle.heading02};
  text-transform: uppercase;

  ${respondTo(MediaQuery.MIN_768)} {
    ${typeStyle.heading01};
  }
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
