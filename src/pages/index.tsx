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
                  その鍵となるのは生産者の努力、ロースターの情熱、そしてバリスタの探求心。
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

// スマホ・タブレット
/* @media (max-width: 959px) {
    position: relative;
    z-index: 2;

    .title {
      height: 100vh;
    }

    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: transparent;

      // グローバルスタイル
      .category {
        margin: 5vh 0 5vh;
        padding: 5vh 0 5vh;
        width: 93vw;
        border-radius: 20px;

        background-color: rgba(255, 255, 255, 0.9);

        .category-title {
          display: flex;
          flex-direction: column;
          align-items: center;

          h2 {
            font-size: 35px;
          }

          .separate {
            margin: 10px 0 0;
            background-color: #111111;
            height: 2px;
            width: 50px;
          }
        }

        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 20px 0 0;
          width: 100%;
        }
      }

      // about
      .about {
        .content {
          padding: 0 10px;
          .description {
            width: 100%;
            p {
              margin: 0;
              text-align: center;
              font-size: 20px;
              line-height: 25px;
            }
          }

          .about-image {
            width: 100%;
            margin: 0;
            .image01 {
              width: 100%;
              position: relative;
              top: 0;
              left: 0;
            }

            .image02 {
              width: 100%;
              position: relative;
              top: 0;
              left: 0;
            }
          }
        }
      }

      // news
      .news {
        .content {
          width: 100%;

          .item {
            display: block;
            margin: 10px;
            border-radius: 20px;
            background-color: #ffffff;
            width: 95%;
            cursor: pointer;

            .image {
              position: relative;
              width: 100%;
              height: 250px;

              & div {
                border-radius: 20px 20px 0 0;
              }
            }

            .item-title {
              font-size: 20px;
              margin: 20px 20px 0;
            }
            .item-created {
              align-self: flex-end;
              font-size: 10px;
              margin: 15px 23px 20px;
            }

            ::before {
              content: none;
            }

            :hover {
              box-shadow: 2px 2px 8px rgb(0 0 0 / 30%);
            }
          }
        }
        .more {
          cursor: pointer;
          position: relative;
          text-align: right;
          padding: 0 0 0;
          font-size: 15px;
          line-height: 20px;
          ::after {
            position: absolute;
            bottom: -10px;
            right: 45px;
            content: "";
            width: 250px;
            height: 25px;
            border-bottom: solid 1px;
            border-right: solid 1px;
            transform: skew(45deg);
          }
        }
      }

      // menu
      .menu {
        .content {
          width: 100%;

          .item {
            display: block;
            margin: 10px;
            border-radius: 20px;
            background-color: #ffffff;
            width: 95%;
            cursor: pointer;

            .image {
              position: relative;
              width: 100%;
              height: 250px;

              & div {
                border-radius: 20px 20px 0 0;
              }
            }

            .item-title {
              font-size: 20px;
              margin: 20px 20px 0;
            }
            .item-price {
              font-size: 17px;
              margin: -15px 20px 20px;
              text-align: right;
            }

            ::before {
              content: none;
            }

            :hover {
              box-shadow: 2px 2px 8px rgb(0 0 0 / 30%);

              ::before {
              }
            }
          }
        }
      }

      // access
      .access {
        .content {
          padding: 10px;
          .map-wrapper iframe {
            margin: 0 0 20px;
            height: 100%;
            width: 100%;
          }
          .access-info {
            margin: 0 0 0 50px;

            .access-title {
              font-size: 30px;
            }

            .sub-title {
              margin: 40px 0 10px;
              font-size: 20px;
            }

            .access-content {
              line-height: 30px;
              font-size: 23px;
            }
          }
        }
      }

      // social
      .social {
        .content {
          p {
            padding: 0 0 30px;
            text-align: center;
            font-size: 40px;
            line-height: 45px;
          }
        }
      }

      // gallery
      .gallery {
        .content {
          p {
            padding: 0 0 30px;
            text-align: center;
            font-size: 40px;
            line-height: 45px;
          }
        }
      }
    }
  } */

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
