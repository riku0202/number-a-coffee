import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
import Layout from "src/components/layout/Layout";
import { NewsTile } from "src/components/NewsTile";
import { Outside } from "src/components/Outside";
import { ProductTile } from "src/components/ProductTile";
import { Menu } from "src/types/menu";
import { News } from "src/types/news";
import styled from "styled-components";

const Home = ({
  menu,
  news,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Number A Coffee</title>
      </Head>
      <Style>
        <div id="Top" className="top-title" />
        <div className="body">
          <AboutStyle title="About">
            <div className="container">
              <div>
                <h3>進化するスペシャルティコーヒー</h3>
                <p>
                  その鍵となるのは生産者の
                  <br />
                  努力、ロースターの情熱、そしてバリスタの探求心。
                  <br />
                  カップの中に表現されたフレーバーの多様性を感じてみて下さい。
                </p>
              </div>
              <div>
                <Image
                  quality={100}
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                  src="/image02.jpg"
                />
              </div>
            </div>
          </AboutStyle>
          <NewsStyle title="News">
            <ul>
              {news?.contents.map((props) => (
                <NewsTile
                  key={props.id}
                  url={props.image.url}
                  name={props.title}
                  createdAt={props.createdAt}
                />
              ))}
            </ul>
            <Link href="/menu" passHref>
              <ArrowLink>
                <div className="more">お知らせを見る</div>
              </ArrowLink>
            </Link>
          </NewsStyle>
          <MenuStyle title="Menu">
            <ul className="content">
              {menu?.contents.map((props, index) => (
                <ProductTile
                  key={index}
                  url={props.image.url}
                  translation={props.japanese_name}
                  name={props.name}
                  price={props.price}
                />
              ))}
            </ul>
            <Link href="/menu" passHref>
              <ArrowLink>
                <div className="more">メニューを見る</div>
              </ArrowLink>
            </Link>
          </MenuStyle>
          <AccessStyle title="Access">
            <div className="container">
              <div>
                <iframe
                  width="100%"
                  height={500}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_4s9JQn5GmARkMDqF2kMCv8&key=AIzaSyAHuqkRtWban5qZEqO6sUWyw1Z__A8XDBI"
                />
              </div>
              <div>
                <h3>Number A Coffee</h3>
                <p>住所</p>
                <p>
                  〒436-0061
                  <br />
                  静岡県掛川市水垂936ｰ1
                </p>
                <p>営業時間</p>
                <p>
                  平日9:00-17:00
                  <br />
                  土日祝7:30-17:00
                </p>
                <p>電話番号</p>
                <a href="tel:0537-28-7242">0537-28-7242</a>
              </div>
            </div>
          </AccessStyle>
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

const ArrowLink = styled.label`
  align-self: flex-end;
  width: 250px;
  cursor: pointer;
  position: relative;
  padding: 0 80px 0 0;
  font-size: 20px;

  ::after {
    position: absolute;
    bottom: -10px;
    right: 35px;
    content: "";
    width: 100%;
    height: 25px;
    border-bottom: solid 1px;
    border-right: solid 1px;
    transform: skew(45deg);
  }
`;

const AboutStyle = styled(Outside)`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;

    div:nth-child(1) {
      width: 100%;
      display: flex;
      gap: 30px;
      padding: 0 20px;
      text-align: center;
      line-height: 30px;

      h3 {
        font-size: 25px;
      }

      p {
        font-size: 17px;
      }
    }

    div:nth-child(2) {
      position: relative;
      height: 450px;
      width: 100%;

      img {
        border-radius: 20px;
      }
    }
  }
`;

const NewsStyle = styled(Outside)`
  padding: 50px 20px 30px;

  label:nth-child(3) {
    margin: 20px 0 0;
  }

  ul {
    display: flex;
    gap: 20px;
    li {
      width: 100%;
    }
  }
`;

const MenuStyle = styled(Outside)`
  padding: 50px 20px 30px;

  label:nth-child(3) {
    margin: 20px 0 0;
  }

  ul {
    display: flex;
    gap: 20px;
  }
`;

const AccessStyle = styled(Outside)`
  .container {
    display: flex;
    flex-direction: row;

    div:nth-child(1) {
      width: 70%;
    }

    div:nth-child(2) {
      width: 30%;

      h3 {
        font-size: 30px;
      }

      p,
      a {
        font-size: 20px;
        line-height: 27px;

        :nth-child(2n) {
          margin: 40px 0 0;
        }
      }
    }
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

  const menuJson: Menu = await menuRes.json();
  const newsJson: News = await newsRes.json();

  return {
    props: {
      menu: menuJson,
      news: newsJson,
    },
  };
};
