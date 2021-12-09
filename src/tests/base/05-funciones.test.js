import { getUser, getUsuarioActivo } from "../../base/05-funciones"
import '@testing-library/jest-dom';
describe('Prueba de funciones', () => {

    test('getUser debe retornar un objeto', () => {
        const userTests = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTests)
    })

    test('getUsuarioActivo debe devolver el nombre que ingresamos como param', ()=>{

            const name = 'Ervin'

            const userTest = {
                uid: 'ABC567',
                username: name
            }

            const user = getUsuarioActivo(name);

            expect(user).toEqual(userTest);
    })
})