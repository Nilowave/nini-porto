import { ReactElement } from 'react';
import { SitePadding, Wrapper } from 'styles/layout';
import { ApiAttributes } from 'util/api';
import { getImageBySize } from 'util/getImageBySize';

import * as S from './S01Header.styles';

interface S01HeaderProps {
  data?: any;
}

export const S01Header = ({ data }: S01HeaderProps): ReactElement => {
  return (
    <S.StyledS01Header>
      <SitePadding>
        <S.StyledContainer>
          <Wrapper>
            {data && (
              <S.StyledLogo
                src={getImageBySize(data.Logo, 'small')}
                alt="Logo"
                size={4.5}
                align="left"
                autoWidth
              />
            )}
          </Wrapper>
        </S.StyledContainer>
      </SitePadding>
    </S.StyledS01Header>
  );
};
