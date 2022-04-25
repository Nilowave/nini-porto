import styled from 'styled-components';
import { respondTo } from 'styles/util/respondTo';
import { MediaQuery } from 'data/enum/mediaQuery';
import { Flex } from 'styles/layout';
import { typeStyle } from 'styles/typeStyle';

export const Caption = styled.span`
  ${typeStyle.body01};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.grey};

  ${respondTo(MediaQuery.MAX_767)} {
    margin-left: 1rem;
  }
`;

export const ProgressWrapper = styled(Flex)`
  ${respondTo(MediaQuery.MAX_767)} {
    gap: 0.5rem;
  }
`;

export const Circle = styled.div<{ $fill?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: solid 1px ${({ theme }) => theme.colors.primary};

  ${({ theme, $fill }) => $fill && `background-color: ${theme.colors.primary}`};
`;
