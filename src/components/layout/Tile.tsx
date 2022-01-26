import Image from "next/image";
import React from "react";
import styled from "styled-components";

export const Tile = ({
  key,
  width,
  height,
  url,
  name,
  price,
}: {
  key: number;
  width: number;
  height: number;
  url: string;
  name: string;
  price: number;
}): JSX.Element => {
  return (
    <Style key={key}>
      <div>
        <Image
          quality={100}
          layout="fill"
          objectFit="cover"
          alt="image"
          src={url}
          width={width}
          height={height}
        />
      </div>
      <h4 className="item-title">{name}</h4>
      <p className="item-price">{`¥${price}`}</p>
    </Style>
  );
};

const Style = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    height: 250px;
    img {
      border-radius: 20px 20px 0 0;
    }
  }

  h4 {
    font-size: 20px;
    margin: 20px 0 10px;
  }
  p {
    font-size: 15px;
    margin: 0 0 20px;
  }
`;
