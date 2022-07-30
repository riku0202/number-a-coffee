import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import styled from "styled-components";
import { Modal } from "./modal";

export default { component: Modal } as ComponentMeta<typeof Modal>;

const MockContent = styled.div`
    height: 200px;
    width: 200px;
    background-color: white;
`;

export const Primary: ComponentStoryObj<typeof Modal> = {
    args: {
        open: true,
        children: <MockContent>hoge</MockContent>,
    },
};
