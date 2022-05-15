import { MediaQuery } from 'data/enum/mediaQuery';
import styled, { css } from 'styled-components';
import { typeStyle } from 'styles/typeStyle';
import { respondTo } from 'styles/util/respondTo';
import { useContrastingTextColor } from 'util/useContrastingTextColor';

export const StyledC09Calendar = styled.div`
  margin-bottom: 3rem;
`;

export const CalendarWrapper = styled.div`
  overflow-x: auto;

  ${respondTo(MediaQuery.MAX_767)} {
    -webkit-overflow-scrolling: touch;
    margin: ${({ theme }) => `0 -${theme.sitePadding}`};
    padding: ${({ theme }) => `0 ${theme.sitePadding} 1.6rem`};
  }
`;

export const WeekContent = styled.div`
  display: contents;
`;

export const Header = styled.div`
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  padding: 2rem 0;
  margin-bottom: 1rem;
  position: relative;
`;
export const CurrentMonth = styled.h3`
  ${typeStyle.heading02};
  text-align: center;
`;

export const TodayButton = styled.button`
  ${typeStyle.body01};
  position: absolute;
  left: 5rem;
  border: solid 1px ${({ theme }) => theme.colors.offWhite};
  border-radius: 5px;
  padding: 0 1rem;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.cottonGrey};
  }

  &:disabled {
    cursor: no-drop;
  }

  ${respondTo(MediaQuery.MAX_767)} {
    display: none;
  }
`;

export const ArrowButton = styled.button<{ direction?: 'left' | 'right' }>`
  padding: 1rem 1.6rem;
  position: absolute;
  right: 0;
  left: auto;

  ${({ direction }) =>
    direction === 'left' &&
    css`
      transform: scaleX(-1);
      left: 0;
      right: auto;
    `};

  &:before {
    border-style: solid;
    border-width: 0 0.25em 0.25em 0;
    content: '';
    display: inline-block;
    height: 1rem;
    width: 1rem;
    position: relative;
    top: 0.15em;
    transform: rotate(-45deg);
    vertical-align: top;
    border-radius: 3px 2px;
  }
`;

export const WeekName = styled.div`
  font-weight: 700;
  text-align: center;
  opacity: 0.7;
  text-transform: uppercase;
  font-size: 1.3rem;
  padding: 2rem 0;
`;

export const Day = styled.button<{
  isInactive?: boolean;
  isSelected?: boolean;
  isToday?: boolean;
  isUnavailable?: boolean;
  isAppointment?: boolean;
}>`
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  flex-wrap: wrap;
  font-weight: 700;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:before {
    content: '';
    padding-top: 100%;
  }
  &:disabled {
    color: red;
    cursor: no-drop;
    background: rgba(255, 0, 0, 0.1);
    opacity: 0.5;
  }

  @media (hover: hover) {
    &:not(:disabled):hover {
      ${({ isSelected, theme }) =>
        !isSelected &&
        css`
          background-color: rgba(0, 0, 0, 0.025);
          color: ${theme.colors.black};
        `};
    }
  }

  ${({ isInactive }) => isInactive && 'color: #9e9e9e;'};

  ${({ isToday, theme }) =>
    isToday &&
    css`
      color: ${useContrastingTextColor(
        theme.colors.secondary,
        theme.colors.white,
        theme.colors.black,
      )};
      background: ${theme.colors.secondary};
    `}

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      color: ${useContrastingTextColor(
        theme.colors.primary,
        theme.colors.white,
        theme.colors.black,
      )};
      background: ${theme.colors.primary};
    `}
  
  ${({ isUnavailable, theme, isSelected }) =>
    isUnavailable &&
    css`
      color: red;
      pointer-events: none;
      background: rgba(255, 0, 0, 0.1);
      opacity: 0.5;
      ${isSelected && 'border: solid 2px red;'};
    `}

  ${({ isAppointment, theme }) =>
    isAppointment &&
    css`
      position: relative;
      border: solid 2px ${theme.colors.primary};
      pointer-events: none;
      background-color: white !important;
      /* outline: 2px dashed ${theme.colors.secondary}; */
      box-shadow: inset 0px 0px 10px ${theme.colors.primary};
      color: ${({ theme }) => theme.utils.hexToRgba(theme.colors.black, 0.6)};
      /* color: white !important; */

      &:after {
        color: gold;
        content: '★';
        position: absolute;
        top: 0.6rem;
        right: 0.6rem;
        font-size: 1.4rem;
        margin-left: 0.5rem;
        text-shadow: 0 0 10px ${theme.colors.primary};
      }
    `}
`;

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2rem;

  ${respondTo(MediaQuery.MAX_767)} {
    min-width: 50rem;
  }
`;
