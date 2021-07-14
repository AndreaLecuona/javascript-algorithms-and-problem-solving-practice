//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).



// Desafío de programación #1: Imprimí los números del 1 al 10
//  Resultado: 10 9 8 7 6 5 4 3 2 1

function decreceDiezAUno(){
	for(let i = 10; i > 0; i--){
		console.log(i);
	}
}
// decreceDiezAUno();


//  Desafìo de programación  #2: Imprimí los números impares del 1 al 100
//  1 3 5 ... 99

function impares(){
	for(let i = 1; i < 100; i++){
		if(i % 2 !== 0 ){
			console.log(i);
		}
	}
}
// impares();


// Desafío de programación #3: Imprimí la tabla de multiplicación del 7
//  7x0 = 0
//  7x1 = 7
//  ...
//  7x9 = 63

function tablaDelSiete(){
	for(let i = 0; i < 10; i++){
		console.log(7 * i);
	}
}
// tablaDelSiete();


// Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
//  1x0 = 0
//  ...
//  1x9 = 9
//  2x0 = 0
//  ...
//  2x9 = 18
//  ...
//  ...
//  9x9 = 81

function todasLasTablas(){
		for(let i = 1; i < 10; i++){
			for(let j = 0; j < 10; j++){
				console.log(`${i} * ${j} = ${i * j}`);
			}
		}
	}
// todasLasTablas();


// Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
//  [1,2,3,4,5,6,7,8,9,10]
//  1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumarArray(){
	let total = 0;
	for(let i = 0; i < arr.length; i++){
		total += arr[i];
	}
	console.log(total);
}
// sumarArray();


// Desafío de programación #6: Calcula 10! (10 factorial)
//  10 * 9 * 8 * ... * 1
function diezFactorial(){
	let total = 1;
	for(let i = 10; i > 0; i--){
		total *= i;
	}
	console.log(total);
}
// diezFactorial();


// Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
function sumarImpares(){
	let sumatoria = 0;
	for(let i = 10; i < 30; i++){
		if(i % 2 !== 0 ){
			sumatoria += i
		}
	}
	console.log(sumatoria);
}
// sumarImpares();


// Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
function celsiusAFarenheit(temp){
	return temp * 9/5 + 32
}
// console.log(celsiusAFarenheit(20));


// Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
function farenheitACelsius(temp){
	return (temp - 32) * 5/9
}
// console.log(farenheitACelsius(68));


// Desafío de programación #10: Calcula la suma de todos los números en un array de números
// const arrExample = [1, 2, 3, 4];
function sumarImpares(arr){
	let sumatoria = 0;
	for(let i = 0; i < arr.length; i++){
		sumatoria += arr[i]
	}
	console.log(sumatoria);
}
// sumarImpares(arrExample);


// Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
// const arrExample = [1, 2, 3, 4, 5];
function promediar(arr){
	let sumatoria = 0;
	for(let i = 0; i < arr.length; i++){
		sumatoria += arr[i]
	}
	console.log(sumatoria / arr.length);
}
// promediar(arrExample);


// Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
// const arrExample = [1, -2, 3, -4, 5];
function filtrarPositivos(arr){
	let result = arr.filter(a => a > 0);
	console.log(result);
}
// filtrarPositivos(arrExample);


// Desafío de programación #13: Find the maximum number in an array of numeros
// const arrExample = [1, -2, 3, -4, 5];
function encontrarValorMaximo(arr){
	let result = Math.max(...arr);
	console.log(result);
}
// encontrarValorMaximo(arrExample);


// Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
// Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
// El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
function calcularDiezFibonacci(){
	let serie = [0, 1];
	let i = 1;
	let nextNum;
	while(i < 9){
		nextNum = serie[i] + serie [i-1]
		serie.push(nextNum);
		i++;
	}
	console.log(serie);
}
// calcularDiezFibonacci();


// Desafío de programación #15: Crear una función que encuentre el número nextNum de Fibonacci usando recursión
let serie = [0, 1];
function encontrarFibonacci(numDePosicion){
	let nextNum = serie[serie.length - 2] + serie[serie.length - 1];
	serie.push(nextNum);
	if(serie.length !== numDePosicion){
		encontrarFibonacci(numDePosicion);
	} else {console.log(serie[numDePosicion-1])}
}
// encontrarFibonacci(16);


// Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
const verificarPrimo = (n) => {
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
};
// console.log(verificarPrimo(17)); //CUIDADO SRP!


// Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
// Ejemplo:
//    123 = 1 + 2 + 3 = 6 
//    1234 = 1 + 2 + 3 + 4 = 10
function sumarDigitos(nextNum){
    const arrDesdeN = Array.from(nextNum.toString()); ///split creo o metodo para separarlos distinto
    console.log(arrDesdeN);
    let sumatoria = arrDesdeN.reduce((accumulator, currentValue) => {
        return Number(accumulator) + Number(currentValue)
    });
    console.log(sumatoria);
};
// sumarDigitos(1234);


// Desafío de programación #18: Imprimir los primeros 100 números primos
function imprimirCienNPrimos(){
    let serie = [];
    let n = 2
    while(serie.length < 100){
        if(verificarPrimo(n)){
            serie.push(n);
        };
        n++
    }
    console.log(serie);
}
// imprimirCienNPrimos();


// Desafío de programación #19: Crear una función que retorne un array con los primeros números "nextNum-primos" mayores que un número particular definido "alComienzo"
// Ejemplo:
// Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]
// const esPrimoMayorA = (n) => {
//     for(let i = 2; i < n; i++){
//         if(n % i === 0){
//             return false
//         }
//     }
//     return true
// };
function limitarPrimos(cantidad, baseNumerica){
    let serie = [];
    let n = baseNumerica + 1;
    while(serie.length < cantidad){
        if(esPrimoMayorA(n)){
            serie.push(n);
        };
        n++
    }
    console.log(serie);
}
// limitarPrimos(4, 5);
// limitarPrimos(8, 31);


// Desafío de programación #20: Rotar un array hacia la izquierda una posición
// Ejemplo:
//   [9,1,2,3,4] debería quedar como [1,2,3,4,9]
//   [5] debería quedar como [5]
//   [4,3,2,1] debería quedar como [3,2,1,4]
// const arrExample1 = [9, 1, 2, 3, 4];
// const arrExample2 = [5];
// const arrExample3 = [4, 3, 2, 1];
function moverIndexAlFinal(array){
    let ultimoNum = array.shift();
    array.push(ultimoNum);
    console.log(array);
};
// moverIndexAlFinal(arrExample1);
// moverIndexAlFinal(arrExample2);
// moverIndexAlFinal(arrExample3);


// Desafío de programación #21: Rotar un array a la derecha una posición
// Ejemplo:
//   [2,3,4,1] debería quedar como [1,2,3,4]
//   [2,3] debería quedar como [3,2]
// const arrExam1 = [2,3,4,1];
// const arrExam2 = [3,2];
function moverPrimeroAlFinal(array){
    let ultimoNum = array.pop();
    array.unshift(ultimoNum);
    console.log(array);
};
// moverPrimeroAlFinal(arrExam1);
// moverPrimeroAlFinal(arrExam2);


// Desafío de programación #22: Invertir un array
// Ejemplo:
//   [1,2,3,4] debería quedar como [4,3,2,1]
//   [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
//   [5,6,3] debería quedar como [3,6,5]
// const arrExam1 = [1,2,3,4];
// const arrExam2 = [6,5,4,3,2,1];
function invertirArray(array){
    array.reverse();
    console.log(array);
};
// invertirArray(arrExam1);
// invertirArray(arrExam2);


// Desafío de programación #23: Invertir una cadena de caracteres
// Ejemplo:
//   "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
//   "bienvenido" debería quedar como "odinevneib"
// const testCadena1 = "dabale arroz a la zorra el abad";
// const testCadena2 = "bienvenido";
function invertirString(cadena){
    const arrDesdeCadena = cadena.split("");
    const invertido = arrDesdeCadena.reverse().join("");
    console.log(invertido);
};
// invertirString(testCadena1);
// invertirString(testCadena2);


// Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
// Ejemplo:
//   [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]
// const arrEj1 = [1,2,3];
// const arrEj2 = ["a","b","c"];
function unirArrays(arr1, arr2){
    const resultado = arr1.concat(arr2);
    console.log(resultado);
    return resultado
}
// unirArrays(arrEj1, arrEj2);


// Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
// Nota: Esto se llama "diferencia simétrica" entre conjuntos
// Ejemplo:
//   [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
//   [5,10,3] y [10,1] debería quedar como [5,3,1]
// const array1 = [1,2,3];
// const array2 = [3,7,11];
function diferenciaSimetrica(arr1, arr2){
    const difference = arr1.filter( arr1Value => !arr2.includes(arr1Value) )
    .concat( arr2.filter( arr2Value => !arr1.includes(arr2Value) ) );
    console.log(difference);
}
//USANDO SET()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Set
//https://typeofnan.dev/exploring-the-symmetric-difference-interview-question-in-javascript
//https://stackoverflow.com/questions/30834946/trying-to-solve-symmetric-difference-using-javascript#:~:text=The%20mathematical%20term%20symmetric%20difference,the%20order%20of%20the%20numbers.
// diferenciaSimetrica(array1, array2);


// Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
// Nota; Esto se llama "resta" entre conjuntos
// Ejemplo:
//   [5,1,2,3,4] y [3,4] debería devolver [5,1,2]
// const array1 = [5,1,2,3,4];
// const array2 = [3,4];

function restaEntreConjuntos(arr1, arr2){
    const difference = arr1.filter( arr1Value => !arr2.includes(arr1Value) );
    console.log(difference);
}
// restaEntreConjuntos(array1, array2);


// Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
// Ejemplo:
//    [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]
// const array1 = [1,2,3,4,5,4,3,2,1,0];

function valoresUnicos(array){
    const setFromArray = new Set(array);
    console.log([...setFromArray]);
}
// valoresUnicos(array1);


//==== FALTAN TRADUCIR
//Desafío de programación #28: Calculate the sum of first 100 prime numeros
function devolverCienNPrimos(){
    let serie = [];
    let n = 2
    while(serie.length < 100){
        if(verificarPrimo(n)){
            serie.push(n);
        };
        n++
    }
    return serie;
}
function sumarCienPrimos(){
    const conjunto = devolverCienNPrimos();
    const sumatoria = conjunto.reduce((acc, cur) => acc + cur);
    console.log(sumatoria);
}
// sumarCienPrimos();


//Desafío de programación #29: Print the distance between the first 100 prime numeros (prime gap)
function distanciaEntreCienPrimos(){
    const conjunto = devolverCienNPrimos();
    const distancias = [];
    for(let i = 0; i < conjunto.length-1; i++){
        distancias.push(conjunto[i+1] - conjunto[i]);
    }
    console.log(distancias);
};
// distanciaEntreCienPrimos();


//Desafío de programación #30: Create a function that will add two positive numeros of indefinite size. The numeros are received as strings and the result should be also provided as string.
const n1 = "2909034221912398942349";
const n2 = "1290923909029309499";
function sumarNumerosIndefinidos(num1, num2){
    const sumatoria = Math.round(Number(num1)) + Math.round(Number(num2));
    console.log(sumatoria.toFixed(2));
}
sumarNumerosIndefinidos(n1, n2);


//Desafío de programación #31. Create a function that will return the number of words in a text
// const parrafo = "Pequeña historia de Mozart: Tras una infancia repleta de éxitos, Mozart se hizo mayor y siguió dedicándose a su gran pasión: la música. Trabajó toda la vida sin descanso y gracias a su enorme talento compuso grandes obras maestras. Hoy en día muchos expertos le consideran el músico más importante de la Historia."
function normalizar(palabra){
    return palabra.toLowerCase().replace(/,|\.|:|!/g, "");
}
function contadorDePalabras(texto){
    let contador = {};
    let arrayDePalabras = texto.split(" ");

    for(let palabra of arrayDePalabras){
        if(normalizar(palabra) in contador){
            contador[normalizar(palabra)]++;
        } else {
            contador[normalizar(palabra)] = 1;
        }
    }
    console.log(contador);
};
// contadorDePalabras(parrafo);


//Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
// const parrafo = "Pequeña historia de Mozart: Tras una infancia repleta de éxitos, Mozart se hizo mayor y siguió dedicándose a su gran pasión: la música. Trabajó toda la vida sin descanso y gracias a su enorme talento compuso grandes obras maestras. Hoy en día muchos expertos le consideran el músico más importante de la Historia."
function capitalizarPalabras(texto){
    const arrayDesdeTexto = texto.split(" ");
    const palabrasCapitalizadas = [];
    for(let palabra of arrayDesdeTexto){
        const inicial = palabra[0].toUpperCase();
        const sinInicial = palabra.slice(1);
        palabrasCapitalizadas.push(`${inicial}${sinInicial}`);
    }
    console.log(palabrasCapitalizadas.join(" "));
}
// capitalizarPalabras(parrafo);


//Desafío de programación #33. Calculate the sum of numeros received in a comma delimited string
// const numeros = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
function calcularSumaDesdeString(string){
    const arrayDesdeString = string.split(", ");
    const sumatoria = arrayDesdeString.reduce( (acc, cur) => Number(acc) + Number(cur) );
    console.log(sumatoria);
};
// calcularSumaDesdeString(numeros);


//Desafío de programación #34. Create a function that will return an array with words inside a text
// const text = "Create a function, that will return an array (of string), with the words inside the text";
function borrarCharEspecial(palabra){
    return palabra.replace(/,|\(|\)/g, "");
}
function crearArrayDeStrings(texto){
    const arrayInicial = texto.split(" ");
    let arrayResultado = [];
    arrayInicial.forEach(palabra => {
        arrayResultado.push(borrarCharEspecial(palabra));
    })
    console.log(arrayResultado);
};
// crearArrayDeStrings(text);


//Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
// const data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";
function convertirCvsATexto(texto){
    const arrayDesdeTexto = texto.split('\n');
    const resultado = [];
    for(let persona of arrayDesdeTexto){
        const subarray = persona.split(';');
        resultado.push(subarray);
    }
    console.log(resultado);
}
// convertirCvsATexto(data);


//Desafío de programación #36. Create a function that converts a string to an array of characters
// const texto = "javascript";
function convertirAArray(texto){
    const nuevoArray = texto.split('');
    console.log(nuevoArray);
}
// convertirAArray(texto);


//Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
// const texto = "rick y morty";
function convertirAArrayASCII(texto){
    const arrayDesdeTexto = texto.split('');
    const nuevoArray = [];
    arrayDesdeTexto.forEach( caracter => {
        const codigo = caracter.charCodeAt();
        nuevoArray.push(codigo);
    })
    console.log(nuevoArray);
}
// convertirAArrayASCII(texto);


//Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
// const array = [114, 105, 99, 107, 32, 121, 32, 109, 111, 114, 116, 121];
function convertirDesdeASCII(array){
    const nuevoArray = [];
    array.forEach( a => {
        const caracter = String.fromCharCode(a);
        nuevoArray.push(caracter);
    })
    console.log(nuevoArray.join(''));
}
// convertirDesdeASCII(array);


//Desafío de programación #39. Implement the Caesar cypher
//alfabeto normal defasado x veces hacia derecha o izquierda
const texto = "I LOVE JAVASCRIPT";
// const textoEncriptado = encriptarCifradoCesar(texto, 13);
// function encriptarCifradoCesar(mensaje, valorDesplazamiento){

// };

// encriptarCifradoCesar(texto, 13);
// decodificarCifradoCesar(textoEncriptado, 13);

// String.fromCodePoint(42);       // "*"
// String.fromCodePoint(65, 90);   // "AZ"



/*
Desafío de programación #40. Implement the bubble sort algorithm for an array of numeros
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numeros in a jagged array (array contains numeros or other arrays of numeros on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numeros or array of numeros
Desafío de programación #46-b. Find the maximum number in a jagged array of numeros or array of numeros
Desafío de programación #47. Deep copy a jagged array with numeros or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive nextNum as argument and return an array of nextNum unique random numeros from 1 to nextNum.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
*/ 