import { A01Button } from 'components/atoms/A01Button/A01Button';
import { MediaQuery } from 'data/enum/mediaQuery';
import styled from 'styled-components';
import { Flex } from 'styles/layout';
import { ColorKey } from 'styles/theme/default';
import { respondTo } from 'styles/util/respondTo';

export const StyledMakeAppointment = styled.div`
  padding: 2rem 0;

  ${respondTo(MediaQuery.MIN_768)} {
    padding: 0;
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
  }
`;

export const SubmitButton = styled(A01Button)`
  margin: 3rem auto 0;
`;

export const Block = styled(Flex)<{ color: ColorKey }>`
  border-left: solid 4px ${({ theme, color }) => theme.colors[color]};
  padding: 1rem 0;
  width: 100%;
  padding-left: 2rem;
`;

export const StyledForm = styled.form`
  flex: 1;
  text-align: left;
`;

export const StyledInput = styled.input`
  padding: 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.cottonGrey};
  width: 100%;
  border-radius: 5px;

  &:focus {
    outline: solid 2px ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledSelect = styled.select`
  border: solid 1px ${({ theme }) => theme.colors.cottonGrey};
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:focus {
    outline: solid 2px ${({ theme }) => theme.colors.primary};
  }
`;
