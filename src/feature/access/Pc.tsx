import { Container } from "src/components/container";
import styled from "styled-components";

export const Pc = () => {
    return (
        <StyledContainer title="Access">
            <Content>
                <MapContainer>
                    <iframe
                        width="100%"
                        height={500}
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_4s9JQn5GmARkMDqF2kMCv8&key=AIzaSyAHuqkRtWban5qZEqO6sUWyw1Z__A8XDBI"
                    />
                </MapContainer>
                <TextContainer>
                    <section>
                        <h4>住所</h4>
                        <p>
                            〒436-0061
                            <br />
                            静岡県掛川市水垂936ｰ1
                        </p>
                    </section>
                    <section>
                        <h4>営業時間</h4>
                        <p>
                            平日9:00-17:00
                            <br />
                            土日祝7:30-17:00
                        </p>
                    </section>
                    <section>
                        <h4>電話番号</h4>
                        <a href="tel:0537-28-7242">0537-28-7242</a>
                    </section>
                </TextContainer>
            </Content>
        </StyledContainer>
    );
};

const StyledContainer = styled(Container)`
    width: 90vw;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding: 30px 0;
`;

const MapContainer = styled.div`
    width: 100%;
`;

const TextContainer = styled.div`
    width: 100%;
    text-align: center;
    display: grid;
    row-gap: 25px;
`;
