import * as React from "react";
import { Container } from "src/components/container";
import { List } from "src/components/list";
import { Tab } from "src/components/tab";
import { MicroCMSMenu } from "src/types/microCMSMenu";
import styled from "styled-components";

export const Pc = (
    props: Pick<MicroCMSMenu, "contents"> & Pick<Parameters<typeof Tab>[0] , "value"|'onChange'>,
) => {
    return (
        <StyledContainer title="Menu">
            <TabContainer>
                <Tab value={props.value} onChange={props.onChange} />
            </TabContainer>
            <ListContainer>
                <List
                    renderItems={({ Subheader, ImageItem }) => (
                        <>
                            <Subheader key={"Menu"}>Menu</Subheader>
                            {props.contents.map((content, index) => (
                                <ImageItem
                                    key={index}
                                    featured={content.isFeatured}
                                    src={content.image.url}
                                    title={content.name}
                                    subTitle={content.japaneseName}
                                    onClick={() =>
                                        alert("click " + content.name)
                                    }
                                />
                            ))}
                        </>
                    )}
                />
            </ListContainer>
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)`
    width: 90vw;
`;

const TabContainer = styled.div`
    width: 100%;
`;

const ListContainer = styled.div`
    height: 60vh;
    width: 100%;
`;
