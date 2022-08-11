import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import styled from "styled-components";
import { Opening } from "./Opening";

export default { component: Opening } as ComponentMeta<typeof Opening>;

export const Primary: ComponentStoryObj<typeof Opening> = {
    render: (args) => <Opening {...args} />,
};

export const Crossroads: ComponentStoryObj<typeof Opening> = {
    render: () => (
        <StyledCrossroads>
            <div className="top-op"></div>
            <div className="top-op2"></div>
            <div className="img"></div>
        </StyledCrossroads>
    ),
};

const StyledCrossroads = styled.div`
    .top-op,
    .top-op2 {
        position: fixed;
        top: 0;
        left: 0;
        margin: 0 auto;
        width: 100%;
        height: 100vh;
    }
    .top-op {
        z-index: 99;
        background: #f2f2f2;
        animation-duration: 1.2s;
        animation-delay: 1.4s;
        animation-fill-mode: forwards;
        animation-name: top-op;
    }
    .top-op2 {
        z-index: 100;
        background: #e2e2e2;
        animation-duration: 0.7s;
        animation-delay: 0.6s;
        animation-fill-mode: forwards;
        animation-name: top-op2;
    }

    @keyframes top-op {
        0% {
            width: 100%;
            left: 0;
        }
        50% {
            width: 100%;
        }
        100% {
            width: 0%;
            left: 100%;
        }
    }
    @keyframes top-op2 {
        0% {
            width: 100%;
            left: 0;
        }
        50% {
            width: 100%;
        }
        100% {
            width: 0%;
            left: 100%;
        }
    }
`;
