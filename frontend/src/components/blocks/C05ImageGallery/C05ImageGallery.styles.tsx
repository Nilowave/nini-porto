import { MediaQuery } from 'data/enum/mediaQuery';
import styled from 'styled-components';
import { typeStyle } from 'styles/typeStyle';
import { respondTo } from 'styles/util/respondTo';

export const StyledC05ImageGallery = styled.div``;

export const TitleButtonsWrapper = styled.div`
  /* display: flex; */
  /* gap: 4rem; */
  padding: 0 4.4rem 2rem;
  overflow-x: auto;
  white-space: nowrap;
  margin: 0 -2rem;
`;

export const TitleButton = styled.button<{ isActive?: boolean }>`
  ${typeStyle.button};
  font-size: 1.8rem;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  display: inline;
  margin-right: 4rem;

  &:last-child {
    margin: 0;
  }

  &:hover {
    opacity: 1;
  }
`;

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 2px;
`;
