import { A01Button } from 'components/atoms/A01Button/A01Button';
import { ReactElement } from 'react';
import { RichText } from 'styles/layout';
import * as S from './C01TextCta.styles';

type C01Data = {
  Text: string;
  CTA: {
    Title: string;
    ShareButton: boolean;
    align?: 'left' | 'center' | 'right';
  };
};
interface C01TextCtaProps {
  data: C01Data;
}

export const C01TextCta = ({ data }: C01TextCtaProps): ReactElement => {
  console.log(data);

  return (
    <S.StyledC01TextCta>
      {data.Text && <RichText dangerouslySetInnerHTML={{ __html: data.Text }} />}
      {data.CTA && (
        <A01Button
          title={data.CTA.Title}
          {...(data.CTA.ShareButton && { icon: 'share' })}
          outline={data.CTA.ShareButton}
        />
      )}
    </S.StyledC01TextCta>
  );
};
