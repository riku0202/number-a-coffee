import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import styled from "styled-components";
import { Container } from "./Container";

export default { component: Container } as ComponentMeta<typeof Container>;

export const Primary: ComponentStoryObj<typeof Container> = {
    args: {
        title: "example",
    },
    render: (args) => (
        <Container {...args}>
            <Item>example</Item>
        </Container>
    ),
};

const Item = styled.div`
    width: 500px;
    height: 100%;
`;
