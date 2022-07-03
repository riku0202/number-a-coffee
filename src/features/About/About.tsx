import Image from "next/image";
import styled from "styled-components";
import { Container } from "../../components/container";

type Props = { text: string };

export const About = (props: Props) => {
    return (
        <StyledContainer title="About">
            <Content>
                <TextContainer>
                    <h3>進化するスペシャルティコーヒー</h3>
                    <p>
                        その鍵となるのは生産者の
                        <br />
                        努力、ロースターの情熱、
                        <br />
                        そしてバリスタの探求心。
                        <br />
                        <br />
                        カップの中に表現されたフレーバーの多様性を感じてみて下さい。
                    </p>
                </TextContainer>
                <ImageContainer>
                    <Image
                        layout="responsive"
                        objectFit="cover"
                        alt="image"
                        src="/image02.jpg"
                        height={"100%"}
                        width={"100%"}
                    />
                </ImageContainer>
            </Content>
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)`
    width: 80vw;
    max-height: 80vw;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 100%;
    width: 100%;
`;

const ImageContainer = styled.div`
    height: 100%;
    width: 100%;

    img {
        border-radius: 20px;
    }
`;

const TextContainer = styled.div`
    height: 100%;
    width: 100%;

    img {
        border-radius: 20px;
    }
`;
