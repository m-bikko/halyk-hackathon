import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {WelcomePage} from "./WelcomePage";
import {ChatPage} from "./ChatPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const routes = createBrowserRouter([
    {
        path: '/',
        element: <WelcomePage/>
    },
    {
        path: '/chat',
        element: <ChatPage/>
    }

])

root.render(
    <React.StrictMode>
        <RouterProvider router={routes}/>
    </React.StrictMode>
);

