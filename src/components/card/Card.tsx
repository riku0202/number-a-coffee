import { Card as MUICard, CardActionArea, CardMedia } from "@mui/material";
import styled from "styled-components";

type Props = {
    image: string;
    alt: string;
    height: string;
};

export const Card = (props: Props) => {
    return (
        <MUICard>
            <CardActionArea>
                <CardMedia component="img" {...props} />
                <TextBox>
                    <Title>コーヒー</Title>
                    <Description>
                        説明説明説明説明説明説明説明説明説明説明説明説明
                    </Description>
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
