import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';

import { DCPage, HeroPage, MarvelPage, SearchPage } from "../heroes";
import { LoginPage } from "../auth";
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const router = createBrowserRouter([
    {
        path: 'login',
        element: <PublicRoute> <LoginPage /> </PublicRoute>,
    },
    {
        path: '/*',
        element: <PrivateRoute> <HeroesRoutes /> </PrivateRoute>,
        children: [
            {
                index: true,
                element: <Navigate to={'marvel'} replace />
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
                path: 'hero/:id',
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