import { Card as MUICard, CardActionArea, CardMedia } from "@mui/material";
import React from "react";
import styled from "styled-components";

type Props = {
    image: string;
    alt: string;
    height: string;
    title: string;
    description: string;
} & Pick<React.ComponentProps<typeof CardActionArea>, "onClick">;

/**
 * Todo: MUIのprops設計を調べる
 */
export const Instagram = (props: Props) => {
    const { onClick, title, description, ...restProps } = props;
    return (
        <MUICard>
            <CardActionArea onClick={onClick}>
                <CardMedia component="img" {...restProps} />
                <TextBox>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </TextBox>
            </CardActionArea>
        </MUICard>
    );
};

const TextBox = styled.div`
    padding: 20px;
`;

const Title = styled.h5`
    font-size: 20px;
`;

const Description = styled.p``;
