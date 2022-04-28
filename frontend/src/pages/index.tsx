import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import { T01Blocks } from 'components/templates/T01Blocks/T01Blocks';
import { S01Header } from 'components/blocks/S01Header/S01Header';
import { Container, DesktopPadding, Wrapper } from 'styles/layout';
import { S03ProfileCard } from 'components/blocks/S03ProfileCard/S03ProfileCard';
import { S05SideNavigation } from 'components/blocks/S05SideNavigation/S05SideNavigation';
import { BackgroundShapes } from 'components/atoms/BackgroundShapes/BackgroundShapes';
import { S02Footer } from 'components/blocks/S02Footer/S02Footer';
import { api, ApiCollection, ApiAttributes } from 'util/api';

const Home = ({
  logo,
  blocks,
  profile,
  social,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundShapes />

      <S01Header logo={logo} />

      <main>
        <DesktopPadding>
          <Container>
            <Wrapper>
              <S05SideNavigation data={blocks} />
              <S03ProfileCard data={profile} social={social} />
              <T01Blocks blocks={blocks} />
            </Wrapper>
          </Container>
        </DesktopPadding>
      </main>

      <S02Footer data={footer} />
    </div>
  );
};

export const getStaticProps = async () => {
  const HEADER_PATH = 's01-header?populate=deep';
  const FOOTER_PATH = 's02-footer?populate=deep';
  const PROFILE_PATH = 's03-profile-card?populate=deep';
  const SOCIAL_PATH = 's04-social-sharing?populate=deep';
  const BLOCKS_PATH = 'blocks?populate=deep';

  const headerData = (await api.get(HEADER_PATH)) as ApiAttributes;
  const footer = (await api.get(FOOTER_PATH)) as ApiAttributes;
  const profile = (await api.get(PROFILE_PATH)) as ApiAttributes;
  const social = (await api.get(SOCIAL_PATH)) as ApiAttributes;

  const blocks = (
    (await api.get(BLOCKS_PATH, {
      isCollection: true,
    })) as ApiCollection
  ).sort((a, b) => {
    return a.Order - b.Order;
  });

  const logo: ApiAttributes = headerData.Logo.data.attributes;

  return {
    props: {
      blocks,
      logo,
      profile,
      social,
      footer,
    },
  };
};

export default Home;
