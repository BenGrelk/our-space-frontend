import {useQuery} from "@tanstack/react-query";
import {fetchChannels} from "../utils/utils.ts";
import ChannelCard from "../components/ChannelCard.tsx";
import {Button, Grid} from "@mui/material";

import '../styles/Channels.sass';
import {Channel} from "../models/channel.ts";
import {ReactElement} from "react";
import {ChannelsQuery} from "../utils/types.ts";

export default function Channels(): ReactElement {
    const {isPending, error, data}: ChannelsQuery = useQuery({
        queryKey: ['channels'],
        queryFn: fetchChannels,
    });

    if (isPending) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (!data) return <div>No data</div>

    return (
        <div className="channels">
            <h1>Channels</h1>

            <p>Channels are places to make posts. Click on a channel to see its posts, or make a new channel.</p>

            <Button variant="contained" href="/channels/new" className="create-channel">
                Create Channel
            </Button>

            <Grid container spacing={2} className="channel-grid">
                {data.map((channel) => (
                    <Grid item xs={12} key={channel.channelId}>
                        <ChannelCard channel={channel}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}