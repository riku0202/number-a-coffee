import { News as NewsType } from "src/types/news";
import styled from "styled-components";
import { ArrowLink } from "./ArrowLink";
import { NewsTile } from "./NewsTile";
import { Outside } from "./Outside";

export const News = ({ news }: { news: NewsType }) => {
  return (
    <NewsStyle title="News">
      <ul>
        {news?.contents.map((props) => (
          <NewsTile
            key={props.id}
            url={props.image.url}
            name={props.title}
            createdAt={props.createdAt}
          />
        ))}
      </ul>
      <ArrowLink path="/menu" text="お知らせを見る" />
    </NewsStyle>
  );
};

const NewsStyle = styled(Outside)`
  padding: 50px 20px 30px;

  label:nth-child(3) {
    margin: 20px 0 0;
  }

  ul {
    display: flex;
    gap: 20px;
    li {
      width: 100%;
    }
  }
`;
