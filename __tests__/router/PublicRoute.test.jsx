
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe('Pruebas en PublicRoute', () => {

    test('Si no está autenticado debe de mostrar el children', () => {

        const contextValue = {
            logged: false,
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute >
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta publica')).toBeTruthy();


    });

    test('Debe redirigir a Marvel si está loggeado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Miguel',
                id: '123',
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={<h1>Marvel Page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Marvel Page')).toBeTruthy();
        screen.debug()


    });

});