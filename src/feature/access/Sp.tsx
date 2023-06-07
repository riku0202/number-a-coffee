import { Container } from "src/components/container";
import styled from "styled-components";

export const Sp = () => {
    return (
        <StyledContainer title="Access">
            <Content>
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
                <MapContainer>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.549313999379!2d138.02546375083418!3d34.79211948572804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601af909253d8bff%3A0xff0a0c6917eac090!2sNumber%20A%20coffee!5e0!3m2!1sja!2sjp!4v1659802293476!5m2!1sja!2sjp"
                        width="100%"
                        height={200}
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        loading="eager"
                    />
                </MapContainer>
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

const MapContainer = styled.div`
    width: 100%;
`;

const TextContainer = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    display: grid;
    row-gap: 10px;
`;
