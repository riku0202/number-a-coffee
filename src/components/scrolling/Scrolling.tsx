import * as React from "react";
import styled from "styled-components";

export const Scrolling = () => {
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const allHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight,
        );

        const mostBottom = allHeight - window.innerHeight;

        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        ref.current?.scrollTop;
    }, [ref.current?.scrollTop]);

    return (
        <Container ref={ref}>
            <FirstChild />
            <SecondChild />
            <BaseChild />
            <Text>Scroll down</Text>
        </Container>
    );
};

const BaseChild = styled.div`
    position: absolute;
    top: 15px;
    left: 30%;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;

    &:before,
    &:after {
        content: " ";
        position: absolute;
        top: 0;
        height: 100%;
        width: 51%;
        background: #fff;
    }

    &:before {
        left: 0;
        transform: skew(0deg, 30deg);
    }

    &:after {
        right: 0;
        width: 50%;
        transform: skew(0deg, -30deg);
    }
`;

const FirstChild = styled(BaseChild)`
    animation: move 3s ease-out 1s infinite;
`;

const SecondChild = styled(BaseChild)`
    animation: move 3s ease-out 2s infinite;
`;

const Text = styled.p`
    font-size: 12px;
    color: #fff;
    opacity: 0.25;
    animation: pulse 2s linear alternate infinite;
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    @keyframes move {
        25% {
            opacity: 1;
        }
        33% {
            opacity: 1;
            transform: translateY(30px);
        }
        67% {
            opacity: 1;
            transform: translateY(40px);
        }
        100% {
            opacity: 0;
            transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
        }
    }

    @keyframes pulse {
        to {
            opacity: 1;
        }
    }
`;
