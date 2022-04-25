import styled from 'styled-components';
import { Flex } from 'styles/layout';
import { typeStyle } from 'styles/typeStyle';

export const StyledM01Progress = styled(Flex)`
  line-height: 0;
`;

export const Title = styled.span<{ align?: 'center' | 'left' | 'right' }>`
  ${typeStyle.body01};
  display: block;
  font-weight: 700;
  font-size: 1.36rem;
  text-align: ${({ align }) => align || 'left'};
`;

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;
