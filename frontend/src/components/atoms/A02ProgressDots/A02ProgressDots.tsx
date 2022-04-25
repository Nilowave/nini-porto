import { proficiency } from 'data/enum/proficiency';
import { ReactElement } from 'react';
import { Flex } from 'styles/layout';
import * as S from './A02ProgressDots.styles';

interface A02ProgressDotsProps {
  progress: number;
}

export const A02ProgressDots = ({ progress }: A02ProgressDotsProps): ReactElement => {
  const absProgress = Math.round(progress / 10);

  return (
    <S.ProgressWrapper flexDirection="row" gap="1rem" flexWrap="wrap" alignItems="center">
      {new Array(10).fill(0).map((item, index) => (
        <S.Circle key={`lang-circle-${index}`} $fill={index < absProgress} />
      ))}
      <S.Caption>{proficiency[absProgress - 1]}</S.Caption>
    </S.ProgressWrapper>
  );
};
