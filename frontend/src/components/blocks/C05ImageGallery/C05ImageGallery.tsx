import { M03Modal } from 'components/molecules/M03Modal/M03Modal';
import { ImageAsset } from 'components/templates/T01Blocks/T01Blocks';
import { AnimatePresence } from 'framer-motion';
import { ReactElement, useMemo, useState } from 'react';
import * as S from './C05ImageGallery.styles';
import { Project } from './components/Project/Project';
import { ProjectDetails } from './components/ProjectDetails/ProjectDetails';

export type Gallery = {
  Title: string;
  Description: string;
  Category: string;
  Client: string;
  Delivery: string;
  id: number;
  Excerpt: string;
  Image: ImageAsset;
  parentId?: number;
  parent?: GallerySet;
};

type GallerySet = {
  Title: string;
  Gallery: Array<Gallery>;
  id: number;
};

interface C05ImageGalleryProps {
  data: {
    Gallery: Array<GallerySet>;
  };
}

export const C05ImageGallery = ({ data }: C05ImageGalleryProps): ReactElement => {
  const titles = [...data.Gallery.map((item) => ({ title: item.Title, id: item.id }))];

  if (data.Gallery.length > 1) {
    titles.unshift({ title: 'All', id: -1 });
  }

  const [modalData, setModalData] = useState<Gallery>();
  const [activeGallery, setActiveGallery] = useState(titles[0].id);

  const onTitleClick = (value: number) => {
    setActiveGallery(value);
  };

  const getFilteredGallery = useMemo(() => {
    const gallery: Array<GallerySet> =
      activeGallery === -1
        ? data.Gallery
        : data.Gallery.filter((item) => item.id === activeGallery);

    return gallery.flatMap((item) =>
      item.Gallery.map((subitem: Gallery) => ({ ...subitem, parentId: item.id })),
    );
  }, [activeGallery, data.Gallery]);

  const closeModal = () => {
    setModalData(undefined);
  };

  const showModal = (project: Gallery) => {
    const gallery = data.Gallery.filter((item) => item.id === project.parentId)[0];
    const selectedProject: Gallery = { ...project, parent: gallery };

    setModalData(selectedProject);
  };

  return (
    <S.StyledC05ImageGallery>
      <S.TitleButtonsWrapper>
        {titles.map((item) => (
          <S.TitleButton
            isActive={activeGallery === item.id}
            onClick={() => onTitleClick(item.id)}
            key={item.title}
          >
            {item.title}
          </S.TitleButton>
        ))}
      </S.TitleButtonsWrapper>
      <S.GalleryWrapper>
        <AnimatePresence initial={false}>
          {getFilteredGallery.map((item, index) => (
            <Project onSelect={showModal} data={item} index={index} key={item.Title} />
          ))}
        </AnimatePresence>
      </S.GalleryWrapper>
      <AnimatePresence initial={false}>
        {modalData && (
          <M03Modal onClose={closeModal}>
            <ProjectDetails data={modalData} setData={setModalData} />
          </M03Modal>
        )}
      </AnimatePresence>
    </S.StyledC05ImageGallery>
  );
};
