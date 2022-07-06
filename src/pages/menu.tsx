import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import { Outside as OriginOutSide } from "src/components/Outside";
import { ProductTile } from "src/components/ProductTile";
import { MicroCMSMenu as MenuType } from "src/types/microCMSMenu";
import styled from "styled-components";
import { Layout } from "../components/layout/Layout";

const Menu = ({ menu }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>Menu</title>
            </Head>
            <Style>
                <OutSide title="Menu">
                    <ul>
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
                </OutSide>
            </Style>
            {/* <div className="body">
          <p className="title">MENU</p>
          <ul className="container">
            {menu?.contents.map((props, index) => (
              <li key={index} className="item">
                <div className="image">
                  <Image
                    alt="img"
                    src={props.image.url}
                    layout={"responsive"}
                    width={props.image.width}
                    height={props.image.height}
                    quality={100}
                  />
                </div>
                {props.name}
              </li>
            ))}
          </ul>
        </div> */}
        </>
    );
};

export default Menu;

Menu.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

const Style = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8vw;
`;

const OutSide = styled(OriginOutSide)`
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 20px;
    }
`;

export const getStaticProps = async () => {
    const api = process.env.API_KEY;
    if (api === undefined)
        return {
            props: {
                menu: null,
            },
        };

    const menuRes = await fetch(
        "https://number-a-coffee.microcms.io/api/v1/menu",
        {
            headers: {
                "X-API-KEY": api,
            },
        },
    );

    const menuJson: MenuType = await menuRes.json();

    return {
        props: {
            menu: menuJson,
        },
        revalidate: 10, // In seconds
    };
};
