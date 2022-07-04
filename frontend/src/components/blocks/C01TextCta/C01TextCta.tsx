import { A01Button } from 'components/atoms/A01Button/A01Button';
import { M04ShareButton } from 'components/molecules/M04ShareButton/M04ShareButton';
import { BlockContext } from 'components/templates/T01Blocks/T01Blocks.context';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { RichText } from 'styles/layout';
import * as S from './C01TextCta.styles';

type Align = 'flex-start' | 'center' | 'flex-end';

type C01Data = {
  Text: string;
  CTA: {
    Title: string;
    ShareButton: boolean;
    Icon?: string;
  };
};
interface C01TextCtaProps {
  data: C01Data;
  structureData?: any;
}

export const C01TextCta = ({ data }: C01TextCtaProps): ReactElement => {
  const { contextData } = useContext(BlockContext);

  const [align, setAlign] = useState<Align>();

  useEffect(() => {
    const temp = document.createElement('div');
    temp.innerHTML = data.Text;
    const paragraph = temp.querySelector('p');

    if (paragraph) {
      const alignment = paragraph.style.textAlign;
      switch (alignment) {
        case 'left':
          setAlign('flex-start');
          break;
        case 'right':
          setAlign('flex-end');
          break;
        default:
          setAlign(alignment as Align);
      }
    }
  }, []);

  return (
    <S.StyledC01TextCta align={align}>
      {data.Text && <RichText dangerouslySetInnerHTML={{ __html: data.Text }} />}
      {data.CTA &&
        (data.CTA.ShareButton ? (
          <M04ShareButton title={data.CTA.Title} />
        ) : (
          <A01Button
            title={data.CTA.Title}
            icon={data.CTA.Icon}
            onClick={contextData.cta && contextData.cta.action}
          />
        ))}
    </S.StyledC01TextCta>
  );
};
