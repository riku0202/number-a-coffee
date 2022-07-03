import React from "react";
import styled from "styled-components";

type Props = {
    title: string;
    children: React.ReactNode;
};

export const Container = (props: Props) => {
    return (
        <Wrap>
            <Title>{props.title}</Title>
            <Separate />
            {props.children}
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

const Title = styled.h2`
    font-size: 45px;
`;

const Separate = styled.div`
    margin: 10px 0 0;
    background-color: #111111;
    height: 2px;
    width: 50px;
    margin-bottom: 20px;
`;
