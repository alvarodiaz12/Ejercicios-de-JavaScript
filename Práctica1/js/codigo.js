/* Ejercicio1 */

//Mostrar la información en pantalla
/* alert("Me llamó Álvaro Díaz Casaño y curso 1º DAM")
alert("Me gustaria trabajar en el desarrollo de videojuegos") */


/* Ejercicio2 */

//Declarar variable para almacenar la suma y el número
/* let suma = 0;
let num = 1; 

//Bucle while para pedir números hasta que se introduzca un cero
while (num != 0) {
    num = prompt("Introduce un número (0 para finalizar):");
    suma += parseInt(num); 
}

//Mostrar la suma en pantalla
alert("La suma de los números introducidos es " + suma); */


/* /* Ejecicio3 */

/* //Declarar variable para almacenar el número completo
let numCompleto ="";
	
	//Bucle for para pedir 4 valores numéricos de una cifra
	for (let i = 1; i <= 4; i++) {
		let num = prompt("Introduce el valor numérico de una cifra #" + i + ":");
		numCompleto += num; //Añadir el valor introducido al número completo
	}
	
	//Mostrar el número completo en pantalla
	alert("El número completo es: " + numCompleto); */


/* Ejercicio4 */

/* //Pedir el valor de la nota
	var nota = prompt("Introduce el valor de la nota:");

	//Evaluar la nota y asignar una calificación en texto
	if (nota >= 9) {
		var calificacion = "Sobresaliente";
	} else if (nota >= 7) {
		var calificacion = "Notable";
	} else if (nota >= 6) {
		var calificacion = "Bien";
	} else if (nota >= 5) {
		var calificacion = "Suficiente";
	} else {
		var calificacion = "Insuficiente";
	}

	//Mostrar la calificación en pantalla
	alert("La nota introducida es " + nota + " y la calificación correspondiente es " + calificacion); */


/* Ejecicio5 */

/* //Declarar el array vacío
let numeros = [];

//Bucle for para pedir 10 valores numéricos
for (let i = 1; i <= 10; i++) {
	let num = prompt("Introduce el valor numérico #" + i + ":");
	numeros.push(parseFloat(num)); //Añadir el valor introducido al array
}

//Calcular la suma de los valores del array
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
	suma += numeros[i];
}

//Calcular el mayor valor del array
let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
	if (numeros[i] > mayor) {
		mayor = numeros[i];
	}
}

//Calcular el menor valor del array
let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
	if (numeros[i] < menor) {
		menor = numeros[i];
	}
}

//Calcular la media de los valores del array
let media = suma / numeros.length;

//Mostrar las estadísticas en pantalla
alert("La suma de los valores del array es: " + suma + "\nEl mayor valor del array es: " + mayor 
+ "\nEl menor valor del array es: " + menor + "\nLa media de los valores del array es: " + media); */


/* Ejercicio6 */

/* //Pedir 10 valores separados por espacios en una línea
var valores = prompt("Introduce 10 valores separados por espacios:");

//Separar los valores en un array
var arrayValores = valores.split(" ");

//Declarar arrays vacíos para almacenar los valores pares e impares
var pares = [];
var impares = [];

//Bucle for para evaluar cada valor y añadirlo al array correspondiente
for (var i = 0; i < arrayValores.length; i++) {
	if (arrayValores[i] % 2 == 0) {
		pares.push(arrayValores[i]);
	} else {
		impares.push(arrayValores[i]);
	}
}

//Mostrar los valores pares e impares en pantalla
alert("Valores pares: " + pares.join(", ") + "\nValores impares: " + impares.join(", ")); */




