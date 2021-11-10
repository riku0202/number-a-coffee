import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React, { ReactElement } from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";

const Menu = ({ menu }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Menu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/numberAlog.png" />
      </Head>
      <Style></Style>
    </>
  );
};

export default Menu;

Menu.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Style = styled.div``;

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

  const menuJson: Menu = await menuRes.json();

  return {
    props: {
      menu: menuJson,
    },
  };
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
    }
  ];
  totalCount: number;
  offset: number;
  limit: number;
};
