import { A01Button } from 'components/atoms/A01Button/A01Button';
import { A05Image } from 'components/atoms/A05Image/A05Image';
import { ImageAsset } from 'components/templates/T01Blocks/T01Blocks';
import { ReactElement, useState } from 'react';
import { getImageBySize } from 'util/getImageBySize';
import { Gallery } from '../../C05ImageGallery';
import * as S from './Project.styles';

interface ProjectProps {
  data: Gallery;
  index: number;
  onSelect: (data: any) => void;
}

export const Project = ({ data, index, onSelect }: ProjectProps): ReactElement => {
  const [height, setHeight] = useState<number>();
  const imageSrc = getImageBySize(data.Image, 'medium');

  const setSize = (data: any) => {
    const size = data.naturalWidth / data.naturalHeight > 0.9 ? 250 : 500;
    setHeight(size);
  };

  const animation = {
    hidden: {
      scale: 1,
      opacity: 0,
      y: 10,
      transition: { delay: index * 0.05, duration: 0.3, ease: 'easeIn' },
    },
    show: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.05, duration: 0.8, ease: 'easeOut' },
    },
  };

  const onClick = () => {
    if (onSelect) {
      onSelect(data);
    }
  };

  return (
    <S.StyledProject
      animate="show"
      initial="hidden"
      exit="hidden"
      variants={animation}
      layout="position"
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      style={height ? { height: `${height}px`, gridRow: `span ${height / 50}` } : {}}
      onClick={onClick}
    >
      <A05Image
        onLoad={setSize}
        src={imageSrc}
        alt={data.Title}
        autoWidth
        fit={'cover'}
        size={height ? height / 10 : 25}
      />
      {height && (
        <S.Overlay>
          <S.Title>{data.Title}</S.Title>
          {data.Excerpt && <S.Text dangerouslySetInnerHTML={{ __html: data.Excerpt }} />}
          <S.StyledButton renderAs="div" title="View more" />
        </S.Overlay>
      )}
    </S.StyledProject>
  );
};
