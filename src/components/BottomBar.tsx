import "../styles/BottomBar.sass";
import {Link} from "@mui/material";
import {ReactElement} from "react";

export default function BottomBar(): ReactElement {
    return (
        <div className="bottom-bar">
            <p>© 2024 Ben Grelk</p>
            <Link href="https://github.com/BenGrelk/our-space-frontend">View Source</Link>
        </div>
    )
}