import { ReactElement, useEffect, useRef } from 'react';
import { ApiAttributes } from 'util/api';
import { baseComponentTransition } from 'util/baseComponentTransition';
import { getImageBySize } from 'util/getImageBySize';
import { scrollTransition } from 'util/scrollTransition';
import { S04SocialSharing } from '../S04SocialSharing/S04SocialSharing';
import * as S from './S03ProfileCard.styles';

interface S03ProfileCardProps {
  data?: ApiAttributes;
  social?: ApiAttributes;
}

// eslint-disable-next-line no-empty-pattern
export const S03ProfileCard = ({ data, social }: S03ProfileCardProps): ReactElement => {
  const componentRef = useRef<Array<HTMLElement>>([]);

  useEffect(() => {
    if (componentRef.current) {
      console.log('animate me');
    }
  }, [componentRef]);

  if (!data) return <></>;

  const { Name, Title } = data;
  const cardImage = data.Image;

  const images = cardImage.data;

  const setScrollTrigger = (block: HTMLDivElement) => {
    if (!componentRef.current.includes(block)) {
      componentRef.current.push(block);
      scrollTransition(block, baseComponentTransition(block, { delay: 0.3, scale: 1.01, x: -20 }));
    }
  };

  return (
    <S.StyledS03ProfileCard ref={(el) => el && setScrollTrigger(el)}>
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
