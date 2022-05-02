import { ReactElement } from 'react';
import { SubTitle } from 'styles/layout';
import * as S from './M02MultiColumn.styles';

interface M02MultiColumnProps {
  titles: Array<string>;
  children: Array<ReactElement>;
}

export const M02MultiColumn = ({ titles, children }: M02MultiColumnProps): ReactElement => {
  return (
    <S.StyledM02MultiColumn flexDirection="row" flexWrap="wrap" gap="3rem">
      {titles.map((title, index) => (
        <S.Column key={title}>
          <SubTitle>{title}</SubTitle>
          {children[index]}
        </S.Column>
      ))}
    </S.StyledM02MultiColumn>
  );
};
