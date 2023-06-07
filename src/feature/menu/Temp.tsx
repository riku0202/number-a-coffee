import Image from "next/image";
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
                        <Image
                            src={image}
                            alt="image"
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </ImageContainer>
                ))}
            </ImageListContainer>
        </StyledContainer>
    );
};

// const StyledImage = styled(Image)`
//     object-fit: contain;
// `;

const ImageListContainer = styled.div`
    width: 100%;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    display: flex;
    flex-wrap: nowrap;
    scroll-behavior: smooth;
`;

const ImageContainer = styled.div`
    position: relative;
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex: 0 0 auto;
    scroll-snap-align: start;
    margin: 0 40px;
`;

const StyledContainer = styled(Container)`
    width: 90vw;
`;
