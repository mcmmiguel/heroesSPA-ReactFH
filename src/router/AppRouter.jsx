import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';

import { DCPage, MarvelPage } from "../heroes";
import { HeroesApp } from "../HeroesApp";
import { LoginPage } from "../auth";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HeroesApp />,
        children: [
            {
                index: true,
                element: <Navigate to={'marvel'} />
            },
            {
                path: 'marvel',
                element: <MarvelPage />,
            },
            {
                path: 'dc',
                element: <DCPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
        ]
    }
]
);


export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}