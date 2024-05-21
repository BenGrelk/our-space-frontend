import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {fetchChannel, fetchPostsForChannel} from "../utils.ts";
import {Link} from "@mui/material";

interface ChannelViewParams {
    channelId: number;
}

export default function ChannelView() {
    const {channelId} = useParams() as unknown as ChannelViewParams;

    const {isPending: channelIsPending, error: channelError, data: channel} = useQuery({
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

    return (
        <>
            <h1>{channel?.channelName}</h1>
            <p>{channel.description}</p>
            <ul>
                {posts.map((post) => (
                    <li key={post.postId}>{post.message}</li>
                ))}
            </ul>

            <Link href="/">Back to Channels</Link>
        </>
    )
}