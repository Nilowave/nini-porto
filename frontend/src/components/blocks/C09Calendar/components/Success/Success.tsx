import { ReactElement } from 'react';
import { RichText, Text } from 'styles/layout';
import * as S from './Success.styles';

interface SuccessProps {
  message?: string;
}

export const Success = ({ message }: SuccessProps): ReactElement => {
  return (
    <S.StyledSuccess>
      <Text type="heading02" margin="0 0 3rem">
        Appointment booked!
      </Text>
      {message && <RichText dangerouslySetInnerHTML={{ __html: message }} />}
    </S.StyledSuccess>
  );
};
