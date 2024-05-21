import axios, {AxiosResponse} from 'axios';
import { Channel } from './models/channel.ts';
import { apiUrl } from './constants.ts';
import {Post} from "./models/Post.ts";

export async function fetchChannels(): Promise<Channel[]> {
    const res = await axios.get(apiUrl + '/channels/all');
    return res.data;
}

export async function fetchPostsForChannel(channelId: number): Promise<Post[]> {
    const res = await axios.get(apiUrl + `/channels/${channelId}/posts/`);
    return res.data;
}

export async function fetchChannel(channelId: number): Promise<Channel> {
    const res: AxiosResponse<Channel> = await axios.get(apiUrl + `/channels/${channelId}`);
    return res.data;
}
