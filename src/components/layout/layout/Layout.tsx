import { useMediaQuery } from "@mui/material";
import Head from "next/head";
import { Scrolling } from "src/components/scrolling";
import styled from "styled-components";

type Props = {
    children: JSX.Element;
};

export const Layout = (props: Props) => {
    const isPc = useMediaQuery("(min-width:920px)");
    return (
        <>
            <Head>
                <title>Number A Coffee</title>
            </Head>
            <main>
                <Background>
                    <Video preload="auto" playsInline muted autoPlay loop>
                        <source type="video/mp4" src="/numberA.mp4" />
                    </Video>
                    <OverLay />
                    {isPc ? (
                        <Title>Number A Coffee</Title>
                    ) : (
                        <TitleSP>
                            <p>Number</p>
                            <p>A</p>
                            <p>Coffee</p>
                        </TitleSP>
                    )}
                </Background>
                <ScrollingWrap>
                    <Scrolling />
                </ScrollingWrap>
                {props.children}
            </main>
        </>
    );
};

const ScrollingWrap = styled.div`
    position: fixed;
    left: 30px;
    bottom: 80px;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh; /* Fallback */
    height: calc(var(--vh, 1vh) * 100);
    width: 100%;
`;

const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const OverLay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    white-space: nowrap;
    color: white;
`;

const TitleSP = styled.h1`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    color: white;
`;
