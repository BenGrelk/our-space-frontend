import TopBar from "./components/TopBar.tsx";
import BottomBar from "./components/BottomBar.tsx";
import {ReactElement} from "react";

interface PageProps {
    element: ReactElement;
}

export default function Page({element}: PageProps): ReactElement {
    return (
        <>
            <TopBar/>
            {element}
            <BottomBar/>
        </>
    )
}