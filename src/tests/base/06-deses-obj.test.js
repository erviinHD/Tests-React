import { retornaArreglo } from "../../base/07-deses-arr"

describe('Prueba de desestructuracion de objetos', ()=>{
    test('Debe retornar un string y un numero',()=>{
       //const arr = retornaArreglo();

       const [letras, numeros] = retornaArreglo();

       expect(letras).toBe('ABC')
       expect(typeof letras).toBe('string')

       expect(numeros).toBe(123)
       expect(typeof numeros).toBe('number')
       //expect(arr).toEqual(['ABC', 123])
    })
})