import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Access } from "./Access";

export default { component: Access } as ComponentMeta<typeof Access>;

export const Primary: ComponentStoryObj<typeof Access> = {
    args: {
        text: "example",
    },
    render: () => <Access />,
};

export const Sp: ComponentStoryObj<typeof Access> = {
    parameters: {
        viewport: {
            defaultViewport: "iphone12",
        },
    },
    args: {
        text: "example",
    },
    render: () => <Access />,
};

export const Tab: ComponentStoryObj<typeof Access> = {
    parameters: {
        viewport: {
            defaultViewport: "ipad12p",
        },
    },
    args: {
        text: "example",
    },
    render: () => <Access />,
};
