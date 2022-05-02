import styled from 'styled-components';
import { motion } from 'framer-motion';
import { typeStyle } from 'styles/typeStyle';
import { RichText } from 'styles/layout';
import { A01Button } from 'components/atoms/A01Button/A01Button';

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  flex-direction: column;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
`;

export const Title = styled.h3`
  ${typeStyle.heading01};
  font-size: 2.1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  transform: translateY(-10px);
  transition: transform 0.4s ease;
`;

export const Text = styled(RichText)`
  ${typeStyle.body01};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
`;

export const StyledButton = styled(A01Button)`
  transform: translateY(10px);
  transition: transform 0.4s ease;
`;

export const StyledProject = styled(motion.button)`
  height: max-content;
  overflow: hidden;
  border-radius: 3px;
  position: relative;

  img {
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    ${Overlay} {
      opacity: 1;
    }

    ${StyledButton} {
      transform: translateY(0);
    }
    ${Title} {
      transform: translateY(0);
    }
  }
`;
