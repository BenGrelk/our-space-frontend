import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Channels from "./pages/Channels.tsx";
import {createTheme, ThemeProvider} from "@mui/material";
import ChannelView from "./pages/ChannelView.tsx";

const queryClient = new QueryClient()


const router = createBrowserRouter([
    {
        path: "/",
        element: <Channels/>
    },
    {
        path: "/channel/:channelId",
        element: <ChannelView />
    }
]);

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>
            </QueryClientProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
