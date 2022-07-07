import { useMediaQuery } from "@mui/material";
import React from "react";
import styled from "styled-components";

type Props = {
    title: string;
    children: React.ReactNode;
} & React.ComponentProps<typeof Wrap>;

export const Container = (props: Props) => {
    const isPc = useMediaQuery("(min-width:920px)");
    const { title, children, ...rest } = props;
    return (
        <Wrap {...rest}>
            <Title isPc={isPc}>{title}</Title>
            <Separate isPc={isPc} />
            {children}
        </Wrap>
    );
};

const Wrap = styled.div`
    width: 100%;
    border-radius: 20px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2<{ isPc: boolean }>`
    font-size: ${(props) => (props.isPc ? "45px" : "30px")};
`;

const Separate = styled.div<{ isPc: boolean }>`
    margin: ${(props) => (props.isPc ? "10px" : "5px")} 0 0;
    background-color: #111111;
    height: 2px;
    width: 50px;
    margin-bottom: 20px;
`;
