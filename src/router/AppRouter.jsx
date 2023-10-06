import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';

import { DCPage, HeroPage, MarvelPage, SearchPage } from "../heroes";
import { LoginPage } from "../auth";
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';

const router = createBrowserRouter([
    {
        path: 'login',
        element: <LoginPage />,
    },
    {
        path: '/*',
        element: <HeroesRoutes />,
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
                path: 'search',
                element: <SearchPage />,
            },
            {
                path: 'hero',
                element: <HeroPage />,
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