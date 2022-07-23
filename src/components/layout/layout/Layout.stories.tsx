import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import styled from "styled-components";
import { Layout } from "./Layout";

export default { component: Layout } as ComponentMeta<typeof Layout>;

export const Primary: ComponentStoryObj<typeof Layout> = {
    args: {
        children: <></>,
    },
};
