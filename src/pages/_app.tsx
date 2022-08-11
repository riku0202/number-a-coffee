import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useLayoutEffect } from "react";
import "../../public/reset.css";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyBlog = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page);

    useLayoutEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, []);

    return getLayout(<Component {...pageProps} />);
};

export default MyBlog;
