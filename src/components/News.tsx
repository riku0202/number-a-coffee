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
      <ArrowLink path="/menu" text="お知らせ一覧を見る" />
    </NewsStyle>
  );
};

const NewsStyle = styled(Outside)`
  ul {
    display: flex;
    gap: 20px;
    li {
      width: 100%;
    }
  }

  @media (max-width: 959px) {
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      li {
        width: 100%;
      }
    }
  }
`;
