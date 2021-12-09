describe('Pruebas en el archivo demo.test.js', () => {

    test('Deben ser iguales los strings', () => {

        //1. Inicializacion
        const msj = 'Hola mundo';

        //2. Estimulo
        const msj2 = 'Hola mundo'

        //3. Observar el comportamiento
        expect(msj).toBe(msj2);
    })

})

