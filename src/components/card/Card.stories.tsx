import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Card } from "./Card";

export default { component: Card } as ComponentMeta<typeof Card>;

export const Primary: ComponentStoryObj<typeof Card> = {
    args: {
        image: "/image01.jpg",
        alt: "iamge01",
        height: "200",
        onClick: () => alert("click"),
        title: "TitleTitleTitleTitleTitleTitle",
        description:
            "DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
    },
    render: (args) => (
        <div style={{ width: "500px" }}>
            <Card {...args} />
        </div>
    ),
};

export const List: ComponentStoryObj<typeof Card> = {
    args: {
        image: "/image01.jpg",
        alt: "iamge01",
        height: "400",
        onClick: () => alert("click"),
        title: "TitleTitleTitleTitleTitleTitle",
        description:
            "DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription",
    },
    render: (args) => (
        <div style={{ width: "500px" }}>
            <Card {...args} />
        </div>
    ),
};
