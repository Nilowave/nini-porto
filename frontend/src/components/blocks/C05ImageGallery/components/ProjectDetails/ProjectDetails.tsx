import { getImageBySize } from 'util/getImageBySize';
import { A05Image, ImageNaturalSize } from 'components/atoms/A05Image/A05Image';
import { Gallery } from 'components/blocks/C05ImageGallery/C05ImageGallery';
import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { Flex, RichText, Text } from 'styles/layout';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import * as S from './ProjectDetails.styles';
import { defaultAnimation } from 'util/animation/variants';

interface ProjectDetailsProps {
  data: Gallery;
  setData: Dispatch<SetStateAction<Gallery | undefined>>;
}

// eslint-disable-next-line no-empty-pattern
export const ProjectDetails = ({ data, setData }: ProjectDetailsProps): ReactElement => {
  const [imageSize, setImageSize] = useState<ImageNaturalSize>();
  const [projects, setProjects] = useState<Array<Gallery>>();

  const getImage = () => {
    if (!data) return;

    return getImageBySize(data.Image, 'medium');
  };

  const onImageLoad = (size: ImageNaturalSize) => {
    setImageSize(size);
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
    <AnimatePresence exitBeforeEnter>
      <S.Content
        key={JSON.stringify(data)}
        animate="show"
        initial="hidden"
        exit="hidden"
        variants={defaultAnimation}
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

              <Flex gap="1.6rem" justifyContent="space-evenly" flexWrap="wrap">
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
  );
};
