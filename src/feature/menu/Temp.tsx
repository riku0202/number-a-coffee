import Image from "next/image";
import * as React from "react";
import { Container } from "src/components/container";
import styled, { keyframes } from "styled-components";

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
                            loading="eager"
                        />
                    </ImageContainer>
                ))}
            </ImageListContainer>
            <Icon>
                <Icon2>
                    <SVGContainer>
                        <SVG />
                    </SVGContainer>
                    <p style={{ fontSize: "10px" }}>スクロールできます</p>
                </Icon2>
            </Icon>
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)`
    position: relative;
    width: 90vw;
`;

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
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex: 0 0 auto;
    scroll-snap-align: start;
    margin: 0 40px 10px;
`;

const Icon = styled.div`
    position: absolute;
    bottom: 0;
`;

const Icon2 = styled.div`
    position: relative;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SVG = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="#000000"
        viewBox="0 0 256 256"
    >
        <path d="M188,88a27.86,27.86,0,0,0-13.35,3.39A28,28,0,0,0,136,74.7V44a28,28,0,0,0-56,0v80l-3.82-6.13A28,28,0,0,0,27.73,146l4.67,8.23C66.81,214.89,81.05,240,128,240a88.1,88.1,0,0,0,88-88V116A28,28,0,0,0,188,88Zm12,64a72.08,72.08,0,0,1-72,72c-37.63,0-47.84-18-81.68-77.68l-4.69-8.27,0-.05A12,12,0,0,1,46,121.61a11.88,11.88,0,0,1,6-1.6,12,12,0,0,1,10.41,6,1.76,1.76,0,0,0,.14.23l18.67,30A8,8,0,0,0,96,152V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V100a12,12,0,0,1,24,0v20a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0Z"></path>
    </svg>
);

const slideAnimation = keyframes` 
0% {
    opacity: 1;
    transform: translateX(-75px);
  }
  100% {
    opacity: 0;
    transform: translateX(75px);
  }
`;

const SVGContainer = styled.div`
    position: absolute;
    top: -30px;
    opacity: 1;
    animation: ${slideAnimation} 2s infinite;
`;
