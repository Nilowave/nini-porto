import { createContext, ReactElement, useRef } from 'react';
import { ApiAttributes, ApiCollection } from 'util/api';
import { blockComponents } from 'util/cmsComponents';
import slugify from 'slugify';
import * as S from './T01Blocks.styles';
import { scrollTransition } from 'util/scrollTransition';
import { baseComponentTransition } from 'util/baseComponentTransition';
import { BlockContextProvider } from './T01Blocks.context';

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
  structureData: any;
}

export const T01Blocks = ({ blocks, structureData }: T01BlocksProps): ReactElement => {
  const blocksRef = useRef<Array<HTMLElement>>([]);

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
            <BlockComponent
              data={component}
              structureData={structureData}
              key={`comp-${JSON.stringify(component)}-${index}`}
            />
          ) : (
            <p key={`comp-${JSON.stringify(component)}-${index}`}>{component.__component}</p>
          );
        })}
      </>
    );
  };

  const setScrollTrigger = (block: HTMLElement) => {
    if (!blocksRef.current.includes(block)) {
      blocksRef.current.push(block);
      scrollTransition(block, baseComponentTransition(block, { scale: 1.05, x: -20 }));
    }
  };

  return (
    <S.StyledT01Blocks>
      <BlockContextProvider>
        {blocks.map((item, index) => {
          const joins = blocks.filter(
            (joinBlock) => joinBlock.Join.data && joinBlock.Join.data.id === item.id,
          );

          return (
            !item.Join.data && (
              <S.StyledBlock
                key={`block-${index}-${JSON.stringify(item)}`}
                id={item.Caption && slugify(item.Caption, { lower: true })}
                ref={(el) => el && setScrollTrigger(el)}
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
      </BlockContextProvider>
    </S.StyledT01Blocks>
  );
};
