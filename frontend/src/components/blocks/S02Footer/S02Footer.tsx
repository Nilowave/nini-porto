import { ReactElement } from 'react';
import { Container, RichText, Wrapper } from 'styles/layout';
import * as S from './S02Footer.styles';

interface S02FooterProps {
  data: any;
}

export const S02Footer = ({ data }: S02FooterProps): ReactElement => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Wrapper>
          <S.StyledS02Footer>
            {data && (
              <S.StyledRichText
                dangerouslySetInnerHTML={{ __html: data.Text.replace('{year}', year) }}
              />
            )}
          </S.StyledS02Footer>
        </Wrapper>
      </Container>
    </footer>
  );
};
