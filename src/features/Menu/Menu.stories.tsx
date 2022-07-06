import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { MicroCMSMenu } from "src/types/microCMSMenu";
import { Menu } from "./Menu";

export default { component: Menu } as ComponentMeta<typeof Menu>;

const mockData: MicroCMSMenu = {
    contents: [
        {
            id: "51dza7k33xev",
            createdAt: "2022-01-28T13:13:31.752Z",
            updatedAt: "2022-01-28T13:13:31.752Z",
            publishedAt: "2022-01-28T13:13:31.752Z",
            revisedAt: "2022-01-28T13:13:31.752Z",
            name: "Caramel Latte",
            japaneseName: "キャラメル　ラテ",
            description:
                "バニラシロップ、エスプレッソ、ミルク、ふわふわフォームミルクにキャラメルソース",
            price: 528,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/9fc326d56757410080eabfb6e25524a1/S__27959302.jpg",
                height: 791,
                width: 1010,
            },
            category: {
                id: "g6ca5ud3mjb",
                createdAt: "2022-01-28T12:43:56.540Z",
                updatedAt: "2022-01-28T12:43:56.540Z",
                publishedAt: "2022-01-28T12:43:56.540Z",
                revisedAt: "2022-01-28T12:43:56.540Z",
                name: "ColdDrink",
            },
            isFeatured: true,
        },
        {
            id: "suxbb6fd_-z",
            createdAt: "2022-01-28T13:08:57.862Z",
            updatedAt: "2022-01-28T13:08:57.862Z",
            publishedAt: "2022-01-28T13:08:57.862Z",
            revisedAt: "2022-01-28T13:08:57.862Z",
            name: "Caramel Latte",
            japaneseName: "キャラメル　ラテ",
            description:
                "バニラシロップ、フォームミルク、エスプレッソ、キャラメルソースの優しい甘さ",
            price: 526,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/b2a1daaa3d43429897f889197a24d00b/F80F3840-DA06-4D98-BB79-1E444F7D1D8.jpg",
                height: 2687,
                width: 3024,
            },
            category: {
                id: "uc5i6zmtt",
                createdAt: "2021-10-12T12:22:16.083Z",
                updatedAt: "2022-01-28T12:43:41.955Z",
                publishedAt: "2021-10-12T12:22:16.083Z",
                revisedAt: "2022-01-28T12:43:41.955Z",
                name: "HotDrink",
            },
            isFeatured: false,
        },
        {
            id: "hrod_kk1rtt5",
            createdAt: "2022-01-28T13:03:24.737Z",
            updatedAt: "2022-01-28T13:03:24.737Z",
            publishedAt: "2022-01-28T13:03:24.737Z",
            revisedAt: "2022-01-28T13:03:24.737Z",
            name: "White Mocha",
            japaneseName: "ホワイト　モカ",
            description:
                "エスプレッソ、ミルク、ホワイトチョコレートシロップの濃厚な甘さ",
            price: 528,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/9995aabd8c0c470f9c7cb4a93274dc2f/E7CE25CF-E2C1-4893-BB04-CCD9FC2B575.jpg",
                height: 2706,
                width: 2997,
            },
            category: {
                id: "uc5i6zmtt",
                createdAt: "2021-10-12T12:22:16.083Z",
                updatedAt: "2022-01-28T12:43:41.955Z",
                publishedAt: "2021-10-12T12:22:16.083Z",
                revisedAt: "2022-01-28T12:43:41.955Z",
                name: "HotDrink",
            },
            isFeatured: false,
        },
        {
            id: "f9ny7am4b24j",
            createdAt: "2022-01-28T13:00:35.077Z",
            updatedAt: "2022-01-28T13:00:35.077Z",
            publishedAt: "2022-01-28T13:00:35.077Z",
            revisedAt: "2022-01-28T13:00:35.077Z",
            name: "Cafe Mocha",
            japaneseName: "カフェ　モカ",
            description:
                "エスプレッソ、ミルク、チョコレートソースの甘いドリンク",
            price: 526,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/a308c0e1d6694c289c308cfbd6e79cb0/ED40FBF7-93BC-4DA9-822A-373EC7595955.jpg",
                height: 1815,
                width: 2081,
            },
            category: {
                id: "uc5i6zmtt",
                createdAt: "2021-10-12T12:22:16.083Z",
                updatedAt: "2022-01-28T12:43:41.955Z",
                publishedAt: "2021-10-12T12:22:16.083Z",
                revisedAt: "2022-01-28T12:43:41.955Z",
                name: "HotDrink",
            },
            isFeatured: false,
        },
        {
            id: "51dza7k33xev",
            createdAt: "2022-01-28T13:13:31.752Z",
            updatedAt: "2022-01-28T13:13:31.752Z",
            publishedAt: "2022-01-28T13:13:31.752Z",
            revisedAt: "2022-01-28T13:13:31.752Z",
            name: "Caramel Latte",
            japaneseName: "キャラメル　ラテ",
            description:
                "バニラシロップ、エスプレッソ、ミルク、ふわふわフォームミルクにキャラメルソース",
            price: 528,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/9fc326d56757410080eabfb6e25524a1/S__27959302.jpg",
                height: 791,
                width: 1010,
            },
            category: {
                id: "g6ca5ud3mjb",
                createdAt: "2022-01-28T12:43:56.540Z",
                updatedAt: "2022-01-28T12:43:56.540Z",
                publishedAt: "2022-01-28T12:43:56.540Z",
                revisedAt: "2022-01-28T12:43:56.540Z",
                name: "ColdDrink",
            },
            isFeatured: true,
        },
        {
            id: "suxbb6fd_-z",
            createdAt: "2022-01-28T13:08:57.862Z",
            updatedAt: "2022-01-28T13:08:57.862Z",
            publishedAt: "2022-01-28T13:08:57.862Z",
            revisedAt: "2022-01-28T13:08:57.862Z",
            name: "Caramel Latte",
            japaneseName: "キャラメル　ラテ",
            description:
                "バニラシロップ、フォームミルク、エスプレッソ、キャラメルソースの優しい甘さ",
            price: 526,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/b2a1daaa3d43429897f889197a24d00b/F80F3840-DA06-4D98-BB79-1E444F7D1D8.jpg",
                height: 2687,
                width: 3024,
            },
            category: {
                id: "uc5i6zmtt",
                createdAt: "2021-10-12T12:22:16.083Z",
                updatedAt: "2022-01-28T12:43:41.955Z",
                publishedAt: "2021-10-12T12:22:16.083Z",
                revisedAt: "2022-01-28T12:43:41.955Z",
                name: "HotDrink",
            },
            isFeatured: false,
        },
        {
            id: "hrod_kk1rtt5",
            createdAt: "2022-01-28T13:03:24.737Z",
            updatedAt: "2022-01-28T13:03:24.737Z",
            publishedAt: "2022-01-28T13:03:24.737Z",
            revisedAt: "2022-01-28T13:03:24.737Z",
            name: "White Mocha",
            japaneseName: "ホワイト　モカ",
            description:
                "エスプレッソ、ミルク、ホワイトチョコレートシロップの濃厚な甘さ",
            price: 528,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/9995aabd8c0c470f9c7cb4a93274dc2f/E7CE25CF-E2C1-4893-BB04-CCD9FC2B575.jpg",
                height: 2706,
                width: 2997,
            },
            category: {
                id: "uc5i6zmtt",
                createdAt: "2021-10-12T12:22:16.083Z",
                updatedAt: "2022-01-28T12:43:41.955Z",
                publishedAt: "2021-10-12T12:22:16.083Z",
                revisedAt: "2022-01-28T12:43:41.955Z",
                name: "HotDrink",
            },
            isFeatured: false,
        },
        {
            id: "f9ny7am4b24j",
            createdAt: "2022-01-28T13:00:35.077Z",
            updatedAt: "2022-01-28T13:00:35.077Z",
            publishedAt: "2022-01-28T13:00:35.077Z",
            revisedAt: "2022-01-28T13:00:35.077Z",
            name: "Cafe Mocha",
            japaneseName: "カフェ　モカ",
            description:
                "エスプレッソ、ミルク、チョコレートソースの甘いドリンク",
            price: 526,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/a308c0e1d6694c289c308cfbd6e79cb0/ED40FBF7-93BC-4DA9-822A-373EC7595955.jpg",
                height: 1815,
                width: 2081,
            },
            category: {
                id: "uc5i6zmtt",
                createdAt: "2021-10-12T12:22:16.083Z",
                updatedAt: "2022-01-28T12:43:41.955Z",
                publishedAt: "2021-10-12T12:22:16.083Z",
                revisedAt: "2022-01-28T12:43:41.955Z",
                name: "HotDrink",
            },
            isFeatured: false,
        },
        {
            id: "51dza7k33xev",
            createdAt: "2022-01-28T13:13:31.752Z",
            updatedAt: "2022-01-28T13:13:31.752Z",
            publishedAt: "2022-01-28T13:13:31.752Z",
            revisedAt: "2022-01-28T13:13:31.752Z",
            name: "Caramel Latte",
            japaneseName: "キャラメル　ラテ",
            description:
                "バニラシロップ、エスプレッソ、ミルク、ふわふわフォームミルクにキャラメルソース",
            price: 528,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/9fc326d56757410080eabfb6e25524a1/S__27959302.jpg",
                height: 791,
                width: 1010,
            },
            category: {
                id: "g6ca5ud3mjb",
                createdAt: "2022-01-28T12:43:56.540Z",
                updatedAt: "2022-01-28T12:43:56.540Z",
                publishedAt: "2022-01-28T12:43:56.540Z",
                revisedAt: "2022-01-28T12:43:56.540Z",
                name: "ColdDrink",
            },
            isFeatured: true,
        },
        {
            id: "suxbb6fd_-z",
            createdAt: "2022-01-28T13:08:57.862Z",
            updatedAt: "2022-01-28T13:08:57.862Z",
            publishedAt: "2022-01-28T13:08:57.862Z",
            revisedAt: "2022-01-28T13:08:57.862Z",
            name: "Caramel Latte",
            japaneseName: "キャラメル　ラテ",
            description:
                "バニラシロップ、フォームミルク、エスプレッソ、キャラメルソースの優しい甘さ",
            price: 526,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/b2a1daaa3d43429897f889197a24d00b/F80F3840-DA06-4D98-BB79-1E444F7D1D8.jpg",
                height: 2687,
                width: 3024,
            },
            category: {
                id: "uc5i6zmtt",
                createdAt: "2021-10-12T12:22:16.083Z",
                updatedAt: "2022-01-28T12:43:41.955Z",
                publishedAt: "2021-10-12T12:22:16.083Z",
                revisedAt: "2022-01-28T12:43:41.955Z",
                name: "HotDrink",
            },
            isFeatured: false,
        },
        {
            id: "hrod_kk1rtt5",
            createdAt: "2022-01-28T13:03:24.737Z",
            updatedAt: "2022-01-28T13:03:24.737Z",
            publishedAt: "2022-01-28T13:03:24.737Z",
            revisedAt: "2022-01-28T13:03:24.737Z",
            name: "White Mocha",
            japaneseName: "ホワイト　モカ",
            description:
                "エスプレッソ、ミルク、ホワイトチョコレートシロップの濃厚な甘さ",
            price: 528,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/9995aabd8c0c470f9c7cb4a93274dc2f/E7CE25CF-E2C1-4893-BB04-CCD9FC2B575.jpg",
                height: 2706,
                width: 2997,
            },
            category: {
                id: "uc5i6zmtt",
                createdAt: "2021-10-12T12:22:16.083Z",
                updatedAt: "2022-01-28T12:43:41.955Z",
                publishedAt: "2021-10-12T12:22:16.083Z",
                revisedAt: "2022-01-28T12:43:41.955Z",
                name: "HotDrink",
            },
            isFeatured: false,
        },
        {
            id: "f9ny7am4b24j",
            createdAt: "2022-01-28T13:00:35.077Z",
            updatedAt: "2022-01-28T13:00:35.077Z",
            publishedAt: "2022-01-28T13:00:35.077Z",
            revisedAt: "2022-01-28T13:00:35.077Z",
            name: "Cafe Mocha",
            japaneseName: "カフェ　モカ",
            description:
                "エスプレッソ、ミルク、チョコレートソースの甘いドリンク",
            price: 526,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/a308c0e1d6694c289c308cfbd6e79cb0/ED40FBF7-93BC-4DA9-822A-373EC7595955.jpg",
                height: 1815,
                width: 2081,
            },
            category: {
                id: "uc5i6zmtt",
                createdAt: "2021-10-12T12:22:16.083Z",
                updatedAt: "2022-01-28T12:43:41.955Z",
                publishedAt: "2021-10-12T12:22:16.083Z",
                revisedAt: "2022-01-28T12:43:41.955Z",
                name: "HotDrink",
            },
            isFeatured: false,
        },
        {
            id: "51dza7k33xev",
            createdAt: "2022-01-28T13:13:31.752Z",
            updatedAt: "2022-01-28T13:13:31.752Z",
            publishedAt: "2022-01-28T13:13:31.752Z",
            revisedAt: "2022-01-28T13:13:31.752Z",
            name: "Caramel Latte",
            japaneseName: "キャラメル　ラテ",
            description:
                "バニラシロップ、エスプレッソ、ミルク、ふわふわフォームミルクにキャラメルソース",
            price: 528,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/9fc326d56757410080eabfb6e25524a1/S__27959302.jpg",
                height: 791,
                width: 1010,
            },
            category: {
                id: "g6ca5ud3mjb",
                createdAt: "2022-01-28T12:43:56.540Z",
                updatedAt: "2022-01-28T12:43:56.540Z",
                publishedAt: "2022-01-28T12:43:56.540Z",
                revisedAt: "2022-01-28T12:43:56.540Z",
                name: "ColdDrink",
            },
            isFeatured: true,
        },
        {
            id: "suxbb6fd_-z",
            createdAt: "2022-01-28T13:08:57.862Z",
            updatedAt: "2022-01-28T13:08:57.862Z",
            publishedAt: "2022-01-28T13:08:57.862Z",
            revisedAt: "2022-01-28T13:08:57.862Z",
            name: "Caramel Latte",
            japaneseName: "キャラメル　ラテ",
            description:
                "バニラシロップ、フォームミルク、エスプレッソ、キャラメルソースの優しい甘さ",
            price: 526,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/b2a1daaa3d43429897f889197a24d00b/F80F3840-DA06-4D98-BB79-1E444F7D1D8.jpg",
                height: 2687,
                width: 3024,
            },
            category: {
                id: "uc5i6zmtt",
                createdAt: "2021-10-12T12:22:16.083Z",
                updatedAt: "2022-01-28T12:43:41.955Z",
                publishedAt: "2021-10-12T12:22:16.083Z",
                revisedAt: "2022-01-28T12:43:41.955Z",
                name: "HotDrink",
            },
            isFeatured: false,
        },
        {
            id: "hrod_kk1rtt5",
            createdAt: "2022-01-28T13:03:24.737Z",
            updatedAt: "2022-01-28T13:03:24.737Z",
            publishedAt: "2022-01-28T13:03:24.737Z",
            revisedAt: "2022-01-28T13:03:24.737Z",
            name: "White Mocha",
            japaneseName: "ホワイト　モカ",
            description:
                "エスプレッソ、ミルク、ホワイトチョコレートシロップの濃厚な甘さ",
            price: 528,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/9995aabd8c0c470f9c7cb4a93274dc2f/E7CE25CF-E2C1-4893-BB04-CCD9FC2B575.jpg",
                height: 2706,
                width: 2997,
            },
            category: {
                id: "uc5i6zmtt",
                createdAt: "2021-10-12T12:22:16.083Z",
                updatedAt: "2022-01-28T12:43:41.955Z",
                publishedAt: "2021-10-12T12:22:16.083Z",
                revisedAt: "2022-01-28T12:43:41.955Z",
                name: "HotDrink",
            },
            isFeatured: false,
        },
        {
            id: "f9ny7am4b24j",
            createdAt: "2022-01-28T13:00:35.077Z",
            updatedAt: "2022-01-28T13:00:35.077Z",
            publishedAt: "2022-01-28T13:00:35.077Z",
            revisedAt: "2022-01-28T13:00:35.077Z",
            name: "Cafe Mocha",
            japaneseName: "カフェ　モカ",
            description:
                "エスプレッソ、ミルク、チョコレートソースの甘いドリンク",
            price: 526,
            image: {
                url: "https://images.microcms-assets.io/assets/213289fa24c74e5f9bc6a55bd595d0b5/a308c0e1d6694c289c308cfbd6e79cb0/ED40FBF7-93BC-4DA9-822A-373EC7595955.jpg",
                height: 1815,
                width: 2081,
            },
            category: {
                id: "uc5i6zmtt",
                createdAt: "2021-10-12T12:22:16.083Z",
                updatedAt: "2022-01-28T12:43:41.955Z",
                publishedAt: "2021-10-12T12:22:16.083Z",
                revisedAt: "2022-01-28T12:43:41.955Z",
                name: "HotDrink",
            },
            isFeatured: false,
        },
    ],
    totalCount: 11,
    offset: 0,
    limit: 4,
};

export const Primary: ComponentStoryObj<typeof Menu> = {
    args: {
        ...mockData,
    },
    render: (args) => <Menu {...args} />,
};

export const Sp: ComponentStoryObj<typeof Menu> = {
    parameters: {
        viewport: {
            defaultViewport: "iphone12",
        },
    },
    args: {
        ...mockData,
    },
    render: (args) => <Menu {...args} />,
};

export const Tab: ComponentStoryObj<typeof Menu> = {
    parameters: {
        viewport: {
            defaultViewport: "ipad12p",
        },
    },
    args: {
        ...mockData,
    },
    render: (args) => <Menu {...args} />,
};
