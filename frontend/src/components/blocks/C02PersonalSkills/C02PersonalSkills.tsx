import { M01Progress } from 'components/molecules/M01Progress/M01Progress';
import { M02MultiColumn } from 'components/molecules/M02MultiColumn/M02MultiColumn';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { Flex } from 'styles/layout';
import * as S from './C02PersonalSkills.styles';
import { scrollTransition } from 'util/scrollTransition';
import { baseComponentTransition } from 'util/baseComponentTransition';

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
  const componentRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<Array<HTMLElement>>([]);
  const titles = [data.PrimaryTitle, data.SecondaryTitle].filter((title) => title);

  useEffect(() => {
    if (componentRef.current) {
      scrollTransition(componentRef.current, baseComponentTransition(contentRef.current));
    }
  }, [contentRef]);

  return (
    <S.StyledC02PersonalSkills ref={componentRef}>
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
                    ref={(el: HTMLLIElement) => contentRef.current.push(el)}
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
                refitem={(el: HTMLDivElement) => contentRef.current.push(el)}
              />
            ))}
          </Flex>
        )}
      </M02MultiColumn>
    </S.StyledC02PersonalSkills>
  );
};
