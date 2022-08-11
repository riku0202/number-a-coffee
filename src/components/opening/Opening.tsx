import { CardActionArea } from "@mui/material";
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
export const Opening = (props: Props) => {
    const { onClick, title, description, ...restProps } = props;
    const twitters = "";
    return (
        <Container>
            <div className="shutter">
                <img
                    src="https://news.mynavi.jp/article/20210708-1918224/images/002.jpg"
                    alt="ロゴ"
                    className="logo"
                />
            </div>
            <div className="img"></div>
        </Container>
    );
};

const Container = styled.div`
    .shutter {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: #fff;
        z-index: 99;
        -webkit-animation: byeShutter 2.4s forwards;
        animation: byeShutter 2.4s forwards;
    }
    .logo {
        position: absolute;
        width: 120px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        -webkit-animation: logo 0.8s forwards;
        animation: logo 0.8s forwards;
        animation-delay: 0.2s;
    }
    @keyframes byeShutter {
        70% {
            opacity: 1;
        }
        100% {
            display: none;
            opacity: 0;
            z-index: -1;
        }
    }
    @keyframes logo {
        0% {
            opacity: 1;
        }

        50% {
            transform: rotate(0deg);
        }
        100% {
            transform: scale(0.8);
        }
    }
`;
