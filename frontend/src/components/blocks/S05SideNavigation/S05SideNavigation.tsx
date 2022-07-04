import React, { ReactElement } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import slugify from 'slugify';
import {
  MenuItem,
  MenuLink,
} from 'components/blocks/S05SideNavigation/components/MenuLink/MenuLink';
import * as S from './S05SideNavigation.styles';
import { ApiCollection } from 'util/api';
import { getImageBySize } from 'util/getImageBySize';

gsap.registerPlugin(ScrollToPlugin);

interface S05SideNavigationProps {
  data: ApiCollection;
}

export const S05SideNavigation = ({ data }: S05SideNavigationProps): ReactElement => {
  if (!data) return <></>;

  const handleMenuItemClick = (event: React.MouseEvent) => {
    event.preventDefault();

    const target = event.currentTarget as HTMLAnchorElement;

    if (target) {
      const anchorId = target.getAttribute('href');

      if (anchorId) {
        gsap.to(window, { duration: 1, scrollTo: anchorId, ease: 'power3.inOut' });
      }
    }
  };

  return (
    <S.StyledS05SideNavigation>
      <S.ContentWrapper>
        {data.map((item) => {
          const icon = item.Icon;

          if (!icon) return null;
          if (!icon || !icon.data) return null;

          const iconUrl = getImageBySize(icon, 'small');
          const menuItem: MenuItem = {
            anchor: item.Caption && `#${slugify(item.Caption, { lower: true })}`,
            icon: iconUrl,
            title: item.Caption,
          };

          return <MenuLink key={iconUrl} item={menuItem} onClick={handleMenuItemClick} />;
        })}
      </S.ContentWrapper>
    </S.StyledS05SideNavigation>
  );
};
