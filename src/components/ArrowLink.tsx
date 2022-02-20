import Link from "next/link";
import styled from "styled-components";

export const ArrowLink = ({ path, text }: { path: string; text: string }) => {
  return (
    <Link href={path} passHref>
      <ArrowLinkStyle>
        <p>{text}</p>
      </ArrowLinkStyle>
    </Link>
  );
};

const ArrowLinkStyle = styled.label`
  align-self: flex-end;
  width: 250px;
  cursor: pointer;
  position: relative;
  padding: 0 80px 0 0;
  font-size: 20px;

  ::after {
    position: absolute;
    bottom: -10px;
    right: 35px;
    content: "";
    width: 100%;
    height: 25px;
    border-bottom: solid 1px;
    border-right: solid 1px;
    transform: skew(45deg);
  }
`;
