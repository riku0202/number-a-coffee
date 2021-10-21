import type { ReactElement, ReactNode } from "react";
import React from "react";
import Head from "next/head"
import type { AppProps } from "next/app";
import type { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyBlog = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
  
    <>
     <Head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap" />
  </Head>
  <Component {...pageProps} />
</>
  
  );
};

export default MyBlog;
