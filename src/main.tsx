import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.sass'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Channels from "./pages/Channels.tsx";
import {createTheme, ThemeProvider} from "@mui/material";
import ChannelView from "./pages/ChannelView.tsx";
import Page from "./Page.tsx";
import CreateChannel from "./pages/CreateChannel.tsx";

const queryClient = new QueryClient()


const router = createBrowserRouter([
    {
        path: "/",
        element: <Page element={<Channels />}/>
    },
    {
        path: "/channels",
        element: <Page element={<Channels />}/>
    },
    {
        path: "/channel/:channelId",
        element: <Page element={<ChannelView />}/>
    },
    {
        path: "/channels/new",
        element: <Page element={<CreateChannel/>}/>
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
