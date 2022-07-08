import { InferGetStaticPropsType } from "next";
import { ReactElement } from "react";
import { Access } from "src/components/Access";
import { Layout } from "src/components/layout/layout/index";
import { ScrollSnapLayout } from "src/components/layout/scroll-snap-layout";
import { Outside } from "src/components/Outside";
import { Menu } from "src/features/Menu";
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
                            <Item>
                                <Menu {...menu} />
                            </Item>
                            <Item>
                                <Access />
                            </Item>
                        </>
                    )}
                />
                {/* <div id="Top" className="top-title" />
                <div className="body">
                    <About />
                    <Menu {...menu} />
                    <Access />
                    <SocialStyle title="Social">
                        <h3>ComingSoon...</h3>
                    </SocialStyle>
                    <GalleryStyle title="Gallery">
                        <h3>ComingSoon...</h3>
                    </GalleryStyle>
                </div> */}
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

const SocialStyle = styled(Outside)`
    align-items: center;
    font-size: 35px;
`;

const GalleryStyle = styled(Outside)`
    align-items: center;
    font-size: 35px;
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

    console.log(menuJson);
    return {
        props: {
            menu: menuJson,
        },
        revalidate: 3600,
    };
};
