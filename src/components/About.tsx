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
            努力、ロースターの情熱、
            <br />
            そしてバリスタの探求心。
            <br />
            <br />
            カップの中に表現されたフレーバーの多様性を感じてみて下さい。
          </p>
        </div>
        <div>
          <Image
            quality={100}
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
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
      height: 470px;
      width: 100%;

      img {
        border-radius: 20px;
      }
    }
  }

  @media (max-width: 959px) {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;

      div:nth-child(1) {
        width: 100%;
        display: flex;
        gap: 30px;
        text-align: center;
        line-height: 20px;

        h3 {
          font-size: 4vw;
          font-weight: bold;
        }

        p {
          font-size: 15px;
        }
      }

      div:nth-child(2) {
        position: relative;
        height: 270px;
        width: 100%;

        img {
          border-radius: 20px;
        }
      }
    }
  }
`;
