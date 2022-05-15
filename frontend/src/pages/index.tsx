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
import { theme as appTheme, ThemeType } from 'styles/theme/default';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { A00Loading } from 'components/atoms/A00Loading/A00Loading';

interface HomeProps extends InferGetStaticPropsType<typeof getStaticProps> {
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

const Home = ({
  header,
  blocks,
  profile,
  social,
  footer,
  theme,
  seo,
  appointments,
  ...props
}: HomeProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const isThemeReady = useRef(false);

  useEffect(() => {
    if (theme) {
      const customTheme = {
        ...appTheme,
        colors: {
          ...appTheme.colors,
          primary: theme.PrimaryColor || appTheme.colors.primary,
          secondary: theme.SecondaryColor || appTheme.colors.secondary,
          background: theme.BackgroundColor || appTheme.colors.background,
        },
      };
      if (isThemeReady.current === false) {
        isThemeReady.current = true;
        props.setTheme(customTheme);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isThemeReady]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <A00Loading />;

  return (
    <div>
      <Head>
        <title>{(seo && seo.Title) || 'N Meulens Portfolio'}</title>
        <meta
          name="description"
          content={(seo && seo.Description) || 'Welcome to Nirmala Meulens portfolio website'}
        />
        {seo && seo.Title && <meta property="og:title" content={seo.Title} />}
        {seo && seo.Description && <meta property="og:description" content={seo.Description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundShapes />

      <S01Header data={header} />

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
  const BOOKINGS_PATH = 'appointments';
  const THEME_PATH = 'theme';
  const SEO_PATH = 'seo';

  const header = (await api.get(HEADER_PATH)) as ApiAttributes;
  const footer = (await api.get(FOOTER_PATH)) as ApiAttributes;
  const profile = (await api.get(PROFILE_PATH)) as ApiAttributes;
  const social = (await api.get(SOCIAL_PATH)) as ApiAttributes;
  const theme = (await api.get(THEME_PATH)) as ApiAttributes;
  const seo = (await api.get(SEO_PATH)) as ApiAttributes;
  const appointments = (await api.get(BOOKINGS_PATH)) as ApiAttributes;

  const blocks = (
    (await api.get(BLOCKS_PATH, {
      isCollection: true,
    })) as ApiCollection
  ).sort((a, b) => {
    return a.Order - b.Order;
  });

  return {
    props: {
      blocks,
      header,
      profile,
      social,
      footer,
      theme,
      seo,
      appointments,
    },
    revalidate: 10,
  };
};

export default Home;
