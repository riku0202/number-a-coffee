import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import styled from "styled-components";
import { Layout } from "./Layout";

export default { component: Layout } as ComponentMeta<typeof Layout>;

export const Primary: ComponentStoryObj<typeof Layout> = {
    args: {
        renderBody: ({ Item }) => (
            <Body>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </Body>
        ),
    },
};

const Body = styled.div`
    background-color: blue;
`;

const Positioning = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InnerLayoutWrap = styled.div`
    width: 80vw;
    font-size: 20px;
`;
