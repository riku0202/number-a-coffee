import { MicroCMSMenu as MenuType } from "src/types/microCMSMenu";
import styled from "styled-components";
import { ArrowLink } from "./ArrowLink";
import { Outside } from "./Outside";
import { ProductTile } from "./ProductTile";

export const Menu = ({ menu }: { menu: MenuType }) => {
    return (
        <MenuStyle title="Menu">
            <ul className="content">
                {menu?.contents.map((props, index) => (
                    <ProductTile
                        key={index}
                        url={props.image.url}
                        translation={props.japaneseName}
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
