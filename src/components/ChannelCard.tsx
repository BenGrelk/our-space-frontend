import {Card, CardContent, Typography, CardActionArea, Box} from "@mui/material";
import {Channel} from "../models/channel.ts";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {fetchPostsForChannel} from "../utils/utils.ts";
import {useQuery} from "@tanstack/react-query";
import {ReactElement} from "react";
import {PostQuery} from "../utils/types.ts";

interface ChannelCardProps {
    channel: Channel;
}

export default function ChannelCard({channel}: ChannelCardProps): ReactElement {
    const navigate: NavigateFunction = useNavigate();

    const {isPending, error, data}: PostQuery = useQuery({
        queryKey: ['channelPosts', channel.channelId],
        queryFn: () => fetchPostsForChannel(channel.channelId),
    });

    if (isPending) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (!data) return <div>No data</div>

    const numPosts: number = data.length;

    const date: Date = new Date(channel.createdAt);
    const formattedDate: string = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;

    return (
        <Card className="channel-card">
            <CardActionArea onClick={() => navigate(`/channel/${channel.channelId}`)}>
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5" component="h2">
                            {channel.channelName}
                        </Typography>
                        <Typography color="textSecondary" align="right">
                            {formattedDate}
                        </Typography>
                    </Box>
                    <Typography color="textSecondary">
                        {channel.description}
                    </Typography>
                    <Typography color="textSecondary">
                        {numPosts} post{numPosts === 1 ? '' : 's'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}