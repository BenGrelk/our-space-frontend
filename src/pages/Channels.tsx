import {useQuery} from "@tanstack/react-query";
import {fetchChannels} from "../utils.ts";
import ChannelCard from "../components/ChannelCard.tsx";
import {Grid} from "@mui/material";

export default function Channels() {
    const {isPending, error, data} = useQuery({
        queryKey: ['channels'],
        queryFn: fetchChannels,
    })

    if (isPending) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <>
            <h1>Channels</h1>

            <Grid container spacing={2}>
                {data.map((channel) => (
                    <Grid item xs={12} key={channel.channelId}>
                        <ChannelCard channel={channel}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}