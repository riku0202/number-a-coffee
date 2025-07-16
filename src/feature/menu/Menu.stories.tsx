import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { MicroCMSMenu } from "src/types/microCMSMenu";
import { Menu } from "./Menu";

export default { component: Menu } as ComponentMeta<typeof Menu>;

const mockData: MicroCMSMenu = {
    contents: [
        {
            id: "x3qr72gg2roc",
            createdAt: "2025-07-14T07:01:55.673Z",
            updatedAt: "2025-07-14T07:01:55.673Z",
            publishedAt: "2025-07-14T07:01:55.673Z",
            revisedAt: "2025-07-14T07:01:55.673Z",
            menu: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/c4db1810c4484a76b779356ad9f5b928/IMG_2424.jpeg",
                height: 3508,
                width: 2480
            }
        },
    ],
    totalCount: 1,
    offset: 0,
    limit: 10
};

export const Primary: ComponentStoryObj<typeof Menu> = {
    args: {
        ...mockData,
    },
    render: (args) => <Menu {...args} />,
};

export const Sp: ComponentStoryObj<typeof Menu> = {
    parameters: {
        viewport: {
            defaultViewport: "iphone12",
        },
    },
    args: {
        ...mockData,
    },
    render: (args) => <Menu {...args} />,
};

export const Tab: ComponentStoryObj<typeof Menu> = {
    parameters: {
        viewport: {
            defaultViewport: "ipad12p",
        },
    },
    args: {
        ...mockData,
    },
    render: (args) => <Menu {...args} />,
};