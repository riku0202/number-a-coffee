import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { MenuBar } from "./";

export default { component: MenuBar } as ComponentMeta<typeof MenuBar>;

export const Primary: ComponentStoryObj<typeof MenuBar> = {
    args: {},
};
