import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import * as NextImage from "next/image";
import "../public/reset.css";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: "black",
        values: [
            {
                name: "white",
                value: "white",
            },
            {
                name: "black",
                value: "black",
            },
            {
                name: "twitter",
                value: "#00aced",
            },
            {
                name: "facebook",
                value: "#3b5998",
            },
        ],
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized />,
});
