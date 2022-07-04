import { MediaQuery } from 'data/enum/mediaQuery';
import styled from 'styled-components';
import { BlockComponent, Flex, RichText } from 'styles/layout';
import { typeStyle } from 'styles/typeStyle';
import { respondTo } from 'styles/util/respondTo';

export const StyledC02PersonalSkills = styled(BlockComponent)``;

export const Column = styled.div`
  flex: 1;
  min-width: 24rem;
`;

export const ContactWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  ${respondTo(MediaQuery.MIN_768)} {
    gap: 1rem;
  }
`;

export const ContactItem = styled(Flex)`
  ${respondTo(MediaQuery.MAX_767)} {
    gap: 0.3rem;
  }
`;

export const ContactTitle = styled.span`
  ${typeStyle.caption};
  width: 100%;
  display: inline-block;

  ${respondTo(MediaQuery.MIN_768)} {
    width: 12rem;
  }
`;

export const ContactValue = styled(RichText)`
  ${typeStyle.body01};
  font-size: 1.4rem;
  flex: 1;
  overflow-wrap: break-word;
`;
