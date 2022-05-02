import { getImageBySize } from 'util/getImageBySize';
import { A05Image } from 'components/atoms/A05Image/A05Image';
import { ImageAsset } from 'components/templates/T01Blocks/T01Blocks';
import { ReactElement } from 'react';
import { Flex } from 'styles/layout';
import * as S from './C08Interests.styles';

type Interest = {
  Title: string;
  Icon: ImageAsset;
};

interface C08InterestsProps {
  data: {
    Interest: Array<Interest>;
  };
}

export const C08Interests = ({ data }: C08InterestsProps): ReactElement => {
  return (
    <S.StyledC08Interests>
      <Flex as="ul" flexWrap="wrap" gap="1rem" justifyContent="space-between">
        {data.Interest.map((item: any, index: number) => (
          <S.ListItem
            as="li"
            gap="1rem"
            alignItems="center"
            key={`interest-${index}-${item.Title}`}
          >
            {item.Icon && item.Icon.data && (
              <A05Image src={getImageBySize(item.Icon, 'small')} size={3} alt={item.Title} />
            )}
            <span>{item.Title}</span>
          </S.ListItem>
        ))}
      </Flex>
    </S.StyledC08Interests>
  );
};
