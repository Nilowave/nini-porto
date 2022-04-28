import { A05Image } from 'components/atoms/A05Image/A05Image';
import { ImageAsset } from 'components/templates/T01Blocks/T01Blocks';
import { ReactElement } from 'react';
import * as S from './C07References.styles';

type Reference = {
  Title: string;
  Subtitle: string;
  Description?: string;
  Image?: ImageAsset;
};

interface C07ReferencesProps {
  data: {
    References: Array<Reference>;
  };
}

export const C07References = ({ data }: C07ReferencesProps): ReactElement => {
  return (
    <S.StyledC07References>
      {data.References.length > 0 &&
        data.References.map((item: any) => (
          <S.ListItem key={`reference-${item.Title}`}>
            {item.Image.data && (
              <A05Image
                src={item.Image.data.attributes.formats.small.url}
                alt={`avatar-${item.Title}`}
                size={5.4}
                rounded
              />
            )}
            <S.StyledHeading>
              <S.StyledTitle>{item.Title}</S.StyledTitle>
              <S.StyledSubTitle>{item.Subtitle}</S.StyledSubTitle>
            </S.StyledHeading>
            <S.StyledText dangerouslySetInnerHTML={{ __html: item.Description }} />
          </S.ListItem>
        ))}
    </S.StyledC07References>
  );
};
