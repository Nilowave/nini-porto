import styled from 'styled-components';
import { S04SocialSharing } from '../S04SocialSharing/S04SocialSharing';

export const StyledC10ContactForm = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3rem;

  button {
    align-self: flex-start;
  }
`;

export const StyledSocial = styled(S04SocialSharing)`
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 5rem;
`;
