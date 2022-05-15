import { Gallery } from 'components/blocks/C05ImageGallery/C05ImageGallery';
import { ReactElement, ReactNode } from 'react';
import { defaultAnimation } from 'util/animation/variants';
import * as S from './M03Modal.styles';

interface M03ModalProps {
  onClose?: () => void;
  children: ReactNode;
}

export const M03Modal = ({ onClose, children }: M03ModalProps): ReactElement => {
  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <S.StyledM03Modal animate="show" initial="hidden" exit="hidden" variants={defaultAnimation}>
      <S.Wrapper>
        <S.Background onClick={handleCloseModal} />
        <S.Close>
          <span className="material-symbols-outlined">close</span>
        </S.Close>
        <S.MiddleWrapper>
          <S.ContentWrapper layoutId="modal" layout>
            {children}
          </S.ContentWrapper>
        </S.MiddleWrapper>
      </S.Wrapper>
    </S.StyledM03Modal>
  );
};
