import { ReactElement } from 'react';
import { Icon } from 'components/atoms/Icon/Icon';
import * as S from './S04SocialSharing.styles';
import { ApiAttributes } from 'util/api';

interface S04SocialSharingProps {
  data: ApiAttributes;
  className?: string;
}

export const S04SocialSharing = ({ data, className }: S04SocialSharingProps): ReactElement => {
  return (
    <S.StyledS04SocialSharing className={className}>
      {data.Platforms.map((platform: any) => (
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
