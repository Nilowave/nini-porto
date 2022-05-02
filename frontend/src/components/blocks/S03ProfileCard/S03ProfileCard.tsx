import { ReactElement } from 'react';
import { ApiAttributes } from 'util/api';
import { getImageBySize } from 'util/getImageBySize';
import { S04SocialSharing } from '../S04SocialSharing/S04SocialSharing';
import * as S from './S03ProfileCard.styles';

interface S03ProfileCardProps {
  data?: ApiAttributes;
  social?: ApiAttributes;
}

// eslint-disable-next-line no-empty-pattern
export const S03ProfileCard = ({ data, social }: S03ProfileCardProps): ReactElement => {
  if (!data) return <></>;

  const { Name, Title } = data;
  const cardImage = data.Image;

  const images = cardImage.data;

  return (
    <S.StyledS03ProfileCard>
      <S.ContentWrapper>
        {images && (
          <S.ImageContainer>
            {images.map((image: any) => {
              const imageSrc = getImageBySize({ data: image }, 'small');

              return (
                <S.ImageWrapper key={image.id}>
                  <S.StyledImage
                    alt={`Profile Photo of ${Name}`}
                    src={imageSrc}
                    layout="fill"
                    objectFit="cover"
                  />
                </S.ImageWrapper>
              );
            })}
          </S.ImageContainer>
        )}
        {Name && <S.StyledHeading>{Name}</S.StyledHeading>}
        {Title && <S.StyledParagraph>{Title}</S.StyledParagraph>}
        {social && <S04SocialSharing data={social} />}
      </S.ContentWrapper>
    </S.StyledS03ProfileCard>
  );
};
