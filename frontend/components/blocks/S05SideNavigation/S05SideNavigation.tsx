import { ReactElement } from 'react';
import { SitePadding } from '../../../styles/layout';
import * as S from './S05SideNavigation.styles';

interface S05SideNavigationProps {}

export const S05SideNavigation = ({}: S05SideNavigationProps): ReactElement => {
  return (
    <S.StyledS05SideNavigation>
      <SitePadding>
        <h1>N</h1>
      </SitePadding>
    </S.StyledS05SideNavigation>
  );
};
