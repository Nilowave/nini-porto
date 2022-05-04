import { ReactElement } from 'react';
import * as S from './A00Loading.styles';

interface A00LoadingProps {}

export const A00Loading = ({}: A00LoadingProps): ReactElement => {
  return (
    <S.StyledA00Loading>
      <span>...</span>
    </S.StyledA00Loading>
  );
};
