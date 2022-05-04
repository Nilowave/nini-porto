import { ReactElement, useEffect, useState } from 'react';
import * as S from './BackgroundShapes.styles';

interface BackgroundShapesProps {}

export const BackgroundShapes = ({}: BackgroundShapesProps): ReactElement => {
  return (
    <S.StyledBackgroundShapes>
      <S.StyledShape1 />
      <S.StyledShape2 />
    </S.StyledBackgroundShapes>
  );
};
