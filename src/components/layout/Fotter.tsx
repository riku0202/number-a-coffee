import React from "react";
import styled from "styled-components";

export const Footer = (): JSX.Element => {
    return (
        <Style>
            <p>Number A Coffee</p>
            <p>Copyright© 2022 Number A Coffee All Rights Reserved.</p>
        </Style>
    );
};

const Style = styled.footer`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    height: 200px;
    font-size: 15px;
    padding: 35px 0 0;

    background: linear-gradient(to top, #ffffff60 50%, #ffffff01);
`;
