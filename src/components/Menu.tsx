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
    ul {
        display: flex;
        gap: 20px;
    }

    @media (max-width: 959px) {
        ul {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }
`;
