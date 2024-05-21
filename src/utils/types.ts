import {Post} from "../models/Post.ts";
import {Channel} from "../models/channel.ts";

export type PostsQuery = {
    isPending: boolean;
    error: Error | null;
    data: Post[] | undefined;
}

export type ChannelsQuery = {
    isPending: boolean;
    error: Error | null;
    data: Channel[] | undefined;
}

export type ChannelQuery = {
    isPending: boolean;
    error: Error | null;
    data: Channel | undefined;
}
