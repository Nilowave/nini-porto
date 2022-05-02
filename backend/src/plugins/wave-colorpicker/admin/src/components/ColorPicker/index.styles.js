import styled from "styled-components";

export const Title = styled.h5`
  margin-bottom: 1rem;
  color: #333740;
`;

export const ColorWindow = styled.div`
  background-color: ${(props) => props.color};
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: ${(props) => props.color === "#FFFFFF" && "1px solid #5B5F65"};
  margin-top: 1rem;
  border: solid 3px;
  outline: 3px solid ${({ themeColors }) => themeColors.neutral150};
  outline-offset: 2px;
  cursor: pointer;
  transition: outline 0.3s ease;

  &:hover {
    outline: 3px solid ${({ themeColors }) => themeColors.neutral400};
  }
`;

export const PopOver = styled.div`
  position: absolute;
  z-index: 2;
  top: 70px;
`;
export const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
