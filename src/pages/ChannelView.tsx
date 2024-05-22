import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {Grid, Link} from "@mui/material";
import {ChannelQuery} from "../utils/types.ts";
import PostCard from "../components/PostCard.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {CreatePostModel} from "../models/CreatePostModel.ts";
import {createPost, fetchChannel, fetchPostsForChannel, getUserId} from "../utils/utils.ts";

import '../styles/ChannelView.sass';

interface ChannelViewParams {
    channelId: number;
}

export default function ChannelView() {
    const {channelId} = useParams() as unknown as ChannelViewParams;

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<CreatePostModel>()
    const onSubmit: SubmitHandler<CreatePostModel> = (data: CreatePostModel) => {
        createPost(channelId, data).then(() => window.location.reload());
    }

    const userId: number = getUserId();
    console.log(userId);

    const {isPending: channelIsPending, error: channelError, data: channel}: ChannelQuery = useQuery({
        queryKey: ['channel', channelId],
        queryFn: () => fetchChannel(channelId),
    });

    const {isPending: postsIsPending, error: postsError, data: posts} = useQuery({
        queryKey: ['channelPosts', channelId],
        queryFn: () => fetchPostsForChannel(channelId),
    });

    if (channelIsPending || postsIsPending) return <div>Loading...</div>
    if (channelError) return <div>Error: {channelError.message}</div>
    if (postsError) return <div>Error: {postsError.message}</div>
    if (!channel) return <div>No channel</div>

    return (
        <div className="channel-view">
            <h1>{channel?.channelName}</h1>
            <p>{channel.description}</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Post Message
                    <input {...register("message", {required: true})} />
                    {errors.message && <span>This field is required</span>}
                </label>
                <input hidden value={userId} {...register("userId", {required: true})} />
                {errors.userId && <span>You must be signed in.</span>}
                <button type="submit">Create Post</button>
            </form>

            <Grid container spacing={2} className="post-grid">
                {posts.map((post) => (
                    <Grid item xs={12} key={post.postId}>
                        <PostCard post={post}/>
                    </Grid>
                ))}
            </Grid>

            <Link href="/">Back to Channels</Link>
        </div>
    )
}