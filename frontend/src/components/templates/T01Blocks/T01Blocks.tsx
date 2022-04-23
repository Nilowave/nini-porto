import { ReactElement } from 'react';
import { SitePadding } from 'styles/layout';
import { ApiCollection } from 'util/api';
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
      <SitePadding>
        <div>T01Blocks</div>
      </SitePadding>
    </S.StyledT01Blocks>
  );
};
