import { getSaludo } from "../../base/02-template-string";

describe('Prueba para el archivo template string', () => {
    test('Debe devolver el emnsaje: Hola "Nombre"', () => {
        const name = "Ervin";

        const saludo = getSaludo(name);

        expect(saludo).toBe('Hola ' + name)
    });

    test('Si no hay argumento debe devolver Jervin', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Jervin')
    })
})