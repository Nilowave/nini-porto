import Image, { ImageProps } from 'next/image';
import { ReactElement } from 'react';
import * as S from './A05Image.styles';

export type ImageNaturalSize = {
  naturalWidth: number;
  naturalHeight: number;
};
interface A05ImageProps extends ImageProps {
  src: string;
  alt: string;
  size?: number | string;
  rounded?: boolean | number;
  className?: string;
  autoWidth?: boolean;
  autoHeight?: boolean;
  align?: string;
  fit?: 'cover' | 'contain';

  onLoad?: (data: any) => void;
}

// eslint-disable-next-line no-empty-pattern
export const A05Image = ({
  src,
  alt,
  rounded,
  size = 40,
  className,
  autoWidth,
  autoHeight,
  align = 'center',
  fit,
  onLoad,
  height,
  ...props
}: A05ImageProps): ReactElement => {
  const onImageLoad = (event: any) => {
    if (onLoad) {
      onLoad(event);
    }
  };
  return (
    <S.StyledA05Image
      size={size}
      rounded={rounded}
      className={className}
      autoWidth={autoWidth}
      autoHeight={autoHeight}
      width={props.width}
      height={height}
      layout={props.layout}
    >
      <Image
        onLoadingComplete={onImageLoad}
        src={src}
        layout="fill"
        objectPosition={align}
        objectFit={fit || (autoHeight || autoWidth ? 'contain' : 'cover')}
        alt={alt}
        height={height !== 'auto' ? height : undefined}
        {...props}
      />
    </S.StyledA05Image>
  );
};
