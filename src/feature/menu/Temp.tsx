import * as React from "react";
import { Container } from "src/components/container";
import styled from "styled-components";

type Props = {
    images: string[];
};
export const ImageList = (props: Props) => {
    const containerRef = React.useRef(null);

    return (
        <StyledContainer title="MENU">
            <ImageListContainer ref={containerRef}>
                {props.images.map((image, index) => (
                    <ImageContainer key={index}>
                        <Image src={image} alt="image" />
                    </ImageContainer>
                ))}
            </ImageListContainer>
        </StyledContainer>
    );
};

const ImageListContainer = styled.div`
    width: 100%;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    display: flex;
    flex-wrap: nowrap;
    scroll-behavior: smooth;
`;

const ImageContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex: 0 0 auto;
    scroll-snap-align: start;
    margin-right: 16px;
`;

const Image = styled.img`
    height: 500px;
`;

const StyledContainer = styled(Container)`
    width: 90vw;
`;
