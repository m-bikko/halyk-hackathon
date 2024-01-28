import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import {WelcomePage} from "./pages/WelcomePage";
import {ChatPage} from "./pages/ChatPage";
import MainApp from "./pages/MainApp";
import LifePersona from "./pages/LifePersona";
import BuyPolis from "./pages/BuyPolis";
import Execution from "./pages/Execution";
import {ExecutionSecond} from "./pages/ExecutionSecond";
import {ExecutionThird} from "./pages/ExecutionThird";

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
        element: <MainApp/>,
    },
    {
        path: '/life-person',
        element: <LifePersona/>,
    },
    {
        path: '/buy-polis',
        element: <BuyPolis/>,
    },
    {
        path: '/execution-1',
        element: <Execution/>,
    },
    {
        path: '/execution-2',
        element: <ExecutionSecond/>,
    },
    {
        path: '/execution-3',
        element: <ExecutionThird/>,
    }
])

root.render(
    <React.StrictMode>
        <RouterProvider router={routes}/>
    </React.StrictMode>
);

