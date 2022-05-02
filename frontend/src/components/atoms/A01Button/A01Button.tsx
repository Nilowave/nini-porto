import { ReactElement } from 'react';
import * as S from './A01Button.styles';

interface A01ButtonProps {
  title: string;
  link?: string;
  icon?: string;
  outline?: boolean;
  big?: boolean;
  onClick?: () => void;
  renderAs?: string;
  className?: string;
}

export const A01Button = ({
  title,
  link,
  outline,
  big,
  icon,
  renderAs = 'button',
  className,
  onClick,
}: A01ButtonProps): ReactElement => {
  return (
    <S.StyledA01Button
      className={className}
      outline={outline}
      big={big}
      as={renderAs as unknown as undefined}
    >
      {icon && <S.StyledIcon className="material-symbols-outlined filled">{icon}</S.StyledIcon>}
      {title}
    </S.StyledA01Button>
  );
};
