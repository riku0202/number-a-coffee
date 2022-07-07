import * as MUI from "@mui/material";
import Image from "next/image";

type Props = {
    renderItems: (props: {
        Subheader: typeof Subheader;
        ImageItem: typeof ImageItem;
    }) => JSX.Element;
};

export const List = (props: Props) => {
    return (
        <>
            <MUI.ImageList sx={{ width: "100%", height: "100%" }} cols={4}>
                {props.renderItems({
                    ImageItem: ImageItem,
                    Subheader: Subheader,
                })}
            </MUI.ImageList>
        </>
    );
};

type SubheaderProps = {
    children: React.ReactNode;
};
const Subheader = (props: SubheaderProps) => (
    <MUI.ImageListItem cols={4}>
        <MUI.ListSubheader component="div">{props.children}</MUI.ListSubheader>
    </MUI.ImageListItem>
);

type ImageItemProps = {
    key: number;
    featured?: boolean;
    title: string;
    subTitle: string;
} & Pick<React.ComponentProps<typeof MUI.CardActionArea>, "onClick"> &
    Pick<React.ComponentProps<typeof Image>, "src">;
const ImageItem = (props: ImageItemProps) => {
    const cols = props.featured ? 2 : 1;
    const rows = props.featured ? 2 : 1;

    const isPc = MUI.useMediaQuery("(min-width:920px)");
    return (
        <MUI.ImageListItem cols={cols} rows={rows}>
            <MUI.CardActionArea>
                <Image
                    src={props.src}
                    layout="responsive"
                    width={500}
                    height={500}
                    objectFit="cover"
                    alt={props.title}
                    loading="lazy"
                />
                <MUI.ImageListItemBar
                    title={props.title}
                    subtitle={props.subTitle}
                    sx={{
                        ".MuiImageListItemBar-titleWrap": {
                            padding: isPc ? "13px" : "2px",
                        },
                        ".MuiImageListItemBar-title": {
                            fontSize: isPc ? "20px" : "5px",
                            lineHeight: isPc ? "24px" : "20px",
                        },
                        ".MuiImageListItemBar-subtitle": {
                            fontSize: isPc ? "15px" : "3px",
                        },
                    }}
                />
            </MUI.CardActionArea>
        </MUI.ImageListItem>
    );
};
