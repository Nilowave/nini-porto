import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    opacity: 0.5;
  }
  
  50% {
    opacity: 0.2;
  }
  
  100% {
    opacity: 0.5;
  }
`;

export const StyledA00Loading = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  animation: ${pulse} 1s ease infinite;
`;
