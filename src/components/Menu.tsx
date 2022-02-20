import styled from "styled-components";
import { ArrowLink } from "./ArrowLink";
import { Outside } from "./Outside";
import { ProductTile } from "./ProductTile";
import { Menu as MenuType } from "src/types/menu";

export const Menu = ({ menu }: { menu: MenuType }) => {
  return (
    <MenuStyle title="Menu">
      <ul className="content">
        {menu?.contents.map((props, index) => (
          <ProductTile
            key={index}
            url={props.image.url}
            translation={props.japanese_name}
            name={props.name}
            price={props.price}
          />
        ))}
      </ul>
      <ArrowLink path="/menu" text="メニューを見る" />
    </MenuStyle>
  );
};

const MenuStyle = styled(Outside)`
  padding: 50px 20px 30px;

  label:nth-child(3) {
    margin: 20px 0 0;
  }

  ul {
    display: flex;
    gap: 20px;
  }
`;
