import { ReactElement } from 'react';
import * as S from './A03ProgressBar.styles';

interface A03ProgressBarProps {
  progress: number;
}

export const A03ProgressBar = ({ progress }: A03ProgressBarProps): ReactElement => {
  return (
    <S.StyledA03ProgressBar>
      <S.ProgressBar>
        <S.Progress progress={progress} />
      </S.ProgressBar>
      <S.Caption>{progress}%</S.Caption>
    </S.StyledA03ProgressBar>
  );
};
