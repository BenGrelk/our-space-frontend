import axios, {AxiosResponse} from 'axios';
import {Channel} from '../models/Channel.ts';
import {apiUrl} from './constants.ts';
import {Post} from "../models/Post.ts";
import {CreateChannelModel} from "../models/CreateChannelModel.ts";
import {User} from "../models/User.ts";
import {CreatePostModel} from "../models/CreatePostModel.ts";
import {SignInModel} from "../models/SignInModel.ts";
import {CreateAccountModel} from "../models/CreateAccountModel.ts";
import {CreateUserModel} from "../models/CreateUserModel.ts";

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

export async function fetchUser(userId: number): Promise<User> {
    const res: AxiosResponse = await axios.get(apiUrl + `/users/${userId}`);
    return res.data;
}

export async function createChannel(model: CreateChannelModel): Promise<void> {
    await axios.post(apiUrl + '/channels/create', model);
}

export async function createPost(channelId: number, model: CreatePostModel): Promise<void> {
    await axios.post(apiUrl + '/channels/' + channelId + "/create", model);
}

export async function signIn(model: SignInModel): Promise<void> {
    const user: User = await axios.post(apiUrl + '/users/signin', model);
    localStorage.setItem('user', JSON.stringify(user));
}

export async function signUp(model: CreateUserModel): Promise<void> {
    const user: User = await axios.post(apiUrl + '/users/create', model);
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUserId(): number {
    const user: {data: User} | null = JSON.parse(localStorage.getItem('user') as string);
    if (!user) {
        throw new Error('User not found');
    }
    return user.data.userId;
}

export function formatDate(timestamp: string): string {
    const date: Date = new Date(timestamp);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
}
