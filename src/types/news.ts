export type News = {
    contents: [
        {
            id: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            revisedAt: string;
            title: string;
            contents: string;
            image: {
                url: string;
                height: number;
                width: number;
            };
        },
    ];
    totalCount: number;
    offset: number;
    limit: number;
};
