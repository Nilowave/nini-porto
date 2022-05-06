import { A01Button } from 'components/atoms/A01Button/A01Button';
import { Icon } from 'components/atoms/Icon/Icon';
import { Icons } from 'data/enum/icons';
import { ReactElement } from 'react';
import * as S from './M04ShareButton.styles';

type ShareItem = {
  icon: Icons;
  link: string;
  color: string;
  title: string;
};
interface M04ShareButtonProps {
  title: string;
}

export const M04ShareButton = ({ title }: M04ShareButtonProps): ReactElement => {
  const shareList: Array<ShareItem> = [
    { title: 'Share on Facebook', icon: Icons.FACEBOOK, link: 'a', color: '#3B5897' },
    { title: 'Share on Twitter', icon: Icons.TWITTER, link: 'a', color: '#1EA2F1' },
    { title: 'Share on LinkedIn', icon: Icons.LINKEDIN, link: 'a', color: '#0E76A8' },
    { title: 'Copy link', icon: Icons.COPY_LINK, link: 'a', color: 'rgb(255, 101, 80)' },
  ];

  const openSharePopup = (link: string) => {
    const popupSize = {
      width: 500,
      height: 600,
    };

    const popupPosition = {
      left: window.screen.availWidth / 2 - popupSize.width / 2,
      top: window.screen.availHeight / 2 - popupSize.height / 2,
    };

    window.open(
      link,
      'targetWindow',
      `toolbar=no,top=${popupPosition.top},left=${popupPosition.left},status=no,menubar=no,scrollbars=no,resizable=yes,width=${popupSize.width},height=${popupSize.height}`,
    );
  };

  const handleShareClick = (type: Icons) => {
    const location = window.location.href;
    let shareLink;

    switch (type) {
      case Icons.COPY_LINK:
        navigator.clipboard.writeText(location);
        break;
      case Icons.FACEBOOK:
        shareLink = `https://www.facebook.com/sharer.php?u=${location}`;
        break;
      case Icons.TWITTER:
        shareLink = `https://twitter.com/share?url=${location}`;
        break;
      case Icons.LINKEDIN:
        shareLink = `https://www.linkedin.com/shareArticle?url=${location}`;
        break;
    }

    if (shareLink) {
      openSharePopup(shareLink);
    }
  };

  return (
    <S.StyledM04ShareButton gap="1rem">
      <A01Button title={title} icon="share" outline />
      <S.ShareList gap="1rem">
        {shareList.map((item, index) => (
          <S.ShareIconButton
            onClick={() => handleShareClick(item.icon)}
            title={item.title}
            key={item.icon}
            color={item.color}
            index={index}
          >
            <Icon name={item.icon} />
          </S.ShareIconButton>
        ))}
      </S.ShareList>
    </S.StyledM04ShareButton>
  );
};
