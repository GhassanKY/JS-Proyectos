/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let firstWord = "roma"
let secondWord = "amor"

let firstWordArray = firstWord.split("").reverse().join("")
let secondWordArray = secondWord.split("").reverse().join("")

if (firstWordArray === secondWord) {
    console.log("Es un anagrama")
} else if (secondWordArray === firstWord) {
    console.log("Es un anagrama")
} else {
    console.log("No es un anagrama")
}