import Head from "next/head";
import Image from "next/image";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Facebook, Instagram } from "./SVG";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"
        />
      </Head>
      <main>
        <Style>
          <div className="layout-menu">
            <p>top</p>
            <p>about</p>
            <p>menu</p>
            <p>access</p>
            <p>social</p>
          </div>
          <div className="layout-image">
            <Image
              alt="NumberACoffee"
              src="/numberAlog.png"
              layout={"responsive"}
              width={160}
              height={260}
              quality={100}
            />
          </div>
          <div className="svg">
            {Instagram()}
            {Facebook()}
          </div>
          <div className="video-wrap">
            <h1 className="number-a-coffee">Number A Coffee</h1>
            <video className="video" playsInline muted autoPlay loop>
              <source
                type="video/mp4"
                src="./custom_movie_01.mp4.samesize.mp4"
              />
            </video>
          </div>
          {children}
        </Style>
      </main>
    </>
  );
};

const Style = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  .layout-menu {
    position: fixed;
    top: 0;
    left: 50%;
    margin: 20px 0 0;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    color: #000000;
    width: 50vw;
    font-size: 40px;
    line-height: 45px;
    z-index: 10;
  }

  .layout-image {
    position: fixed;
    height: 200px;
    width: 200px;
    z-index: 10;
    top: -10px;
    left: -10px;
  }

  .svg {
    position: fixed;
    z-index: 10;
    top: 25px;
    right: 30px;

    svg {
      margin: 0 20px;
      height: 50px;
      fill: black;
    }
  }

  .video-wrap {
    position: fixed;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    .number-a-coffee {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 80px;
      font-weight: bold;
    }

    .video {
      position: absolute;
      z-index: -10;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      min-width: 100%;
      min-height: 100%;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    margin: 0;
    font-family: 'Sawarabi Mincho', sans-serif;
    font-size: 0.625em;
    font-weight: 400;
    text-align: justify;
    box-sizing: border-box;
    letter-spacing: 1px;
  }

  body {
    background-color: #FFFFFF;
  }

  button {
    font: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
