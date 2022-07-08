import Head from "next/head";
import styled from "styled-components";

type Props = {
    children: JSX.Element;
};

export const Layout = (props: Props) => {
    return (
        <>
            <Head>
                <title>Number A Coffee</title>
            </Head>
            <main>
                <VideoContainer>
                    <Title className="number-a-coffee">Number A Coffee</Title>
                    <video className="video" playsInline muted autoPlay loop>
                        <source type="video/mp4" src="/numberA.mp4" />
                    </video>
                </VideoContainer>
                {props.children}
            </main>
        </>
    );
};

const Title = styled.h1`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5vw;
`;

const VideoContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;
