import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";


describe('Pruebas en authReducer', () => {

    let initialState = {};

    // beforeEach(() => {
    //     initialState = {};
    // });

    test('Debe de retornar el estado por defecto', () => {

        const newState = authReducer(initialState, {});
        expect(newState).toEqual({});

    });

    test('Debe de llamar el Login autenticar y establecer el user', () => {

        const user = { id: 'abc', user: 'Miguel' };

        const action = {
            type: types.login,
            payload: user,
        };

        const newState = authReducer(initialState, action);
        expect(newState.user).toEqual(user);
        expect(newState.logged).toBeTruthy();

    });

    test('Debe de llamar el logout y borrar el user además de establecer logged en false', () => {

        const action = {
            type: types.logout,
        };

        const newState = authReducer(initialState, action);
        expect(newState.user).toBeFalsy();
        expect(newState.logged).toBeFalsy();

    });


});