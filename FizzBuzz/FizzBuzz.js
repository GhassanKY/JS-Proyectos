/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

let numMax = 100

for (let iNumprev = 0; iNumprev < numMax; iNumprev++) {
    if (iNumprev % 3 == 0 && iNumprev % 5 == 0) {
        console.log("fizzbuzz")
    } else if (iNumprev % 3 == 0) {
        console.log("fizz")
    } else if (iNumprev % 5 == 0) {
        console.log("buzz")
    } else {
        console.log(iNumprev)
    }
}