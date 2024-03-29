import Image from 'next/image';
import React, { ReactElement, useRef, useState } from 'react';
import * as S from './MenuLink.styles';

export type MenuItem = {
  anchor: string;
  icon: string;
  title: string;
};

interface MenuLinkProps {
  item: MenuItem;
  onClick?: (event: React.MouseEvent) => void;
}

export const MenuLink = ({ item, onClick }: MenuLinkProps): ReactElement => {
  const captionRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const [alignCaption, setAlignCaption] = useState<'left' | 'right'>('left');

  const handleMouseEnter = () => {
    if (captionRef.current && linkRef.current) {
      const vw = window.innerWidth;
      const captionBox = captionRef.current.getBoundingClientRect();
      const linkBox = linkRef.current.getBoundingClientRect();

      if (linkBox.left + captionBox.width + 52 > vw) {
        setAlignCaption('left');
      } else {
        setAlignCaption('right');
      }
    }
  };

  return (
    <S.StyledMenuLink
      onMouseEnter={handleMouseEnter}
      ref={linkRef}
      href={item.anchor}
      onClick={onClick}
    >
      <S.StyledImageWrapper>
        <Image alt={`Menu ${item.title}`} src={item.icon} layout="fill" objectFit="cover" />
      </S.StyledImageWrapper>

      {item.title && (
        <S.StyledCaption ref={captionRef} align={alignCaption}>
          {item.title}
        </S.StyledCaption>
      )}
    </S.StyledMenuLink>
  );
};
