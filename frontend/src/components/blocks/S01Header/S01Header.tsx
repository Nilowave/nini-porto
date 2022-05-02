import { ReactElement } from 'react';
import { SitePadding, Wrapper } from 'styles/layout';
import { ApiAttributes } from 'util/api';
import { getImageBySize } from 'util/getImageBySize';

import * as S from './S01Header.styles';

interface S01HeaderProps {
  data?: any;
}

export const S01Header = ({ data }: S01HeaderProps): ReactElement => {
  const logoSrc = getImageBySize(data.Logo, 'small');

  return (
    <S.StyledS01Header>
      <SitePadding>
        <S.StyledContainer>
          <Wrapper>
            {logoSrc && <S.StyledLogo src={logoSrc} alt="Logo" size={4.5} align="left" autoWidth />}
          </Wrapper>
        </S.StyledContainer>
      </SitePadding>
    </S.StyledS01Header>
  );
};
