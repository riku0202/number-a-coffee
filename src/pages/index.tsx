import { InferGetStaticPropsType } from "next";
import { ReactElement } from "react";
import { Layout } from "src/components/layout/layout/index";
import { ScrollSnapLayout } from "src/components/layout/scroll-snap-layout";
import { About } from "src/feature/about";
import { Access } from "src/feature/access";
import { Menu } from "src/feature/menu";
import { MicroCMSMenu } from "src/types/microCMSMenu";
import styled from "styled-components";

const Home = ({ menu }: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (!menu) throw new Error("news is undefined");

    return (
        <>
            <Style>
                <ScrollSnapLayout
                    renderBody={({ Item }) => (
                        <>
                            <Item />
                            <Item>
                                <About />
                            </Item>
                            <Item>
                                <Menu {...menu} />
                            </Item>
                            <Item>
                                <Access />
                            </Item>
                        </>
                    )}
                />
            </Style>
        </>
    );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

const Style = styled.div`
    position: relative;
    z-index: 2;

    .top-title {
        height: 100vh;
    }

    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10vw;
        background-color: transparent;
        padding: 0 0 10vw;
    }
`;

export const getStaticProps = async () => {
    const api = process.env.API_KEY;
    if (!api)
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
    const menuJson: MicroCMSMenu = await menuRes.json();

    return {
        props: {
            menu: menuJson,
        },
        revalidate: 3600,
    };
};
