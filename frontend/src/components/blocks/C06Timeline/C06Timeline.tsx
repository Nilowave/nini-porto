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
  Location?: string;
  Image?: ImageAsset;
  Current: boolean;
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
        const yearTo = item.Current ? 'Present' : new Date(item.ToDate).getFullYear();
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
              {(item.Subtitle || item.Location) && (
                <S.SubTitle>
                  {item.Subtitle} {item.Location && <S.Location>{item.Location}</S.Location>}
                </S.SubTitle>
              )}
              <S.Text dangerouslySetInnerHTML={{ __html: item.Description }} />
            </S.ContentWrapper>
          </S.TimeBlock>
        );
      })}
    </S.StyledC06Timeline>
  );
};
