export type Menu = {
  contents: [
    {
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      revisedAt: string;
      name: string;
      japanese_name: string;
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
    }
  ];
  totalCount: number;
  offset: number;
  limit: number;
};
