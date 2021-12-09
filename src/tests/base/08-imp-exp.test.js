import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones herores', () => {
    test('Debe retornar un heroe', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData)
    })

    test('Debe retornar Undefined si no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        //const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(undefined)
    })

    // Owner

    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        const heroeOwner = heroe.filter(h => h.owner === owner)
        expect(heroe).toEqual(heroeOwner)


    })

    test('Debe retornar un tamaño de arreglo debe ser 2', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        expect(heroe.length).toBe(2)


    })
})