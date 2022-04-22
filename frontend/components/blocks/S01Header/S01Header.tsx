import { ReactElement } from 'react';
import { SitePadding, Wrapper } from '../../../styles/layout';

import * as S from './S01Header.styles';

export type StrapiImage = {
  alternativeText: string;
  caption: string;
  createdAt: string;
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: string;
  size: number;
  updatedAt: string;
  url: string;
  width: number;
};

interface S01HeaderProps {
  logo?: StrapiImage;
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
