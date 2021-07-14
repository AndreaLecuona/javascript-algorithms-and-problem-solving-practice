// SOME HACKERRANK PROBLEMS

// const numeros = [2, 3, 6, 6, 5];
// function getSecondLargest(nums) {
//     const uniqueNums = new Set(nums);
//     const finalArray = [...uniqueNums];
//     finalArray.sort((a, b) => a - b );
//     return finalArray[finalArray.length-2];
// }
// getSecondLargest(numeros);


// const s = Number('1234');
// function reverseString(s) {
//     try{
//         const arrFromS = s.split('').reverse().join('');
//         console.log(arrFromS);
//     } catch(err){
//         console.log(`${err.message}\n${s}`);
//     }
// }
// reverseString(s);


// const a = 8;
// function isPositive(a) {
//     if (a > 0) {
//         return 'YES';
//     }
//     if (a === 0) {
//         throw new Error('Zero Error');
//     }
//     if (a < 0) {
//         throw new Error('Negative Error');
//     }
// }
// isPositive(a);


// function Rectangle(a, b) {
//     this.length = a,
//     this.width = b,
//     this.perimeter = 2 * (a + b),
//     this.area = a * b
// }
// let tablonEdEddEddy = new Rectangle(4, 5);
// console.log(tablonEdEddEddy['area']);



// const a = [{x:1, y:1}, {x:2, y:3}, {x:3, y:3}, {x:3, y:4}, {x:4, y:5}]
// function getCount(objects) {
//     let counter = 0;
//     objects.forEach( obj => {
//         if (obj.x === obj.y) {
//             counter++;
//         }
//     })
//     //opcion2
//     // for(let i = 0; i < objects.length; i++){
//     //     if (objects[i].x === objects[i].y) {
//     //         counter++;
//     //     }
//     // }
//     return counter;
// }
// getCount(a);


// class Polygon{
//     constructor(sides){
//         this.sides = sides;
//     }
//     perimeter() { return this.sides.reduce((acc, cur) => acc + cur) };
// }
// let triangle = new Polygon([3, 4, 5, 1]);
// console.log(triangle.perimeter());



// class Rectangle {
//     constructor(w, h) {
//         this.w = w;
//         this.h = h;
//     }
// }
// /*
//  *  Write code that adds an 'area' method to the Rectangle class' prototype
//  */
//     Rectangle.prototype.area = function() {
//         return this.h * this.w;
//     }
// /*
//  * Create a Square class that inherits from Rectangle and implement its class constructor
//  */
// class Square extends Rectangle {
//     constructor(s){
//         super (s, s);
//         this.w = s;
//         this.h = s;
//     }
// }



// const s1 = 140;
// const s2 = 48;

// function sides(literals, ...expressions){
//     let a = expressions[0];
//     let b = expressions[1];

//     let sidesArr = [];
//     sidesArr.push((b + Math.sqrt((b ** 2) - 16 * a)) / 4);
//     sidesArr.push((b - Math.sqrt((b ** 2) - 16 * a)) / 4);
//     return sidesArr.sort( (a, b) => a > b ? 1 : -1);
// }


// const arr = [1, 2, 3, 4, 5];
// function modifyArray(nums) {

//     const newNums = nums.map( num => {
//         if(num % 2 === 0){
//             return num * 2
//         } else {
//             return num * 3
//         }
//     })
//     return newNums;
// }
// modifyArray(arr);


// function getDayName(dateString) {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
//     let dayName;
//     const date = new Date(dateString);
//     dayName = days[date.getDay()];
    
//     return dayName;
// }
// getDayName('11/10/2010');


//It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
// function regexVar() {

//     const re = /^([aeiou]).*\1$/g;

//     return re;
// };


//toma un array 2d (matriz) y devuelve la diferencia entre: la suma de los valores en diagonal derecha y la suma de los valores en diagonal izquierda:
// 1 2 3
// 4 5 6
// 9 8 9
// diagonal derecha = 1 + 5 + 9 = 15
// diagonal izquierda = 3 + 5 + 9 = 17
// resultado = 15 - 15 = 2
//en JS no existen los array2d propiamente dichos, el equivalente es un multiarray, es decir, un array dentro de otro:
//arr = [ [1,2,3], [4,5,6], [9,8,9] ]

