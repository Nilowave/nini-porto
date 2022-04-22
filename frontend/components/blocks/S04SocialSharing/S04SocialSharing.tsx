import { ReactElement } from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import * as S from './S04SocialSharing.styles';

interface S04SocialSharingProps {
  data: any;
}

export const S04SocialSharing = ({ data }: S04SocialSharingProps): ReactElement => {
  return (
    <S.StyledS04SocialSharing>
      {data.attributes.Platforms.map((platform: any) => (
        <S.StyledLink
          key={platform.Icon}
          href={platform.Link}
          title={platform.Title}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon name={platform.Icon} />
        </S.StyledLink>
      ))}
    </S.StyledS04SocialSharing>
  );
};
