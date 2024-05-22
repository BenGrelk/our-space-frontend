import TopBar from "./components/TopBar.tsx";
import BottomBar from "./components/BottomBar.tsx";
import {ReactElement} from "react";

import "./styles/Page.sass";

interface PageProps {
    element: ReactElement;
}

export default function Page({element}: PageProps): ReactElement {
    return (
        <>
            <TopBar/>
            <div className="page-content">
                {element}
            </div>
            <BottomBar/>
        </>
    )
}