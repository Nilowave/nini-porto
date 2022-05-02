import { ReactElement } from 'react';
import { M02MultiColumn } from 'components/molecules/M02MultiColumn/M02MultiColumn';
import * as S from './C03SkillSet.styles';
import { Flex } from 'styles/layout';
import { M01Progress } from 'components/molecules/M01Progress/M01Progress';

interface C03SkillSetProps {
  data: any;
}

// eslint-disable-next-line no-empty-pattern
export const C03SkillSet = ({ data }: C03SkillSetProps): ReactElement => {
  const titles = [data.PrimaryTitle, data.SecondaryTitle].filter((title) => title);
  return (
    <S.StyledC03SkillSet>
      <M02MultiColumn titles={titles}>
        {data.Primary && (
          <Flex as="ul" flexDirection="column" gap="1.6rem">
            {data.Primary.map((item: any, index: number) => (
              <M01Progress
                key={`lang-${index}-${item}`}
                title={item.Title}
                level={item.Percentage}
                type={item.Display.toLowerCase()}
              />
            ))}
          </Flex>
        )}
        {data.Secondary && (
          <Flex as="ul" flexDirection="row" gap="1.6rem" flexWrap="wrap">
            {data.Secondary.map((item: any, index: number) => (
              <M01Progress
                key={`lang-${index}-${item}`}
                title={item.Title}
                level={item.Percentage}
                type={item.Display.toLowerCase()}
                reverse
              />
            ))}
          </Flex>
        )}
      </M02MultiColumn>
    </S.StyledC03SkillSet>
  );
};
