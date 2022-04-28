import Image from 'next/image';
import { ReactElement } from 'react';
import * as S from './A05Image.styles';

interface A05ImageProps {
  src: string;
  alt: string;
  size?: number;
  rounded?: boolean;
  className?: string;
}

// eslint-disable-next-line no-empty-pattern
export const A05Image = ({
  src,
  alt,
  rounded,
  size = 40,
  className,
}: A05ImageProps): ReactElement => {
  return (
    <S.StyledA05Image size={size} rounded={rounded} className={className}>
      <Image
        src={`${process.env.NEXT_PUBLIC_HOST}${src}`}
        layout="fill"
        objectFit="cover"
        alt={alt}
      />
    </S.StyledA05Image>
  );
};
