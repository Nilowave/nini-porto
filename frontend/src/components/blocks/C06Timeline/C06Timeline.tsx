import { ImageAsset } from 'components/templates/T01Blocks/T01Blocks';
import { ReactElement } from 'react';
import { getImageBySize } from 'util/getImageBySize';
import * as S from './C06Timeline.styles';

type TimelineData = {
  id: number;
  Description: string;
  FromDate: string;
  ToDate: string;
  Title: string;
  Subtitle?: string;
  Image?: ImageAsset;
};

interface C06TimelineProps {
  data: {
    Timeline: Array<TimelineData>;
    id: number;
  };
}

export const C06Timeline = ({ data }: C06TimelineProps): ReactElement => {
  return (
    <S.StyledC06Timeline>
      {data.Timeline.map((item) => {
        const yearFrom = new Date(item.FromDate).getFullYear();
        const yearTo = new Date(item.ToDate).getFullYear();
        const image = item.Image && getImageBySize(item.Image, 'small');

        return (
          <S.TimeBlock key={`timeline-${data.id}-${item.id}`}>
            <S.Line />
            <S.YearSpan>{`${yearFrom} - ${yearTo}`}</S.YearSpan>
            <S.Title>{item.Title}</S.Title>
            <S.ContentWrapper>
              {image && (
                <S.StyledImage
                  src={image}
                  alt={item.Subtitle || item.Title}
                  size={3}
                  align="left"
                  autoWidth
                />
              )}
              {item.Subtitle && <S.SubTitle>{item.Subtitle}</S.SubTitle>}
              <S.Text>{item.Description}</S.Text>
            </S.ContentWrapper>
          </S.TimeBlock>
        );
      })}
    </S.StyledC06Timeline>
  );
};
