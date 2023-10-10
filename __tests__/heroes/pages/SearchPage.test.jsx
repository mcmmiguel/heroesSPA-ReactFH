import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage />', () => {

    test('Debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
        screen.debug();

    });

    test('Debe de mostrar Batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        const image = screen.getByRole('img');
        const searchHeroDiv = screen.getByLabelText('search-hero');

        // const displayNone = {
        //     "display": "none",  //MI SOLUCION
        // }

        expect(input.value).toBe('batman');
        expect(image.src).toContain('/heroes/dc-batman.jpg');
        // expect(searchHeroDiv.style._values).toEqual(displayNone); // MI SOLUCIÓN
        expect(searchHeroDiv.style.display).toBe('none');

        // screen.debug();

    });

});