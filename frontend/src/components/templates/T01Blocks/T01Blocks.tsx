import { ReactElement } from 'react';
import { ApiAttributes, ApiCollection } from 'util/api';
import { blockComponents } from 'util/cmsComponents';
import slugify from 'slugify';
import * as S from './T01Blocks.styles';

export type ImageAsset = {
  data?: {
    attributes: {
      url: string;
      formats?: any;
    };
  };
};

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
  const renderBlock = (item: ApiAttributes) => {
    const hasGallery = item.Components.filter((component: any) =>
      component.__component.includes('c05-image-gallery'),
    );

    const renderComponents =
      hasGallery.length > 0
        ? [
            ...item.Components.filter(
              (component: any) => !component.__component.includes('c05-image-gallery'),
            ),
            {
              __component: hasGallery[0].__component,
              Gallery: hasGallery,
            },
          ]
        : item.Components;

    return (
      <>
        <S.StyledTitle>{item.Title}</S.StyledTitle>
        {renderComponents.map((component: any, index: number) => {
          const componentKey = component.__component.split('.')[1];
          const BlockComponent = blockComponents[componentKey as keyof typeof blockComponents];
          return BlockComponent ? (
            <BlockComponent data={component} key={`comp-${JSON.stringify(component)}-${index}`} />
          ) : (
            <p key={`comp-${JSON.stringify(component)}-${index}`}>{component.__component}</p>
          );
        })}
      </>
    );
  };

  return (
    <S.StyledT01Blocks>
      {blocks.map((item, index) => {
        const joins = blocks.filter(
          (joinBlock) => joinBlock.Join.data && joinBlock.Join.data.id === item.id,
        );

        return (
          !item.Join.data && (
            <S.StyledBlock
              key={`block-${index}-${JSON.stringify(item)}`}
              id={item.Caption && slugify(item.Caption, { lower: true })}
            >
              {renderBlock(item)}
              {joins.length > 0 &&
                joins.map((join, joinindex) => (
                  <S.JoinBlock
                    id={join.Caption && slugify(join.Caption, { lower: true })}
                    key={`join-block-${joinindex}-${JSON.stringify(join)}`}
                  >
                    {renderBlock(join)}
                  </S.JoinBlock>
                ))}
            </S.StyledBlock>
          )
        );
      })}
    </S.StyledT01Blocks>
  );
};
