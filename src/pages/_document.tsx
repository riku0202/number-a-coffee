import Document, { DocumentContext } from "next/document";
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
}

// const MyDocument = () => {
//     const url = "<https://example.com>";
//     const title = "Demo Next.js";
//     const description = "Demo of Next.js";

//     return (
//         <Html lang="ja-JP">
//             <body>
//                 <Main />
//                 <NextScript />
//             </body>
//         </Html>
//     );
// };

// export default MyDocument;
