import Image from "next/image";
import styled from "styled-components";

export const NewsTile = ({
  url,
  name,
  createdAt,
}: {
  url: string;
  name: string;
  createdAt: string;
}): JSX.Element => {
  return (
    <Style>
      <div>
        <Image
          quality={100}
          layout="fill"
          objectFit="contain"
          alt="image"
          src={`${url}?q=70&w=300`}
        />
      </div>
      <h3>{name}</h3>
      <p>
        {Intl.DateTimeFormat("ja-JP", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date(createdAt))}
      </p>
    </Style>
  );
};

const Style = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
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
    height: 250px;

    img {
      border-radius: 20px 20px 0 0;
    }
  }

  h3 {
    font-size: 20px;
  }
  p {
    font-size: 10px;
  }
`;
