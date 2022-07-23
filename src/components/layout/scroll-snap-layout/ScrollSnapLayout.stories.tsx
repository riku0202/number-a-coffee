import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import styled from "styled-components";
import { ScrollSnapLayout } from "./ScrollSnapLayout";

export default { component: ScrollSnapLayout } as ComponentMeta<
    typeof ScrollSnapLayout
>;

export const Primary: ComponentStoryObj<typeof ScrollSnapLayout> = {
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
