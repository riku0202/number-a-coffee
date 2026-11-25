import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        // デザイン違いのページ（/roast など）だけ専用の見た目とフォントを読み込む
        const look: string | undefined =
            this.props.__NEXT_DATA__.props?.pageProps?.look;

        return (
            <Html lang="ja" data-look={look}>
                <Head>
                    {look && (
                        <>
                            <link
                                rel="preconnect"
                                href="https://fonts.googleapis.com"
                            />
                            <link
                                rel="preconnect"
                                href="https://fonts.gstatic.com"
                                crossOrigin="anonymous"
                            />
                            <link
                                rel="stylesheet"
                                href="https://fonts.googleapis.com/css2?family=Anton&family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@500;600;700&family=JetBrains+Mono:wght@400;500&family=Kaisei+Tokumin:wght@700;800&family=Shippori+Mincho+B1:wght@500;700&family=Space+Mono:wght@400;700&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap"
                            />
                            <link rel="stylesheet" href="/looks/looks.css" />
                        </>
                    )}
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicons/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicons/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/favicons/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
