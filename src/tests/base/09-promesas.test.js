import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Prueba con promesas', () => {
    test('getHeroeByIdAsync debe devolver un Heroe async', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            })
    })

    test('getHeroeByIdAsync debe obtener un error si el heroe no existe', (done) => {
        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error=>{
                expect(error).toBe('No se pudo encontrar el héroe');
                done();

            })
    })
})