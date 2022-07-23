import Image from "next/image";
import { Container } from "src/components/container";
import styled from "styled-components";

export const Sp = () => {
    return (
        <StyledContainer title="About">
            <Content>
                <ImageContainer>
                    <Image
                        layout="responsive"
                        objectFit="cover"
                        alt="image"
                        src="/image02.jpg"
                        height={"200"}
                        width={"350"}
                    />
                </ImageContainer>
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
            </Content>
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)`
    width: 90vw;
`;

const Content = styled.div`
    width: 100%;
`;

const ImageContainer = styled.div`
    width: 100%;

    img {
        border-radius: 20px;
    }
`;

const TextContainer = styled.div`
    margin-top: 30px;
    width: 100%;
    text-align: center;
`;
