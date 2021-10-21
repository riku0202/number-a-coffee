import React, { ReactElement } from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Style>
        <div className="title" />
        <div className="body">
          <div className="about category">
            <div className="category-title">
              <h2>about</h2>
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
          <div className="news category">
            <div className="category-title">
              <h2>news</h2>
              <div className="separate" />
            </div>
            <div className="content"></div>
          </div>
          <div className="menu category">
            <div className="category-title">
              <h2>menu</h2>
              <div className="separate" />
            </div>
            <div className="content"></div>
          </div>
          <div className="access category">
            <div className="category-title">
              <h2>access</h2>
              <div className="separate" />
            </div>
            <div className="content"></div>
          </div>
          <div className="social category">
            <div className="category-title">
              <h2>social</h2>
              <div className="separate" />
            </div>
            <div className="content"></div>
          </div>
        </div>
      </Style>

      {/*<footer className={styles.footer}>*/}
      {/*  <a*/}
      {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Powered by{' '}*/}
      {/*    <span className={styles.logo}>*/}
      {/*      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
      {/*    </span>*/}
      {/*  </a>*/}
      {/*</footer>*/}
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

  .title {
    height: 100vh;
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;

    // 共通のスタイル
    .category {
      margin: 10vh 0 10vh;
      padding: 30px 0 30px;
      width: 90vw;
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

      .content {
        margin: 50px 0 0;
        width: 100%;
      }
    }

    // 個別のスタイル
    .about {
      .content {
        display: flex;
        justify-content: center;

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

    .news {
      height: 35vh;
    }
    .menu {
      height: 35vh;
    }
    .access {
      height: 35vh;
    }
    .social {
      height: 35vh;
    }
  }
`;