import { Scrolling } from "src/components/scrolling";
import styled from "styled-components";

type Props = {
    renderBody: (props: { Item: typeof Item }) => JSX.Element;
};

export const ScrollSnapLayout = (props: Props) => {
    return (
        <List>
            <ScrollingWrap>
                <Scrolling />
            </ScrollingWrap>
            {props.renderBody({ Item: Item })}
        </List>
    );
};

const List = styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    width: 100vw;
    height: 100vh; /* Fallback */
    height: calc(var(--vh, 1vh) * 100);
`;

const Item = styled.div`
    scroll-snap-align: start;
    width: 100%;
    height: 100vh; /* Fallback */
    height: calc(var(--vh, 1vh) * 100);
    display: grid;
    place-items: center;
    margin: 100px 0;
`;

const ScrollingWrap = styled.div`
    position: fixed;
    left: 50px;
    bottom: 100px;
`;
