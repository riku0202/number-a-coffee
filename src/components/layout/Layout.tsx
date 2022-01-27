import Head from "next/head";
import Image from "next/image";
import React, { useReducer } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Facebook, Instagram } from "../../constants/SVG";

export const Layout = ({ children }: { children: JSX.Element }) => {
  const [isOpen, switchIsOpen] = useReducer((state) => !state, false);
  return (
    <>
      <GlobalStyle />
      <Head>
        <title />
      </Head>
      <main>
        <Style>
          {/* pc用 */}
          <div className="pc-background">
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
            <div className="pc-menu">
              <a href="#Top">Top</a>
              <a href="#About">About</a>
              <a href="#News">News</a>
              <a href="#Menu">Menu</a>
              <a href="#Access">Access</a>
              <a href="#Social">Social</a>
              <a href="#Gallery">Gallery</a>
            </div>
            <div className="svg">
              <a href="https://www.instagram.com/numbera.coffee/">
                {Instagram()}
              </a>
              <a href="https://www.facebook.com/Number-A-Coffee-1580096218922774/">
                {Facebook()}
              </a>
            </div>
          </div>
          {/* スマホ・タブレット用 */}
          <div className="sp-background">
            <div className="sp-menu">
              <div
                className={isOpen ? "menu-trigger active" : "menu-trigger"}
                onClick={switchIsOpen}>
                <span></span>
                <span></span>
                <span></span>
              </div>
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
            <div className={isOpen ? "open drawer" : "close drawer"}>
              <a href="#top" className="top" onClick={switchIsOpen}>
                top
              </a>
              <a href="#about" className="about" onClick={switchIsOpen}>
                about
              </a>
              <a href="#news" className="news" onClick={switchIsOpen}>
                news
              </a>
              <a href="#menu-content" className="menu" onClick={switchIsOpen}>
                menu
              </a>
              <a href="#access" className="access" onClick={switchIsOpen}>
                access
              </a>
              <a href="#social" className="social" onClick={switchIsOpen}>
                social
              </a>
              <a href="#gallery" className="gallay" onClick={switchIsOpen}>
                gallery
              </a>
              <div className="svg">
                <a href="https://www.instagram.com/numbera.coffee/">
                  {Instagram()}
                </a>
                <a href="https://www.facebook.com/Number-A-Coffee-1580096218922774/">
                  {Facebook()}
                </a>
              </div>
            </div>
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

export default Layout;

const Style = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  .pc-background {
    position: fixed;
    top: 0;
    right: 0;
    width: 90vw;
    height: 80px;
    background: linear-gradient(to left, #ffffff60 70%, #ffffff01);
    z-index: 9;

    .pc-menu {
      position: absolute;
      width: 70%;
      top: 50%;
      left: 15%;
      transform: translateY(-60%);
      display: flex;
      justify-content: space-between;
      color: #000000;
      font-size: 35px;
      line-height: 37px;
    }

    .svg {
      position: absolute;
      top: 50%;
      right: 2%;
      transform: translateY(-50%);

      svg {
        margin: 0 15px;
        height: 50px;
        fill: black;
      }
    }
  }

  .sp-background {
    display: none;
  }

  .layout-image {
    position: fixed;
    height: 200px;
    width: 200px;
    z-index: 10;
    top: -10px;
    left: -10px;
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

  // スマホ・タブレット
  @media (max-width: 959px) {
    position: relative;
    width: 100%;
    height: 100vh;

    .pc-background {
      display: none;
    }

    .sp-background {
      display: initial;
      position: fixed;
      width: 100%;
      top: 0;
      right: 0;
      z-index: 30;

      .sp-menu {
        position: absolute;
        top: 20px;
        right: 20px;

        .menu-trigger,
        .menu-trigger span {
          display: inline-block;
          transition: all 0.4s;
          box-sizing: border-box;
        }
        .menu-trigger {
          position: relative;
          width: 50px;
          height: 44px;
          background: none;
          border: none;
          appearance: none;
          cursor: pointer;
        }
        .menu-trigger span {
          position: absolute;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: #000000;
          border-radius: 4px;
        }
        .menu-trigger span:nth-of-type(1) {
          top: 0;
        }
        .menu-trigger span:nth-of-type(2) {
          top: 20px;
        }
        .menu-trigger span:nth-of-type(3) {
          bottom: 0;
        }

        .menu-trigger span:nth-of-type(1) {
          animation: menu-bar01 0.75s forwards;
        }
        @keyframes menu-bar01 {
          0% {
            transform: translateY(20px) rotate(45deg);
          }
          50% {
            transform: translateY(20px) rotate(0);
          }
          100% {
            transform: translateY(0) rotate(0);
          }
        }
        .menu-trigger span:nth-of-type(2) {
          transition: all 0.25s 0.25s;
          opacity: 1;
        }
        .menu-trigger span:nth-of-type(3) {
          animation: menu-bar02 0.75s forwards;
        }
        @keyframes menu-bar02 {
          0% {
            transform: translateY(-20px) rotate(-45deg);
          }
          50% {
            transform: translateY(-20px) rotate(0);
          }
          100% {
            transform: translateY(0) rotate(0);
          }
        }
        .menu-trigger.active span:nth-of-type(1) {
          animation: active-menu-bar01 0.75s forwards;
        }
        @keyframes active-menu-bar01 {
          0% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(20px) rotate(0);
          }
          100% {
            transform: translateY(20px) rotate(45deg);
          }
        }
        .menu-trigger.active span:nth-of-type(2) {
          opacity: 0;
        }
        .menu-trigger.active span:nth-of-type(3) {
          animation: active-menu-bar03 0.75s forwards;
        }
        @keyframes active-menu-bar03 {
          0% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-20px) rotate(0);
          }
          100% {
            transform: translateY(-20px) rotate(-45deg);
          }
        }
      }

      .layout-image {
        position: absolute;
        height: 150px;
        width: 150px;
        top: -10px;
        left: -15px;
      }

      // アニメーション
      @keyframes Fade-In {
        0% {
          visibility: hidden;
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes Fade-Out {
        0% {
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          visibility: hidden;
          transform: translateY(30px);
        }
      }

      .open {
        animation: Fade-In 1s forwards;
      }

      .close {
        animation: Fade-Out 1s forwards;
      }

      .drawer {
        position: absolute;
        z-index: -10;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #ffffffa9;
        padding: 10vh 0 20vh;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        font-size: 30px;

        a {
          display: block;
          transition: all 0.5s;
        }

        .svg {
          display: flex;
          position: fixed;
          bottom: 6%;
          right: 5%;

          svg {
            margin: 0 5px;
            height: 45px;
            fill: black;
          }
        }
      }
    }

    .video-wrap {
      position: fixed;
      height: 100vh;
      width: 100vw;
      overflow: hidden;

      .number-a-coffee {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 80px;
        line-height: 90px;
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
    overflow-x:hidden;
  }

  a{
    text-decoration: none;
    color: #111111;
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
