import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Script from "next/script";
import { useMemo } from "react";
import {
    isLook,
    Look,
    LookMenu,
    LOOKS,
    renderLookMarkup,
} from "src/feature/looks/markup";
import { MicroCMSMenu } from "src/types/microCMSMenu";

/**
 * デザイン違いのページ（/roast /morning /pop /kissa /mono）。
 * トップページ（/）はそのまま。メニュー画像はトップと同じ microCMS の menus から取得する。
 * <html data-look> と専用 CSS の読み込みは _document.tsx で行う。
 */
const LookPage = ({
    look,
    menus,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const markup = useMemo(() => renderLookMarkup(look, menus), [look, menus]);
    // "</" を含めないように JSON をエスケープしてから埋め込む
    const data = JSON.stringify({ look, menus }).replace(/</g, "\\u003c");

    return (
        <>
            <Head>
                <title>Number A Coffee</title>
                <meta name="robots" content="noindex" />
            </Head>
            <div dangerouslySetInnerHTML={{ __html: markup }} />
            <script
                id="nac-data"
                type="application/json"
                dangerouslySetInnerHTML={{ __html: data }}
            />
            <Script src="/looks/looks.js" strategy="afterInteractive" />
        </>
    );
};

export default LookPage;

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: LOOKS.map((look) => ({ params: { look } })),
    fallback: false,
});

// API キーがないとき（ローカル確認など）は public の画像で代用する
const FALLBACK_MENUS: LookMenu[] = [1, 2, 3, 4].map((i) => ({
    url: `/menu_${i}.jpeg`,
    width: 2480,
    height: 3508,
}));

export const getStaticProps: GetStaticProps<{
    look: Look;
    menus: LookMenu[];
}> = async ({ params }) => {
    const look = params?.look;
    if (!isLook(look)) return { notFound: true };

    const api = process.env.API_KEY;
    if (!api) return { props: { look, menus: FALLBACK_MENUS } };

    const menuRes = await fetch(
        "https://number-a-coffee.microcms.io/api/v1/menus",
        {
            headers: {
                "X-API-KEY": api,
            },
        },
    );
    const menuJson: MicroCMSMenu = await menuRes.json();
    const menus = (menuJson.contents ?? []).map(({ menu }) => ({
        url: menu.url,
        width: menu.width,
        height: menu.height,
    }));

    return {
        props: { look, menus },
        revalidate: 3600,
    };
};
