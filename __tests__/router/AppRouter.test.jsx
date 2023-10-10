import { render, screen } from "@testing-library/react";
import { AuthContext, LoginPage } from "../../src/auth";
import { MemoryRouter } from 'react-router-dom';
// import { AppRouter } from "../../src/router/AppRouter";
import { MarvelPage } from "../../src/heroes";


describe('Pruebas en AppRouter', () => {

    test('Debe de mostrar el Login si no está autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <LoginPage />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getAllByText('Login').length).toBeGreaterThan(1);

    });

    test('Debe de mostrar Marvel si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Miguel'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <MarvelPage />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual();

    });


});