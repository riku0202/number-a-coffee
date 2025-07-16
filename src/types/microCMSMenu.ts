export type MicroCMSMenu = {
    contents: {
        id: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        revisedAt: string;
        menu: {
            url: string;
            height: number;
            width: number;
        };
    }[];
    totalCount: number;
    offset: number;
    limit: number;
};
