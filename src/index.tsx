import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {WelcomePage} from "./pages/WelcomePage";
import {ChatPage} from "./pages/ChatPage";
import MainApp from "./pages/MainApp";
import Execution from "./pages/Execution";
import ExecutionSecond from "./pages/ExecutionSecond";
import ExecutionThird from "./pages/ExecutionThird";
import LifePersona from "./pages/LifePersona";
import BuyPolis from "./pages/BuyPolis";

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
    },
    {
        path: '/main-app',
        element: <MainApp/>
    },
    {
        path: '/buy-polis',
        element: <BuyPolis/>
    }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={routes}/>
    </React.StrictMode>
);

