import { ReactElement } from 'react';
import { ApiCollection } from 'util/api';
import { blockComponents } from 'util/cmsComponents';
import slugify from 'slugify';
import * as S from './T01Blocks.styles';

type BlockAttributes = {
  Title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Caption: string;
  Order: number;
};

export type Block = {
  id: number;
  attributes: BlockAttributes;
};

interface T01BlocksProps {
  blocks: ApiCollection;
}

export const T01Blocks = ({ blocks }: T01BlocksProps): ReactElement => {
  return (
    <S.StyledT01Blocks>
      {blocks.map((item, index) => (
        <S.StyledBlock
          key={`block-${index}-${item.Title}`}
          id={item.Caption && slugify(item.Caption, { lower: true })}
        >
          <S.StyledTitle>{item.Title}</S.StyledTitle>
          {item.Components.map((component: any) => {
            const componentKey = component.__component.split('.')[1];
            const BlockComponent = blockComponents[componentKey as keyof typeof blockComponents];
            return BlockComponent ? (
              <BlockComponent data={component} key={`comp-${component}-${component.__component}`} />
            ) : (
              <p key={`comp-${component}-${component.__component}`}>{component.__component}</p>
            );
          })}
        </S.StyledBlock>
      ))}
    </S.StyledT01Blocks>
  );
};
