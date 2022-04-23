import { ReactElement } from 'react';
import { SitePadding, Wrapper } from 'styles/layout';
import { ApiAttributes } from 'util/api';

import * as S from './S01Header.styles';

interface S01HeaderProps {
  logo?: ApiAttributes;
}

export const S01Header = ({ logo }: S01HeaderProps): ReactElement => {
  const logoSrc = `${process.env.NEXT_PUBLIC_HOST}${logo?.url}`;

  return (
    <S.StyledS01Header>
      <SitePadding>
        <S.StyledContainer>
          <Wrapper>{logo && <S.StyledLogo src={logoSrc} />}</Wrapper>
        </S.StyledContainer>
      </SitePadding>
    </S.StyledS01Header>
  );
};
