export type PostsDetails = {
    _id: any;
    title: string;
    content: string;
    hashtags: string[];
    author: {
        name: string;
        avatar: string;
    };
    img: string;
    createdAt: string;
}