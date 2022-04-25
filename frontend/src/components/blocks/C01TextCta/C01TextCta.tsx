import { A01Button } from 'components/atoms/A01Button/A01Button';
import { ReactElement } from 'react';
import { RichText } from 'styles/layout';
import * as S from './C01TextCta.styles';

type C01Data = {
  Text: string;
  CTA: {
    Title: string;
  };
};
interface C01TextCtaProps {
  data: C01Data;
}

export const C01TextCta = ({ data }: C01TextCtaProps): ReactElement => {
  return (
    <S.StyledC01TextCta>
      {data.Text && <RichText>{data.Text}</RichText>}
      {data.CTA && <A01Button title={data.CTA.Title} icon="share" outline />}
    </S.StyledC01TextCta>
  );
};
