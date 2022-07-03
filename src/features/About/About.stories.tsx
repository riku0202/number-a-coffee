import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { About } from "./About";

export default { component: About } as ComponentMeta<typeof About>;

export const Primary: ComponentStoryObj<typeof About> = {
    args: {
        text: "example",
    },
    render: (args) => <About {...args} />,
};
