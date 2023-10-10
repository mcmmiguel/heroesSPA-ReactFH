import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";


describe('Pruebas en authReducer', () => {

    // let initialState = {};

    // beforeEach(() => {
    //     initialState = {};
    // });

    test('Debe de retornar el estado por defecto', () => {

        const newState = authReducer({ logged: false }, {});
        expect(newState).toEqual({ logged: false });

    });

    test('Debe de llamar el Login autenticar y establecer el user', () => {

        // const user = { id: 'abc', user: 'Miguel' };

        const action = {
            type: types.login,
            payload: {
                id: 'abc',
                name: 'Miguel',
            },
        };

        const newState = authReducer({ logged: false }, action);
        expect(newState).toEqual({
            logged: true,
            user: action.payload,
        });
        expect(newState.logged).toBeTruthy();

    });

    test('Debe de llamar el logout y borrar el user además de establecer logged en false', () => {

        const state = {
            logged: false,
            user: {
                id: '123',
                name: 'Migue',
            }
        }

        const action = {
            type: types.logout,
        };

        const newState = authReducer(state, action);
        expect(newState).toEqual({
            logged: false,
        })

        // expect(newState.user).toBeFalsy();
        // expect(newState.logged).toBeFalsy();

    });


});