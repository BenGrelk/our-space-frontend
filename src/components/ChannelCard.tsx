import {Card, CardContent, Typography, CardActionArea} from "@mui/material";
import {Channel} from "../models/channel.ts";
import {useNavigate} from "react-router-dom";

interface ChannelCardProps {
    channel: Channel;
}

export default function ChannelCard({channel}: ChannelCardProps) {
    const navigate = useNavigate();

    return (
        <Card>
            <CardActionArea onClick={() => navigate(`/channel/${channel.channelId}`)}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {channel.channelName}
                    </Typography>
                    <Typography color="textSecondary">
                        {channel.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}