import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import { Icons } from 'data/enum/icons';
import * as S from './Icon.styles';

interface IconProps {
  name: Icons;
}

export const Icon = ({ name }: IconProps): ReactElement => {
  const DynamicIcon = dynamic(() => import(`../../../svg/icon/${name}.svg`), {
    loading: () => <span>•</span>,
  });
  return (
    <S.StyledIcon>
      <DynamicIcon />
    </S.StyledIcon>
  );
};
