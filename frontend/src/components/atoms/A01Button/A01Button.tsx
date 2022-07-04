import { ReactElement } from 'react';
import * as S from './A01Button.styles';

interface A01ButtonProps {
  title: string;
  link?: string;
  icon?: string;
  outline?: boolean;
  big?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  renderAs?: string;
  className?: string;
  type?: 'button' | 'submit';
}

export const A01Button = ({
  title,
  link,
  outline,
  big,
  icon,
  disabled,
  renderAs = 'button',
  type = 'button',
  className,
  onClick,
}: A01ButtonProps): ReactElement => {
  return (
    <S.StyledA01Button
      className={className}
      outline={outline}
      type={type}
      big={big}
      as={renderAs as unknown as undefined}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <S.StyledIcon
          className={`material-symbols-outlined filled ${icon === 'pending' ? 'pulse' : ''}`}
        >
          {icon.trim().toLowerCase().replace(/ /g, '_')}
        </S.StyledIcon>
      )}
      {title}
    </S.StyledA01Button>
  );
};
