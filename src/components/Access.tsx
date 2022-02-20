import styled from "styled-components";
import { Outside } from "./Outside";

export const Access = () => {
  return (
    <AccessStyle title="Access">
      <div className="container">
        <div>
          <iframe
            width="100%"
            height={500}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_4s9JQn5GmARkMDqF2kMCv8&key=AIzaSyAHuqkRtWban5qZEqO6sUWyw1Z__A8XDBI"
          />
        </div>
        <div>
          <h3>Number A Coffee</h3>
          <p>住所</p>
          <p>
            〒436-0061
            <br />
            静岡県掛川市水垂936ｰ1
          </p>
          <p>営業時間</p>
          <p>
            平日9:00-17:00
            <br />
            土日祝7:30-17:00
          </p>
          <p>電話番号</p>
          <a href="tel:0537-28-7242">0537-28-7242</a>
        </div>
      </div>
    </AccessStyle>
  );
};

const AccessStyle = styled(Outside)`
  .container {
    display: flex;
    flex-direction: row;

    div:nth-child(1) {
      width: 70%;
    }

    div:nth-child(2) {
      width: 30%;

      h3 {
        font-size: 30px;
      }

      p,
      a {
        font-size: 20px;
        line-height: 27px;

        :nth-child(2n) {
          margin: 40px 0 0;
        }
      }
    }
  }
`;
