import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { About } from "src/components/About";
import { Access } from "src/components/Access";
import Layout from "src/components/layout/Layout";
import { Menu } from "src/components/Menu";
import { News } from "src/components/News";
import { NewsTile } from "src/components/NewsTile";
import { Outside } from "src/components/Outside";
import { ProductTile } from "src/components/ProductTile";
import { Menu as MenuType } from "src/types/menu";
import { News as NewsType } from "src/types/news";
import styled from "styled-components";

const Home = ({
  menu,
  news,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!news || !menu) throw new Error("news is undefined");

  return (
    <>
      <Head>
        <title>Number A Coffee</title>
      </Head>
      <Style>
        <div id="Top" className="top-title" />
        <div className="body">
          <About />
          <News news={news} />
          <Menu menu={menu} />
          <Access />
          <SocialStyle title="Social">
            <h3>ComingSoon...</h3>
          </SocialStyle>
          <GalleryStyle title="Gallery">
            <h3>ComingSoon...</h3>
          </GalleryStyle>
        </div>
      </Style>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Style = styled.div`
  position: relative;
  z-index: 2;

  .top-title {
    height: 100vh;
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10vw;
    background-color: transparent;
    padding: 0 0 10vw;
  }
`;

const SocialStyle = styled(Outside)`
  align-items: center;
  font-size: 35px;
`;

const GalleryStyle = styled(Outside)`
  align-items: center;
  font-size: 35px;
`;

export const getStaticProps = async () => {
  const api = process.env.API_KEY;
  if (api === undefined) {
    return {
      props: {
        menu: null,
      },
    };
  }

  const menuRes = await fetch(
    "https://number-a-coffee.microcms.io/api/v1/menu?limit=4",
    {
      headers: {
        "X-API-KEY": api,
      },
    }
  );
  const newsRes = await fetch(
    "https://number-a-coffee.microcms.io/api/v1/news?limit=4",
    {
      headers: {
        "X-API-KEY": api,
      },
    }
  );

  const menuJson: MenuType = await menuRes.json();
  const newsJson: NewsType = await newsRes.json();

  return {
    props: {
      menu: menuJson,
      news: newsJson,
    },
  };
};
