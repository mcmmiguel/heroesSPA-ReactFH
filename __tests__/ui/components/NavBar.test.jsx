import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from "../../../src/ui/components/NavBar";

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en NavBar', () => {

    const contextValue = {
        logged: true,
        user: {
            id: '124',
            name: 'Miguel',
        },
        logout: jest.fn(),
    }

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe mostrar el nombre del usuario autenticado', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Miguel')).toBeTruthy();

    });

    test('Debe de llamar a logout y navegar cuando se hace click', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const button = screen.getByRole('button');

        fireEvent.click(button)

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { "replace": true });

    });

});