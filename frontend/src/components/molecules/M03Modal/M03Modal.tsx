import { A05Image, ImageNaturalSize } from 'components/atoms/A05Image/A05Image';
import { Gallery } from 'components/blocks/C05ImageGallery/C05ImageGallery';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { Flex, RichText, Text } from 'styles/layout';
import { getImageBySize } from 'util/getImageBySize';
import * as S from './M03Modal.styles';

interface M03ModalProps {
  data: Gallery;
  onClose?: () => void;
  setData: Dispatch<SetStateAction<Gallery | undefined>>;
}

export const M03Modal = ({ data, onClose, setData }: M03ModalProps): ReactElement => {
  const [imageSize, setImageSize] = useState<ImageNaturalSize>();
  const [projects, setProjects] = useState<Array<Gallery>>();

  const animation = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    show: {
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const getImage = () => {
    if (!data) return;

    return getImageBySize(data.Image, 'medium');
  };

  const onImageLoad = (size: ImageNaturalSize) => {
    setImageSize(size);
  };

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const selectProject = (project: Gallery) => {
    const newProject: Gallery = {
      ...project,
      parent: data.parent,
      parentId: data.parentId,
    };
    setData(newProject);
  };

  useEffect(() => {
    if (data) {
      const otherProjects = data.parent?.Gallery.filter((item) => item.id !== data.id);
      setProjects(otherProjects);
    }
  }, [data]);

  return (
    <S.StyledM03Modal animate="show" initial="hidden" exit="hidden" variants={animation}>
      <S.Wrapper>
        <S.Background onClick={handleCloseModal} />
        <S.Close>
          <span className="material-symbols-outlined">close</span>
        </S.Close>
        <S.MiddleWrapper>
          <S.ContentWrapper layoutId="modal" layout>
            <AnimatePresence exitBeforeEnter>
              <S.Content
                key={JSON.stringify(data)}
                animate="show"
                initial="hidden"
                exit="hidden"
                variants={animation}
              >
                {data && getImage() && (
                  <A05Image
                    layout="responsive"
                    src={getImage()}
                    onLoad={onImageLoad}
                    rounded={5}
                    alt={data.Title}
                    autoWidth
                    size="100%"
                    width={imageSize?.naturalWidth || 100}
                    height={imageSize?.naturalHeight || 100}
                  />
                )}
                <Flex flexDirection="column" gap="2.2rem">
                  <div>
                    <S.Title>{data.Title}</S.Title>
                    {data.Category && <S.SubTitle>{data.Category} /</S.SubTitle>}
                  </div>
                  {(data.Client || data.Delivery) && (
                    <S.Meta>
                      <S.Bold>PROJECT</S.Bold>
                      {data.Title}
                      {data.Client && (
                        <>
                          <S.Bold>CLIENT</S.Bold>
                          {data.Client}
                        </>
                      )}
                      {data.Delivery && (
                        <>
                          <S.Bold>Delivery</S.Bold>
                          {data.Delivery}
                        </>
                      )}
                    </S.Meta>
                  )}
                  <div>
                    {data.Description && (
                      <RichText dangerouslySetInnerHTML={{ __html: data.Description }} />
                    )}
                  </div>
                  {projects && (
                    <S.Projects>
                      <Text type="heading02" size="1.8rem" margin="0 0 2rem">
                        MORE PROJECTS
                      </Text>

                      <Flex gap="1.6rem" justifyContent="space-evenly">
                        {projects.map((item) => {
                          const image = getImageBySize(item.Image, 'small');
                          return (
                            <button key={image} onClick={() => selectProject(item)}>
                              <A05Image
                                src={image}
                                alt={item.Title}
                                fit="cover"
                                width={123}
                                size={9.3}
                                autoWidth
                              />
                            </button>
                          );
                        })}
                      </Flex>
                    </S.Projects>
                  )}
                </Flex>
              </S.Content>
            </AnimatePresence>
          </S.ContentWrapper>
        </S.MiddleWrapper>
      </S.Wrapper>
    </S.StyledM03Modal>
  );
};
