import { M01Progress } from 'components/molecules/M01Progress/M01Progress';
import { M02MultiColumn } from 'components/molecules/M02MultiColumn/M02MultiColumn';
import { ReactElement } from 'react';
import { Flex } from 'styles/layout';
import * as S from './C02PersonalSkills.styles';

enum ContactTitle {
  Address = 'Address',
  DOB = 'D.O.B.',
  Email = 'E-mail',
  Freelance = 'Freelance',
  FullName = 'Full Name',
  Phone = 'Phone',
}
interface C02PersonalSkillsProps {
  data: any;
}

export const C02PersonalSkills = ({ data }: C02PersonalSkillsProps): ReactElement => {
  const titles = [data.PrimaryTitle, data.SecondaryTitle].filter((title) => title);

  return (
    <S.StyledC02PersonalSkills>
      <M02MultiColumn titles={titles}>
        {data.Contact && (
          <S.ContactWrapper>
            {Object.keys(data.Contact).map(
              (item: string, index) =>
                item !== 'id' && (
                  <S.ContactItem
                    as="li"
                    key={`contact-${index}-${item}`}
                    gap="1rem"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <S.ContactTitle>
                      {ContactTitle[item as keyof typeof ContactTitle]}
                    </S.ContactTitle>
                    <S.ContactValue dangerouslySetInnerHTML={{ __html: data.Contact[item] }} />
                  </S.ContactItem>
                ),
            )}
          </S.ContactWrapper>
        )}

        {data.Languages && (
          <Flex as="ul" flexDirection="column" gap="1.6rem">
            {data.Languages.map((item: any, index: number) => (
              <M01Progress
                key={`lang-${index}-${item}`}
                title={item.Title}
                level={item.Percentage}
                type="dots"
              />
            ))}
          </Flex>
        )}
      </M02MultiColumn>
    </S.StyledC02PersonalSkills>
  );
};
