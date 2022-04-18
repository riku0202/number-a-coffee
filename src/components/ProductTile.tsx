import Image from "next/image";
import React from "react";
import styled from "styled-components";

export const ProductTile = ({
    url,
    translation,
    name,
    price,
}: {
    url: string;
    translation: string;
    name: string;
    price: number;
}): JSX.Element => {
    return (
        <Style>
            <div>
                <Image
                    quality={100}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                    alt="image"
                    src={url}
                />
            </div>
            <p>{translation}</p>
            <h3>{name}</h3>
            <p>{`¥${price}`}</p>
        </Style>
    );
};

const Style = styled.li`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 0 0 15px;
    border-radius: 20px;
    background-color: #ffffff;
    width: 100%;
    cursor: pointer;
    transition: 0.2s ease;
    box-shadow: 10px 10px 20px rgb(0 0 0 / 10%);

    ::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        border: 1px solid #0000003a;
        border-radius: 20px;
        box-sizing: border-box;
        top: 0;
        left: 0;
        z-index: 1;
        opacity: 0;
        transition: 0.3s ease;
        transition-property: color, opacity;
        pointer-events: none;
    }

    :hover {
        box-shadow: 2px 2px 8px rgb(0 0 0 / 30%);

        ::before {
            opacity: 1;
        }
    }

    div {
        position: relative;
        width: 100%;
        height: 400px;

        img {
            border-radius: 20px 20px 0 0;
        }
    }

    p:nth-child(2) {
        margin: 10px 0 0;
        font-size: 11px;
    }

    h3 {
        font-size: 20px;
    }
    p:nth-child(4) {
        margin: 10px 0 0;
        font-size: 20px;
    }
`;
