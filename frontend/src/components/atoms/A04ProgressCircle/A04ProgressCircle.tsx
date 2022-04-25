import { ReactElement } from 'react';
import * as S from './A04ProgressCircle.styles';

interface A04ProgressCircleProps {
  progress: number;
}

// eslint-disable-next-line no-empty-pattern
export const A04ProgressCircle = ({ progress }: A04ProgressCircleProps): ReactElement => {
  return (
    <S.StyledA04ProgressCircle>
      <S.StyledSVG viewBox="0 0 100 100">
        <S.OutlineCircle cx="50" cy="50" r="40" />
        <S.ProgressCircle cx="50" cy="50" r="40" progress={progress} />
      </S.StyledSVG>
      <S.Caption>{progress}%</S.Caption>
    </S.StyledA04ProgressCircle>
  );
};
