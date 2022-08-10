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
            <MUI.ImageList sx={{ width: "100%", height: "100%" }} cols={3}>
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
    <MUI.ImageListItem cols={4}>{props.children}</MUI.ImageListItem>
);

type ImageItemProps = {
    key: number;
    featured?: boolean;
    title: string;
} & Pick<React.ComponentProps<typeof MUI.CardActionArea>, "onClick"> &
    Pick<React.ComponentProps<typeof Image>, "src">;
const ImageItem = (props: ImageItemProps) => {
    return (
        <MUI.ImageListItem cols={1} rows={1}>
            <MUI.CardActionArea onClick={props.onClick}>
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
                    sx={{
                        ".MuiImageListItemBar-titleWrap": {
                            padding: "0.5vw 1vw",
                        },
                        ".MuiImageListItemBar-title": {
                            fontSize: "0.8rem",
                            lineHeight: "unset",
                        },
                    }}
                />
            </MUI.CardActionArea>
        </MUI.ImageListItem>
    );
};
