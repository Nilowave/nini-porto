import { ReactElement } from 'react';
import { Container, Wrapper } from 'styles/layout';
import * as S from './S02Footer.styles';

interface S02FooterProps {
  data: any;
}

export const S02Footer = ({ data }: S02FooterProps): ReactElement => {
  if (!data) return <></>;

  const year = new Date().getFullYear();
  const text = data.Text.replace('{year}', year);

  return (
    <footer>
      <Container>
        <Wrapper>
          <S.StyledS02Footer>{text}</S.StyledS02Footer>
        </Wrapper>
      </Container>
    </footer>
  );
};
