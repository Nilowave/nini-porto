import styled from 'styled-components';
import { BlockComponent } from 'styles/layout';

export const StyledC01TextCta = styled(BlockComponent)<{ align?: string }>`
  padding-bottom: 6.7rem;

  ${({ align }) => align && `align-items: ${align}`};
`;