// function diagonalDifference(arr) {
//     let toRight = 0;
//     let toLeft = 0;
    
//     arr.forEach( (num, index, arr) => {
//         toRight += num[index];
//         toLeft += num[arr.length - index - 1];
//     })
    
//     return Math.abs(toRight - toLeft);
// }


//Dado un array con numeros positivos, negativos y cero, imprimir la proporcion de cada tipo de numero con 6 decimales
//arr = [2, 7, 0, -1, -4]  5 numeros en total, 2 positivos, 2 negativos y 1 cero
// 2/5=0.400000 2/5=0.400000 1/5=0.200000
// resultado
// 0.400000
// 0.400000
// 0.200000
// function plusMinus(arr) {
//     let counter = {
//         positive: 0,
//         negative: 0,
//         zero: 0
//     };
    
//     arr.forEach( num => {
//         if(num === 0){
//             counter.zero++;
//         } else if(num > 0){
//             counter.positive++;
//         } else {
//             counter.negative++;
//         }
//     });
    
//     Object.values(counter).forEach(ratio => {
//         console.log( (ratio/arr.length).toPrecision(6) )
//     });
    
//     return counter;
// };



//Dado un input n que determina la cantidad de filas, imprimir una 'escalera' de simbolos numerales (#)
//Ej: con n = 6
//     #
//    ##
//   ###
//  ####
// #####
//######
// function staircase(n) {
//     let space = ' ';
//     let numeral = '#';
    
//     for(let i = 1; i <= n; i++){
//         console.log(`${space.repeat(n - i)}${numeral.repeat(i)}`);
//     }
// }


//Dado un array de enteros imprimir la suma de los minimos valores y los maximos valores. Los enteros a sumar se determinan excluyendo al numero de mayor y menor valor, respectivamente
//En [1,3,5,7,9] la suma de minimos = 1+3+5+7 = 16, y la suma de maximos = 3+5+7+9 = 24
//Resultado = 16 24
// function miniMaxSum(arr) {

//     const lowerNumber = Math.min(...arr);
//     const maximumNumber = Math.max(...arr);
    
//     const maxSum = ( arr.reduce((prev, curr) => prev + curr) ) - lowerNumber;
//     const minSum = ( arr.reduce((prev, curr) => prev + curr) ) - maximumNumber;

//     console.log(minSum, maxSum);
// }

// miniMaxSum([1,3,5,7,9]);


//Find the tallest candle in a birthday cake and return how many of them are there
//candles = [3,2,1,3]
//result = 2
// function birthdayCakeCandles(candles) {
//     // Write your code here
//     const tallestUnit = Math.max(...candles);
//     let counter = 0;
//     for(let i = 0; i <= candles.length; i++){
//         if(candles[i] !== tallestUnit) continue;
//         counter++
//     }
//     return counter;
// }


//Convert an hour string from 12 hours format to military format (24hs)
// function timeConversion(s) {
//     let hour = s.slice(0,2);
//     const middle = s.slice(2,-2);
//     const ampm = s.slice(-2);
    
//     if(ampm === 'AM' && hour === '12'){
//         hour = '00';
//     } else if (ampm === 'PM'){
//         hour = (hour % 12) + 12;
//     }
    
//     return `${hour}${middle}`;
    
// }
// timeConversion('07:05:45PM');
// timeConversion('12:40:22AM');


//ESTA SOLUCION FUNCIONA PERO LE FALTA OPTIMIZAR (CON RANGOS Y NUMEROS GRANDES TARDA MUCHO)
// function xorSequence(l, r) {
//     let a = [0];
    
//     let i = 1;
//     while(i <= r){
//         a.push(a[i-1] ^ i)
//         i++
//     }
//     console.log(a);
//     const section = a.slice(l, r+1);
//     const expression = section.join('^');
    
//     console.log(eval(expression));
//     // return eval(expression);
// }
// xorSequence(5,9);



