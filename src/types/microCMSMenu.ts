export type MicroCMSMenu = {
    contents: 
        {
            id: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            revisedAt: string;
            name: string;
            japaneseName: string;
            description: string;
            price: number;
            image: {
                url: string;
                height: number;
                width: number;
            };
            category: {
                id: string;
                createdAt: string;
                updatedAt: string;
                publishedAt: string;
                revisedAt: string;
                name: string;
            };
            isFeatured: boolean;
        }[],
    totalCount: number;
    offset: number;
    limit: number;
};
