import Image from "next/image";
import styled from "styled-components";
import { Outside } from "./Outside";

export const About = () => {
  return (
    <AboutStyle title="About">
      <div className="container">
        <div>
          <h3>進化するスペシャルティコーヒー</h3>
          <p>
            その鍵となるのは生産者の
            <br />
            努力、ロースターの情熱、そしてバリスタの探求心。
            <br />
            カップの中に表現されたフレーバーの多様性を感じてみて下さい。
          </p>
        </div>
        <div>
          <Image
            quality={100}
            layout="fill"
            objectFit="cover"
            alt="image"
            src="/image02.jpg"
          />
        </div>
      </div>
    </AboutStyle>
  );
};

const AboutStyle = styled(Outside)`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;

    div:nth-child(1) {
      width: 100%;
      display: flex;
      gap: 30px;
      padding: 0 20px;
      text-align: center;
      line-height: 30px;

      h3 {
        font-size: 25px;
      }

      p {
        font-size: 17px;
      }
    }

    div:nth-child(2) {
      position: relative;
      height: 450px;
      width: 100%;

      img {
        border-radius: 20px;
      }
    }
  }
`;
