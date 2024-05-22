import {AppBar, Link, Toolbar, Typography} from "@mui/material";

import "../styles/TopBar.sass";
import {ReactElement} from "react";

export default function TopBar(): ReactElement {
    return (
        <AppBar position="static" className="top-bar">
            <Toolbar className="toolbar">
                <Typography variant="h6">
                    <Link href="/" color="inherit">
                        Home
                    </Link>
                </Typography>
                <Typography variant="h6">
                    <Link href="/channels" color="inherit">
                        Channels
                    </Link>
                </Typography>
                <Typography variant="h6">
                    <Link href="/signin" color="inherit">
                        Sign In
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}