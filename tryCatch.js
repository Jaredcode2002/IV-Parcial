//Ejemplo de un error
/*
try {
    let resultado = 10/sdfsd
} catch (error) {
    console.error("Se produjo un error: "+error)
}
*/

/* Ejercicio en clase
Escribe una función llamada dividirNumeros que tome dos números 
como parametros y devuelva el resultado de dividir el primer número
por el segundo número. Sin embargo, debes manejar los errores que
puedan surgir si se intenta dividir por cero o si alguno de los
parametros no es un número válido. Si se produce un error, la función 
debería devolver un mensaje de error personalizado.
*/


function dividirNumeros(numero1, numero2) {
    try {
        // Intenta realizar la división
        if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
            //throw "Ambos argumentos deben ser números.";
            console.error("Ambos argumentos deben ser números.")
        }
        
        if (numero2 === 0) {
            throw "No puedes dividir por cero.";
        }
        
        return numero1 / numero2;
    } catch (error) {
        // Maneja el error y devuelve un mensaje personalizado
        return "Error: " + error;
    }
}


// Ejemplos de uso de la función
console.log(dividirNumeros(10, 2)); // Debería mostrar 5
console.log(dividirNumeros(5, 0));  // Debería mostrar "Error: No puedes dividir por cero."
console.log(dividirNumeros("abc", 2)); // Debería mostrar "Error: Ambos argumentos deben ser números."
