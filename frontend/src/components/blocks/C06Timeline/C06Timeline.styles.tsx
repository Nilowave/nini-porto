import { A05Image } from 'components/atoms/A05Image/A05Image';
import { MediaQuery } from 'data/enum/mediaQuery';
import styled from 'styled-components';
import { typeStyle } from 'styles/typeStyle';
import { respondTo } from 'styles/util/respondTo';

export const StyledC06Timeline = styled.div`
  padding: 0 2rem;
`;

export const YearSpan = styled.div`
  position: relative;
  grid-area: date;
  width: 16rem;
  height: 3.5rem;
  padding: 0.4rem;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-right: 4.4rem;
  /* margin-left: 1rem; */

  &:after {
    content: '';
    top: 0;
    left: -1rem;
    width: 0;
    height: 0;
    position: absolute;
    border-top: 1.712rem solid transparent;
    border-bottom: 1.712rem solid transparent;
    border-right: 1rem solid ${({ theme }) => theme.colors.primary};
  }

  ${respondTo(MediaQuery.MIN_1024)} {
    &:after {
      left: 100%;
      border-left: 1rem solid ${({ theme }) => theme.colors.primary};
      border-right: none;
    }
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 1.7125rem;
  left: -5px;
  width: 2px;
  height: calc(100%);
  background-color: ${({ theme }) => theme.colors.primary};

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -1px;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 4rem;
    background-color: ${({ theme }) => theme.colors.black};
  }

  ${respondTo(MediaQuery.MIN_1024)} {
    left: 18.5rem;
  }
`;
export const ContentWrapper = styled.div`
  position: relative;
  grid-area: content;
  padding-top: 1rem;
`;

export const TimeBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding-left: 2rem;

  ${respondTo(MediaQuery.MIN_1024)} {
    display: grid;
    grid-template:
      'date title'
      '. content';
    grid-template-columns: auto 1fr;
    padding: 0;
  }

  &:not(:last-child) {
    ${ContentWrapper} {
      padding-bottom: 4.5rem;
    }
  }

  &:last-child {
    ${Line} {
      height: 0;
      background-color: transparent;
    }
  }
`;

export const Title = styled.h3`
  ${typeStyle.heading04};
  grid-area: title;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 1.6rem;

  ${respondTo(MediaQuery.MIN_1024)} {
    margin: 0;
    align-self: center;
  }
`;

export const SubTitle = styled.h4`
  ${typeStyle.body01};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Text = styled.p`
  ${typeStyle.body02};
`;

export const StyledImage = styled(A05Image)`
  margin-bottom: 0.4rem;
`;
