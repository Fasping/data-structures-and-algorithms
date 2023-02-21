/* Problem: Reverse a string

Given a string, write a function that reverses it. For example, if the input is "hello", the output should be "olleh".

This is a classic problem in computer science and falls under the umbrella of data structures and algorithms. It is a fundamental problem that is often used to teach basic concepts such as loops, strings, and arrays. */

function invertirCadena(cadena) {
  let result = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    result += cadena[i];
  }
  return result;
}

console.log(invertirCadena("hola")); // Output: 'aloh'
console.log(invertirCadena("javascript")); // Output: 'tpircsavaj'
console.log(invertirCadena("hoy es un buen día")); // Output: 'aíd neub nu se yoh'

// or another way

function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}
