import {Post} from "../models/Post.ts";
import {Box, Card, CardContent, Typography} from "@mui/material";
import {ReactElement} from "react";
import {fetchUser, formatDate} from "../utils/utils.ts";
import {useQuery} from "@tanstack/react-query";

export default function PostCard({post}: { post: Post }): ReactElement {
    const {isPending, error, data} = useQuery({
        queryKey: ['user', post.creatorUserId],
        queryFn: () => fetchUser(post.creatorUserId),
    });

    if (isPending) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (!data) return <div>No data</div>

    return (
        <div className="post-card">
            <Card>
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5" component="h2">
                            {data.username}
                        </Typography>
                        <Typography color="textSecondary" align="right">
                            {formatDate(post.createdAt)}
                        </Typography>
                    </Box>
                    <Typography color="textSecondary">
                        {post.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}