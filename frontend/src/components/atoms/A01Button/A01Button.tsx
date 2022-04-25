import { ReactElement } from 'react';
import * as S from './A01Button.styles';

interface A01ButtonProps {
  title: string;
  link?: string;
  icon?: string;
  outline?: boolean;
  big?: boolean;
  onClick?: () => void;
}

// eslint-disable-next-line no-empty-pattern
export const A01Button = ({
  title,
  link,
  outline,
  big,
  icon,
  onClick,
}: A01ButtonProps): ReactElement => {
  return (
    <S.StyledA01Button outline={outline} big={big}>
      {icon && <S.StyledIcon className="material-symbols-outlined filled">{icon}</S.StyledIcon>}
      {title}
    </S.StyledA01Button>
  );
};
