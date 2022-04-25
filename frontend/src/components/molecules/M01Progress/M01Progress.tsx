import { A02ProgressDots } from 'components/atoms/A02ProgressDots/A02ProgressDots';
import { A03ProgressBar } from 'components/atoms/A03ProgressBar/A03ProgressBar';
import { A04ProgressCircle } from 'components/atoms/A04ProgressCircle/A04ProgressCircle';
import { ReactElement } from 'react';
import * as S from './M01Progress.styles';

interface M01ProgressProps {
  title: string;
  level: number;
  type: 'circle' | 'bar' | 'dots';
  reverse?: boolean;
}

export const M01Progress = ({ title, level, type, reverse }: M01ProgressProps): ReactElement => {
  return (
    <S.StyledM01Progress flexDirection={reverse ? 'column-reverse' : 'column'} gap="0.8rem">
      <S.Title align={type === 'circle' ? 'center' : 'left'}>{title}</S.Title>
      <S.ProgressWrapper>
        {type === 'dots' && <A02ProgressDots progress={level} />}
        {type === 'bar' && <A03ProgressBar progress={level} />}
        {type === 'circle' && <A04ProgressCircle progress={level} />}
      </S.ProgressWrapper>
    </S.StyledM01Progress>
  );
};
