export type Post = {
    postId: number;
    channelId: number;
    message: string;
    createdAt: string;
    creatorUserId: number;
    attachment: ImageData;
}