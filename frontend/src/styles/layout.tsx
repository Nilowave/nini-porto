import styled, { css } from 'styled-components';
import { MediaQuery } from '../data/enum/mediaQuery';
import { ColorKey } from './theme/default';
import { typeStyle, TypeStyleType } from './typeStyle';
import { respondTo } from './util/respondTo';

export const Container = styled.div`
  max-width: 119.6rem;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  flex: 1;
  ${respondTo(MediaQuery.MIN_768)} {
    column-gap: 1rem;
    display: grid;
    width: 100%;
    grid-template: 'profile content navigation' 1fr/32rem auto 4.6rem;
  }
`;

export const SitePadding = styled.div`
  padding: 0 ${({ theme }) => theme.sitePadding};
`;

export const DesktopPadding = styled.div`
  ${respondTo(MediaQuery.MIN_768)} {
    padding: 0 ${({ theme }) => theme.sitePadding};
  }
`;

export const Paragraph = styled.p`
  ${typeStyle.body01};
`;

export const RichText = styled.div`
  ${typeStyle.body01};
  white-space: pre-line;
  width: 100%;
  word-break: break-all;

  a {
    text-decoration: underline;
  }
`;

export const BlockComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.2rem;
  padding-bottom: 3rem;

  &:not(:last-child) {
    border-bottom: solid 1px ${({ theme }) => theme.colors.cottonGrey};
    margin-bottom: 3rem;
  }
`;

export const SubTitle = styled.h3`
  ${typeStyle.heading03};
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 3.4rem;
`;

type TextProps = {
  type: keyof TypeStyleType;
  size?: string;
  margin?: string;
  color?: ColorKey;
};

export const Text = styled.p<TextProps>`
  ${({ type }) => typeStyle[type]};
  ${({ size }) => size && `font-size: ${size}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ color, theme }) => color && `color: ${theme.colors[color]}`};
`;

type FlexProps = {
  flexDirection?: string;
  flexWrap?: string;
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`};
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`};
  ${({ gap }) => gap && `gap: ${gap};`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`};
`;

const inputStyles = css`
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.offWhite};
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem 1.5rem;
  display: block;
  flex: 1;
  font-weight: 700;
  letter-spacing: 1px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Input = styled.input`
  ${inputStyles};
`;

export const TextArea = styled.textarea`
  ${inputStyles};
  min-height: 18rem;
  resize: none;
`;
