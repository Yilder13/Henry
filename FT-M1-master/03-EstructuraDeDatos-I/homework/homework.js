// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
 if( n < 0) return false;
 if (n===0 || n===1) return 1; //Aqui se aplica Caso de Corte si llegó a 1 retorna 1 

 return n* nFactorial(n-1); // LLama a nFactorial para el término que sigue

}

 
function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  
  // n = n-2 + n-1 (llamada recursiva)
  // (Caso  base cuando es 0 o 1 => corte)
  
  if (n===0 || n===1) {
     return n; // retorno 0 o 1 según el n

  } else {

    return nFibonacci(n-2) + nFibonacci(n-1); // llamo a la función por cada término no conocido
  }
}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() { // Es la clase Queue
  this.array = []; // creo un array vacio

}

Queue.prototype.enqueue = function(value) { //Crea metodo de enqueue
    return this.array.unshift(value); // Incerta Value al inicio del array
}

Queue.prototype.dequeue = function() { //Crea metodo Queue
  return this.array.pop(); // Elimina el último elemento del array
}

Queue.prototype.size =  function() { // Crea metodo de Queue
  return this.array.length; // retorna la longitud del array
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
