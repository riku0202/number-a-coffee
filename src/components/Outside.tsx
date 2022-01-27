import React, { ReactNode } from "react";
import styled from "styled-components";

export const Outside = ({
  children,
  title,
  className,
}: {
  children: NonNullable<ReactNode>;
  title: string;
  className?: string;
}): JSX.Element => {
  return (
    <Style className={className}>
      <div>
        <h2 id={title}>{title}</h2>
        <div className="separate" />
      </div>
      {children}
    </Style>
  );
};

const Style = styled.div`
  width: 90vw;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 35px;
  padding: 50px 20px;
  background-color: rgba(255, 255, 255, 0.9);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 45px;
    }

    .separate {
      margin: 10px 0 0;
      background-color: #111111;
      height: 2px;
      width: 50px;
    }
  }
`;
