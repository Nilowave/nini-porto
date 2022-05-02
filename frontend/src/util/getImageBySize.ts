import { ImageAsset } from 'components/templates/T01Blocks/T01Blocks';

type Size = 'small' | 'medium' | 'large';

export const getImageBySize = (asset: ImageAsset, size: Size) => {
  const sizes = ['thumbnail', 'small', 'medium', 'large'];
  const image =
    (asset.data &&
      asset.data.attributes.formats &&
      (asset.data.attributes.formats[size] || {}).url) ||
    (asset.data && asset.data.attributes.url);

  return image;
};
