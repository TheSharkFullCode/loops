// Itera del 0 al 10 usando un bucle for e imprime cada número por consola. Luego, haz lo mismo con un bucle while.


// for (let i = 0; i < 11; i++) {
//     console.log(i);
    
// }
// alert("hola mundo")
// let k = 0
// while ( k < 10){
//     alert(k)
//     k++;
//     break;
    
// }
// alert(k);
// ----------------------------------------------->

// ejercicio_02
// Itera del 10 al 0 usando un bucle for e imprime cada número por consola. Luego, haz lo mismo con un bucle while.

// for (i = 10; i > 0 -1; i--){
//     console.log(i);
// }

    // j = 11;
    // while(j > 0){
    //     j --;
    //     console.log(j);
        
    // }
   




// Ejercicio 3
// Crea la variable number y haz que un bucle for imprima la tabla de multiplicar de ese número (del 0 al 10) en la consola, siguiendo el siguiente formato:

// num x 0 = 0
// num x 1 = num * 1
// num x 2 = num * 2
// etc.

//  var number1 = 9;

// for (number = 0; number <11 ; number++){
//         result = number1 * number;
//     console.log(`${number1} x ${number}=${result}`);
    

// }
// document.write (number1 + " x "+ number +" :"+ number*number1); 
// document.write ("<br>"); 
// document.write (number); 
// console.log(number);
// alert("saludame");


// let number = [1,0];
//  for(i=0; i < number; i++){
//     number = i * number;
//     console.log(number);
//  }


// let arr = [0,20,6 ];
// for (let i of arr){
//     i += i**2;
//     console.log(i);
// }
// este funciona
// for (i=0; i<21; i+=2){
//     console.log(i);
// }



// ----------------------------------------------------------------------------------------->

// i = 0;
// for (i=0; i<100;i++){
//     console.log(i);
// }

// --------------------------------------------------------------------------------------




// Ejercicio 4
// Imprime el siguiente patrón:

// i    i**2   i**3
// ----------------- Lo de abajo---------------
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

// for (let i=0; i<11;i++){
//     console.log(`${i} ${i**2} ${i**3}`);

// }


// Ejercicio 5
// Imprime por consola, una sola vez, la suma de todos los números del 0 al 10.

// i = 0;
for (i=0; i<11;i++){
    console.log(i+0);
}

// console.log(i+i++);
// Ejercicio 6
// Haz lo mismo pero con el resultado de multiplicar todos los números del 0 al 10. Una vez estés seguro de que es el resultado correcto, explica en un comentario por qué da ese resultado.

for (i=0; i<1;i++){

    console.log(i*0);
}
//todo numero multiplicado por cero da cero:



// --------------------------------------------------------------------------------->
// Ejercicio 7
// imprime por consola del 0 hasta el 100 pero sólo los que estén comprendidios entre el 10 y 23 y entre el 56 y 62. Luego haz otro log que muestre solo los números divisibles entre 5 o 7.

    for (i=0; i<101;i++){

        
        if((i>9) && (i<24)){
            console.log(i);

        }
        
        
        
    }

    
    // console.log(i);

// Ejercicio 8
// Pídele al usuario que introduzca un número e imprime por consola: "La suma de todos los números pares del 0 al <<num>> es <<result>>, y la suma de todos los números impares del 0 al <<num>> es <<result>>."


num01 = prompt(`introduce un numero hasta el 20`);
num01 = prompt(`introduce un numero`);

for(num01=2; num01<20;i++){
    let result = num01;
    console.log(result);
}




// Ejercicio 9
// Pídele al usuario que introduzca un número y muestra por consola los números múltiplos de 3 que hay desde 0 a dicho número.







// Ejercicio 10
// Crea la variable str con valor "JavaScript". A continuación, pídele al usuario que introduzca un número de 0 al 10 y una letra. Debes añadir a str dicha letra tantas veces como el número que ha introducido el usuario. Ejemplo:
// let num = 5;
// let letter = "j";
// resultado esperado: "JavaScript" (5 "j" añadidas)



//(011) Itera sobre una variable con valor "JavaScript" anterior y muestra por consola cada letra de manera separada.

// Ejercicio 12
// Crea la variable filter y dale el valor de una letra cualquiera. A continuación, itera sobre un string y muestra por consola cuantas veces aparece filter en el string. Ejemplo:
// let filter = "s";
// let string = "sospechoso";
// resultado esperado: 3 (la "s" aparece 3 veces en el string "sospechoso")



// Ejercicio 13
// Usando las mismas variables del ejercicio anterior, ahora debes crear un nuevo string que no contenga la letra de filter:
// let filter = "s";
// let string = "sospechoso";
// resultado esperado: "opechoo"


