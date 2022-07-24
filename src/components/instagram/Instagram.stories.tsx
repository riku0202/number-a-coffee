import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Instagram } from "./Instagram";

export default { component: Instagram } as ComponentMeta<typeof Instagram>;

export const Primary: ComponentStoryObj<typeof Instagram> = {
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
            <Instagram {...args} />
        </div>
    ),
};

export const List: ComponentStoryObj<typeof Instagram> = {
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
            <Instagram {...args} />
        </div>
    ),
};
