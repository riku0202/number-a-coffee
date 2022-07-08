import styled from "styled-components";

type Props = {
    renderBody: (props: { Item: typeof Item }) => JSX.Element;
};

export const ScrollSnapLayout = (props: Props) => {
    return <List>{props.renderBody({ Item: Item })}</List>;
};

const List = styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    width: 100vw;
    height: 100vh;
`;

const Item = styled.div`
    scroll-snap-align: start;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
