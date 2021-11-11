import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";

const Home = ({
  menu,
  news,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Number A Coffee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/numberAlog.png" />
      </Head>
      <Style>
        <div id="top" className="top-title" />
        <div className="body">
          {/* about */}
          <div className="about category">
            <div className="category-title">
              <h2 id="about">about</h2>
              <div className="separate" />
            </div>
            <div className="content">
              <div className="description">
                <p>
                  テストです。テストです。テストです。テストです。
                  テストです。テストです。テストです。テストです。
                  テストです。テストです。テストです。テストです。
                  テストです。テストです。テストです。テストです。
                </p>
              </div>
              <div className="about-image">
                <div className="image01">
                  <Image
                    quality={100}
                    layout="responsive"
                    alt="image"
                    src="/image01.jpg"
                    width="2000"
                    height="1700"
                  />
                </div>
                <div className="image02">
                  <Image
                    quality={100}
                    layout="responsive"
                    alt="image"
                    src="/image02.jpg"
                    width="2900"
                    height="1800"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* news */}
          <div className="news category">
            <div className="category-title">
              <h2 id="news">news</h2>
              <div className="separate" />
            </div>
            <ul className="content">
              {news?.contents.map((props, index) => (
                <li key={index} className="item">
                  <div className="image">
                    <Image
                      quality={100}
                      layout="intrinsic"
                      alt="image"
                      src={props.image.url}
                      width={props.image.width}
                      height={props.image.height}
                    />
                  </div>
                  <p className="item-title">{props.title}</p>
                  <p className="item-created">
                    {Intl.DateTimeFormat("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    }).format(new Date(props.createdAt))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* menu */}
          <div className="menu category">
            <div className="category-title">
              <h2 id="menu-content">menu</h2>
              <div className="separate" />
            </div>
            <ul className="content">
              {menu?.contents.map((props, index) => (
                <li key={index} className="item">
                  <div className="image">
                    <Image
                      quality={100}
                      layout="intrinsic"
                      alt="image"
                      src={props.image.url}
                      width={props.image.width}
                      height={props.image.height}
                    />
                  </div>
                  <p className="item-title">{props.name}</p>
                  <p className="item-created">
                    {Intl.DateTimeFormat("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    }).format(new Date(props.createdAt))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* access */}
          <div className="access category">
            <div className="category-title">
              <h2 id="access">access</h2>
              <div className="separate" />
            </div>
            <div className="content">
              <iframe
                width={805}
                height={500}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_4s9JQn5GmARkMDqF2kMCv8&key=AIzaSyAHuqkRtWban5qZEqO6sUWyw1Z__A8XDBI"
              />
              <div className="access-info">
                <p className="access-title">Number A Coffee</p>
                <p className="sub-title">住所</p>
                <p className="access-content">
                  〒436-0061
                  <br />
                  静岡県掛川市水垂936ｰ1
                </p>
                <p className="sub-title">営業時間</p>
                <p className="access-content">
                  平日9:00-17:00
                  <br />
                  土日祝7:30-17:00
                </p>
                <p className="sub-title">電話番号</p>
                <p className="access-content">0537-28-7242</p>
              </div>
            </div>
          </div>
          {/* social */}
          <div className="social category">
            <div className="category-title">
              <h2 id="social">Social</h2>
              <div className="separate" />
            </div>
            <div className="content"></div>
          </div>
          {/* gallery */}
          <div className="gallery category">
            <div className="category-title">
              <h2 id="gallery">Gallery</h2>
              <div className="separate" />
            </div>
            <div className="content"></div>
          </div>
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
    background-color: transparent;

    // グローバルスタイル
    .category {
      width: 90vw;
      margin: 10vh 0 10vh;
      padding: 50px 0 50px;
      border-radius: 20px;

      background-color: rgba(255, 255, 255, 0.9);

      .category-title {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
          font-size: 45px;
        }

        .separate {
          margin: 10px 0 0;
          background-color: #111111;
          height: 2px;
          width: 50px;
        }
      }
    }

    // about
    .about {
      .content {
        display: flex;
        justify-content: center;
        margin: 50px 0 0;
        width: 100%;

        .description {
          width: 600px;
          text-align: center;

          p {
            margin: 50px 0 0;
            font-size: 40px;
            line-height: 50px;
          }
        }

        .about-image {
          width: 600px;
          margin: 0 0 0 100px;

          .image01 {
            position: relative;
            width: 350px;
            z-index: 1;
          }

          .image02 {
            position: relative;
            bottom: 80px;
            left: 250px;
            width: 400px;
          }
        }
      }
    }

    // news
    .news {
      .content {
        display: flex;
        justify-content: space-evenly;
        padding: 40px;
        width: 100%;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .image {
            width: 300px;
          }

          .item-title {
            font-size: 20px;
            margin: 30px 0;
          }
          .item-created {
            align-self: flex-end;
            font-size: 10px;
          }
        }
      }
    }

    // menu
    .menu {
      .content {
        display: flex;
        justify-content: space-evenly;
        padding: 40px;
        width: 100%;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;

          .image {
            width: 300px;
          }

          .item-title {
            font-size: 20px;
            margin: 30px 0;
          }
          .item-created {
            align-self: flex-end;
            font-size: 10px;
          }
        }
      }
    }

    // access
    .access {
      .content {
        display: flex;
        justify-content: center;
        margin: 50px 0 0;
        width: 100%;
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
      height: 35vh;
    }

    // gallery
    .gallery {
      height: 35vh;
    }
  }

  // スマホ・タブレット
  @media (max-width: 959px) {
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
        width: 90vw;
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
          margin: 50px 0 0;
          width: 100%;
        }
      }

      // about
      .about {
        .content {
          .description {
            width: 600px;
            text-align: center;

            p {
              margin: 50px 0 0;
              font-size: 40px;
              line-height: 50px;
            }
          }

          .about-image {
            width: 600px;
            margin: 0 0 0 100px;

            .image01 {
              position: relative;
              width: 350px;
              z-index: 1;
            }

            .image02 {
              position: relative;
              bottom: 80px;
              left: 250px;
              width: 400px;
            }
          }
        }
      }

      // news
      .news {
        height: 35vh;
      }

      // menu
      .menu {
        height: 35vh;
      }

      // access
      .access {
        .content {
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
        height: 35vh;
      }

      // gallery
      .gallery {
        height: 35vh;
      }
    }
  }
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
    "https://number-a-coffee.microcms.io/api/v1/menu",
    {
      headers: {
        "X-API-KEY": api,
      },
    }
  );
  const newsRes = await fetch(
    "https://number-a-coffee.microcms.io/api/v1/news",
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

type News = {
  contents: [
    {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      title: string;
      contents: string;
      image: {
        url: string;
        height: number;
        width: number;
      };
    }
  ];
  totalCount: number;
  offset: number;
  limit: number;
};

type Menu = {
  contents: [
    {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      name: string;
      description: string;
      price: number;
      image: {
        url: string;
        height: number;
        width: number;
      };
      category: {
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        name: string;
      };
    },
    {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      name: string;
      description: string;
      price: number;
      image: {
        url: string;
        height: number;
        width: number;
      };
      category: {
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        name: string;
      };
    }
  ];
  totalCount: number;
  offset: number;
  limit: number;
};
