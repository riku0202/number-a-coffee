import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Card } from "./Card";

export default { component: Card } as ComponentMeta<typeof Card>;

export const Index: ComponentStoryObj<typeof Card> = {
    args: {
        image: "/image01.jpg",
        alt: "iamge01",
        height: "200",
    },
    render: (args) => (
        <div style={{ width: "500px" }}>
            <Card {...args} />
        </div>
    ),
};