//Se redondean para arriba si la diferencia de la nota y el siguiente multiplo de 5, es menor a 3
//Si es menor a 38 no se redondea porque igual no aprueba la cursada
//EXPLICACION DEL CALCULO DE LA DIFERENCIA
// n%5 will give you the remainder of the numbers to make n divisible by 5..
// say n = 78
// 78%5 = 3 so we have a remainder of 3 if we divide 78/5..
// We however do not need the remainder to convert to a number divisible by 5 say we add 3 to 78 we will end up with 81, which is not divisible by 5.
// We want to know how far we are from achieving a 5 from the modulus of 78 which is why we then subtract the modulus from 5..
// In our case it would be we have a remainder of 3 and from 78 we require 2 (i.e 5-3(remainder) ) to be able to make our number divisible by 5..

// function gradingStudents(grades) {
//     return grades.map( grade => {
//         let difference = 5 - (grade % 5);
//         if( difference < 3 && grade >= 38 ){
//             grade += difference;
//         }
//         return grade;
//     });
// }


//Hay que identificar la cantidad de manzanas y naranjas que caen sobre la casa de alguien
//s = min del rango de la casa de fulano
//t = max del rango
//a = valor de la posicion del arbol de manzanas
//b = valor del arbol de naranjas
//apples = array con las distancias de cada manzana caida respecto al arbol
//oranges = array con las distancias de cada naranja caida respecto al arbol
// function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
//     const applesCount = apples.map(apple => apple + a).filter( position => position >= s && position <= t).length;
    
//     const orangesCount = oranges.map(orange => orange + b).filter( position => position >= s && position <= t).length;
    
//     console.log( applesCount );
//     console.log( orangesCount );
// }



//Hay que averiguar si dos canguros se cruzan o no dados sus puntos de partida y distancias de salto
// si uno sale mas adelante y salta mas lejos = nunca se cruzan 
// si las distancias d esalto son iguales = nunca se cruzan

// function kangaroo(x1, v1, x2, v2) {
//     if(x1 < x2 && v1 < v2) return 'NO';
//     if( (v1 != v2) && ((x1 - x2) % (v2 - v1) === 0) ) {
//         return 'YES'
//     } else { return 'NO' }
// }



//Hay que buscar la cantidad de multiplos que hay entre dos arrays
// let a = [2, 4];
// let b = [16, 32, 96];
// la respuesta sería 3 porque 4, 8 y 16 son los numeros entre los arrays que dividen a todos los numeros de ambos arrays sin dejar resto

// function getTotalX(a, b) {
//     let counter = 0;

//     for (let x = Math.min( ...a ); x <= Math.max( ...b ); x++) {
//         if ( a.every(int => (x % int === 0)) && b.every(int => (int % x == 0)) ) {
//             counter += 1;
//         }
//     }
//     return counter;
// }



//Hay que, dados los puntajes de x cantidad de partidos, buscar la cantidad de veces que una basketbolista rompió su record de mayor puntos y su record de menor puntos.
//Cuando lo rompe (hacia arriba o hacia abajo) ese último puntaje pasa a ser la nueva referencia para la siguiente comparación (de mayor o menor puntaje, según el caso).
// const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

// function breakingRecords(scores) {
//
//     let counter = {
//         highScore: scores[0],
//         lowScore: scores[0],
//         breakingTop: 0,
//         breakingLow: 0
//     }

//     scores.forEach( score => {
//         if( score > counter.highScore ){
//             counter.breakingTop++;
//             counter.highScore = score;
//         }
//         if( score < counter.lowScore ){
//             counter.breakingLow++;
//             counter.lowScore = score;
//         }
//     } )

//     return [ counter.breakingTop, counter.breakingLow ];
// }


//dado un array, un valor resultado de una sumatoria y una cantidad de numeros del array a sumar, devolver cuantas veces se cumple que podemos sumar la cantidad de numeros pedida que corresponda al valor de resultado:
// s = [1, 2, 1, 3, 2];
// d = 3; (resultado de la suma)
// m = 2; (cantidad de numeros del array a sumar)
// el resultado es 2 porque recorriendo el array: 1+2=d, 2+1=d, 1+3!=d, 3+2!=d , sólo dos veces cumplió con el resultado de la suma pedido.

// function birthday(s, d, m) {
//     let counter = 0;
//     for ( let i = 0; i <= s.length-1; i++){
//         let subSum = s.slice(i, i+m).reduce( (acc, cur) => acc + cur );
//         if( subSum === d  ) counter++;
//     }
//     return counter;
// }