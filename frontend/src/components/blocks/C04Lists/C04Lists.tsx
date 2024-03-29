import { M02MultiColumn } from 'components/molecules/M02MultiColumn/M02MultiColumn';
import { ReactElement, useState, useEffect } from 'react';
import slugify from 'slugify';
import * as S from './C04Lists.styles';

interface C04ListsProps {
  data: any;
}

export const C04Lists = ({ data }: C04ListsProps): ReactElement => {
  const [primaryList, setPrimaryList] = useState<Array<any>>();
  const titles = [data.PrimaryTitle, data.SecondaryTitle].filter((title) => title);
  // const secondaryList = data.SecondaryList.split('\n').map((item: string) => item.substring(2));

  useEffect(() => {
    if (data) {
      const temp = document.createElement('p');
      temp.innerHTML = data.PrimaryList;
      const list = Array.from(temp.querySelectorAll('li')).map((item) => item.innerText);
      setPrimaryList(list);
    }
  }, [data]);

  return (
    <S.StyledC04Lists>
      <M02MultiColumn titles={titles}>
        {data.PrimaryList && (
          <S.List as="ul" gap="1rem" flexDirection="column">
            {primaryList &&
              primaryList.map((item: string, index: number) => (
                <S.ListItem
                  as="li"
                  key={`list-item-${index}-${item}`}
                  alignItems="center"
                  gap="1rem"
                >
                  <S.Check className="material-symbols-outlined filled">done</S.Check>
                  <b>{item}</b>
                </S.ListItem>
              ))}
          </S.List>
        )}

        {data.IconList && (
          <S.List as="ul" gap="1rem" flexDirection="column">
            {data.IconList.map((item: any, index: number) => (
              <S.ListItem as="li" key={`list-item-${index}-${item}`} alignItems="center" gap="1rem">
                <S.Check className="material-symbols-outlined">
                  {slugify(item.Icon, { replacement: '_', lower: true })}
                </S.Check>
                {item.Text}
              </S.ListItem>
            ))}
          </S.List>
        )}
      </M02MultiColumn>
    </S.StyledC04Lists>
  );
};
