import { useMediaQuery } from "@mui/material";
import * as React from "react";
import { MicroCMSMenu } from "src/types/microCMSMenu";
import { ImageList } from "./Temp";

export const Menu = (props: MicroCMSMenu) => {
    const isPc = useMediaQuery("(min-width:920px)");

    const [tab, setTab] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    // const contents = props.contents.reduce(
    //     (acc: typeof props.contents, content, index): typeof props.contents => {
    //         switch (tab) {
    //             case 0:
    //                 if (content.category.name === "HotDrink") {
    //                     return [...acc, content];
    //                 }
    //             case 1:
    //                 if (content.category.name === "ColdDrink") {
    //                     return [...acc, content];
    //                 }
    //             case 2:
    //                 if (content.category.name === "Food") {
    //                     return [...acc, content];
    //                 }
    //         }
    //         return acc;
    //     },
    //     [],
    // );

    // return (
    //     <>
    //         {isPc ? (
    //             <Pc onChange={handleChange} value={tab} contents={contents} />
    //         ) : (
    //             <Sp onChange={handleChange} value={tab} contents={contents} />
    //         )}
    //     </>
    // );
    const IMAGES = [
        "https://mizuumi.jp/wp-content/uploads/2022/06/c1e96075b203e8abd7b1d90b59701013-768x1086.jpg",
        "https://www.sapeur-cafe.com/wp-content/uploads/2021/10/sapeur_menu.jpg",
        "https://favoritecoffee.jp/wp-content/uploads/2023/04/may1.jpg",
    ];

    return <ImageList images={IMAGES} />;
};
