import { Container } from "src/components/container";
import { List } from "src/components/list";
import { MicroCMSMenu } from "src/types/microCMSMenu";
import styled from "styled-components";

export const Sp = (props: MicroCMSMenu) => {
    return (
        <StyledContainer title="Menu">
            <Content>
                <List
                    renderItems={({ Subheader, ImageItem }) => (
                        <>
                            <Subheader key={"Menu"}>Menu</Subheader>

                            {props.contents.map((content, index) => {
                                return (
                                    <ImageItem
                                        key={index}
                                        featured={content.isFeatured}
                                        src={content.image.url}
                                        title={content.name}
                                        subTitle={content.description}
                                        onClick={() =>
                                            alert("click " + content.name)
                                        }
                                    />
                                );
                            })}
                        </>
                    )}
                />
            </Content>
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)`
    padding: 5px;
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 400px;
    width: 100%;
`;

const ImageContainer = styled.div`
    width: 100%;

    img {
        border-radius: 20px;
    }
`;

const TextContainer = styled.div`
    width: 100%;
    text-align: center;
`;
