import * as MUI from "@mui/material";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { List } from "./";

export default { component: List } as ComponentMeta<typeof List>;

export const Primary: ComponentStoryObj<typeof List> = {
    args: {
        renderItems: ({ ImageItem, Subheader }) => (
            <>
                <Subheader>
                    <MUI.Tabs
                        value={1}
                        onChange={() => console.log("")}
                        aria-label="basic tabs example"
                    >
                        <MUI.Tab label="Item One" />
                        <MUI.Tab label="Item Two" />
                        <MUI.Tab label="Item Three" />
                    </MUI.Tabs>
                    December
                </Subheader>
                {itemData.map((item, index) => {
                    return (
                        <ImageItem
                            key={index}
                            featured={item.featured}
                            src={item.img}
                            title={item.title}
                            subTitle={item.author}
                            onClick={() => alert("click " + item.title)}
                        />
                    );
                })}
            </>
        ),
    },
    render: (args) => (
        <div style={{ width: 500 }}>
            <List {...args} />
        </div>
    ),
};

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
        author: "@bkristastucchio",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
        author: "@rollelflex_graphy726",
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
        author: "@helloimnik",
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        author: "@nolanissac",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
        author: "@hjrc33",
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Honey",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball",
        author: "@tjdragotta",
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern",
        author: "@katie_wasserman",
    },
    {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        title: "Mushrooms",
        author: "@silverdalex",
        rows: 2,
        cols: 2,
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Tomato basil",
        author: "@shelleypauls",
    },
    {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        title: "Sea star",
        author: "@peterlaster",
    },
    {
        img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        title: "Bike",
        author: "@southside_customs",
        cols: 2,
    },
];
