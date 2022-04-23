import { ReactElement } from 'react';
import { MenuItem, MenuLink } from 'components/atoms/MenuLink/MenuLink';
import * as S from './S05SideNavigation.styles';
import { ApiCollection } from 'util/api';

interface S05SideNavigationProps {
  data: ApiCollection;
}

export const S05SideNavigation = ({ data }: S05SideNavigationProps): ReactElement => {
  // console.log(data);
  if (!data) return <></>;

  return (
    <S.StyledS05SideNavigation>
      <S.ContentWrapper>
        {data.map((item) => {
          const icon = item.Icon;

          if (!icon.data) return null;

          const iconUrl = `${process.env.NEXT_PUBLIC_HOST}${icon.data.attributes.url}`;
          const menuItem: MenuItem = {
            anchor: '',
            icon: iconUrl,
            title: item.Caption,
          };

          return <MenuLink key={iconUrl} item={menuItem} />;
        })}
      </S.ContentWrapper>
    </S.StyledS05SideNavigation>
  );
};
