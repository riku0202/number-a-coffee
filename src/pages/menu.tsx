import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { ReactElement } from "react";
import { Menu as MenuType } from "src/types/menu";
import styled from "styled-components";
import { Layout } from "../components/layout/Layout";

const Menu = ({ menu }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Menu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/numberAlog.png" />
      </Head>
      <Style>
        <div className="body">
          <p className="title">MENU</p>
          <ul className="container">
            {menu?.contents.map((props, index) => (
              <li key={index} className="item">
                <div className="image">
                  <Image
                    alt="img"
                    src={props.image.url}
                    layout={"responsive"}
                    width={props.image.width}
                    height={props.image.height}
                    quality={100}
                  />
                </div>
                {props.name}
              </li>
            ))}
          </ul>
        </div>
      </Style>
    </>
  );
};

export default Menu;

Menu.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Style = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.9);
    margin: 20vh 0 10vh;
    padding: 40px 0 40px;
    border-radius: 20px;

    .title {
      font-size: 40px;
    }

    .container {
      margin: 30px 0 0;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 10px;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: aliceblue;
        padding: 30px;

        .image {
          width: 200px;
        }
      }
    }
  }
`;

export const getStaticProps = async () => {
  const api = process.env.API_KEY;
  if (api === undefined)
    return {
      props: {
        menu: null,
      },
    };

  const menuRes = await fetch(
    "https://number-a-coffee.microcms.io/api/v1/menu",
    {
      headers: {
        "X-API-KEY": api,
      },
    }
  );

  const menuJson: MenuType = await menuRes.json();

  return {
    props: {
      menu: menuJson,
    },
  };
};
