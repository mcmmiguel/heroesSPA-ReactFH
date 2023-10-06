import { LoginPage } from "../auth/pages/LoginPage";
import { DCPage } from "../heroes/pages/DCPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
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
    {
        path: '/',
        element: <Navigate to={'marvel'} />
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