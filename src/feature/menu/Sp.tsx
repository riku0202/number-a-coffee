import Image from "next/image";
import React from "react";
import { Container } from "src/components/container";
import { List } from "src/components/list";
import { Modal } from "src/components/modal";
import { Tab } from "src/components/tab";
import { MicroCMSMenu } from "src/types/microCMSMenu";
import styled from "styled-components";

export const Sp = (
    props: Pick<MicroCMSMenu, "contents"> &
        Pick<Parameters<typeof Tab>[0], "value" | "onChange">,
) => {
    const [toggle, setToggle] = React.useState(false);
    const [content, setContent] = React.useState<
        typeof props["contents"][number] | null
    >(null);

    return (
        <>
            <StyledContainer title="Menu">
                <TabContainer>
                    <Tab value={props.value} onChange={props.onChange} />
                </TabContainer>
                <ListContainer>
                    <List
                        renderItems={({ Subheader, ImageItem }) => (
                            <>
                                <Subheader key={"Menu"}>Menu</Subheader>
                                {props.contents.map((content, index) => {
                                    return (
                                        <>
                                            <ImageItem
                                                key={index}
                                                featured={content.isFeatured}
                                                src={content.image.url}
                                                title={content.japaneseName}
                                                onClick={() => {
                                                    setContent(content);
                                                    setToggle(true);
                                                }}
                                            />
                                        </>
                                    );
                                })}
                            </>
                        )}
                    />
                </ListContainer>
            </StyledContainer>
            <Modal open={toggle} onClose={() => setToggle(false)}>
                <SubComponent content={content} />
            </Modal>
        </>
    );
};

const StyledContainer = styled(Container)`
    width: 90vw;
`;

const TabContainer = styled.div`
    width: 100%;
`;

const ListContainer = styled.div`
    height: 40vh;
    width: 100%;
`;

const SubComponent = (props: {
    content: MicroCMSMenu["contents"][number] | null;
}) => {
    if (!props.content) return <></>;

    return (
        <ModalContainer>
            <ImageContainer>
                <Image
                    layout="responsive"
                    objectFit="cover"
                    alt="image"
                    src={props.content.image.url}
                    height={props.content.image.height}
                    width={props.content.image.width}
                />
            </ImageContainer>
            <TextContainer>
                <JapaneseHeading>{props.content.japaneseName}</JapaneseHeading>
                <Heading>{props.content.name}</Heading>
                <Body>
                    <p>{props.content.description}</p>
                    <Price>￥{props.content.price}</Price>
                </Body>
            </TextContainer>
        </ModalContainer>
    );
};

const ImageContainer = styled.div`
    width: 100%;

    img {
        border-radius: 20px;
    }
`;

const TextContainer = styled.div`
    display: grid;
    place-items: center;
`;

const JapaneseHeading = styled.p`
    font-size: 1rem;
`;

const Heading = styled.h3`
    font-size: 1.5rem;
    line-height: 1.5;
`;

const Body = styled.p`
    margin: 20px 0;
    font-size: 1rem;
`;

const Price = styled.p`
    font-weight: bold;
    text-align: right;
`;

const ModalContainer = styled.div`
    border-radius: 20px;
    padding: 20px;
    background-color: white;
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 30px;
`;
