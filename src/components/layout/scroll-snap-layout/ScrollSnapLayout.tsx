import styled from "styled-components";

export const ScrollSnapLayout = () => {
    return (
        <Wrap>
            <Item></Item>
            <Item2></Item2>
            <Item></Item>
            <Item2></Item2>
            <Item></Item>
            <Item2></Item2>
        </Wrap>
    );
};

const Wrap = styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
`;

const Item = styled.div`
    scroll-snap-align: start;
    width: 100vw;
    height: 100vh;
    background-color: red;
`;

const Item2 = styled(Item)`
    background-color: blue;
`;
