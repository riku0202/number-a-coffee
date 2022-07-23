import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { About } from "./Access";

export default { component: About } as ComponentMeta<typeof About>;

export const Primary: ComponentStoryObj<typeof About> = {
    args: {
        text: "example",
    },
    render: () => <About />,
};

export const Sp: ComponentStoryObj<typeof About> = {
    parameters: {
        viewport: {
            defaultViewport: "iphone12",
        },
    },
    args: {
        text: "example",
    },
    render: () => <About />,
};

export const Tab: ComponentStoryObj<typeof About> = {
    parameters: {
        viewport: {
            defaultViewport: "ipad12p",
        },
    },
    args: {
        text: "example",
    },
    render: () => <About />,
};
