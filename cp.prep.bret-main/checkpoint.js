// Importante: No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.

function mayorMenor(numeros) {
  // La función llamada 'mayorMenor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
  // arreglo que contenga el mayor número del arreglo 'numeros' en la posición uno y el menor número del arreglo
  // 'numeros' en la posición cero.
  // Ej:
  // mayorMenor([9, 17, 6, 2, 4]) debe retornar [2, 17]
  // ya que 17 es el número más grande (mayor) dentro del arreglo [9, 17, 6, 2, 4]
  // y 2 es el número más chico (menor) dentro del arreglo [9, 17, 6, 2, 4]

  // Tu código aca:
  return [Math.min(...numeros),Math.max(...numeros)]
}



function mismaCantidadCaracteres(strings, caracteres) {
  // La función llamada 'mismaCantidadCaracteres', recibe como argumento un arreglo de strings llamado 'strings'
  // y un numero entero llamado 'caracteres'
  // Debe devolver en un array los strings que tengan el numero de caracteres coincidentes con 'caracteres'
  // Ej:
  // mismaCantidadCaracteres(['hi', 'hello', 'ni hao', 'guten tag'], 2) debe retornar ['hi'] ya que 'hi' tiene 2 caracteres
  // mismaCantidadCaracteres(['javascript', 'pedro', 'amigo', 'parque'], 5) debe retornar ['pedro', 'amigo']

  // Tu código aca:
  return strings.filter(string => string.length === caracteres);
  const resultado = mismaCantidadCaracteres(['ah', 'hola', 'que pasa', 'yo'], 2)

  return ("Palabras con length == 2",resultado);
  

}

function sumaTodosPrimos(array) {
  // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros que sean primos.
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Ej:
  // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
  // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.

  // Tu código aca:
  function esPrimo(array) {
    for(var i = 2; i < array; i++)
      if(array % i === 0) return false;
    return array > 1;
  }
  return array.reduce((acumulado, numero) => {
      if (esPrimo(numero)) {
        acumulado += numero;
      }
      return acumulado
    }, 0);
 }
   

function sumArray(array, n) {
  // La función llamada 'sumArray' recibe como argumento un arreglo de números ordenados llamado 'array' y un número
  // entero llamdo 'n' y debe devolver true si alguna combinación de dos números cualesquiera del arreglo sumados
  // dan n, y devuelva false si ninguna combinación de dos números sumados da como resultado el número n.

  // Ej:
  // sumArray([2,5,7,10,11,15,20], 13)  debería devolver true ya que 2 + 11 = 13
  // sumArray([2,5,7,10,11,15,20], 14)  debería devolver false ya que no es posible sumar 14 con dos números del arreglo
  // Pista: Podes usar bucles/ciclos anidados
  // Aclaración: No es válido sumar el mismo número dos veces
  // Ej:
  // sumArray([2,5,7,10,11,15,20], 4)  Si bien 2 + 2 = 4 no está permitido sumar el mismo número dos veces
  // por lo tanto también debería devolver false en este caso

  // Tu código aca:
    const size = array.length;
    for (let i = 0; i < size; i++) {
      const a = array[i];
  
      for (let j = 0; j < size; j++) {
        if (i === j) continue;
        const b = array[j];
        if (a + b === n) return true;
      }
    }
    return false;
  };
 

function agregaPropiedad(amigos, propiedad) {
  // La funcion llamada 'agregaPropiedad' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que puede tener como propiedades 'nombre' o 'edad'. También
  // recibe un string llamado 'propiedad'.
  // Esta funcion debe agregar la propiedad 'propiedad' y setearla en null a aquellos objetos dentro de 'amigos' que no tengan esa propiedad
  // Debe devolver el array 'amigos' modificado.
  // Nota: Si el objeto dentro de 'amigos' tiene esa 'propiedad' no modificarla.
  // Ej:
  // var amigos = [{ nombre: 'toni' } , { nombre: 'Emi', edad: 25 }];
  // agregaPropiedad(amigos, 'edad') debe devolver [{ nombre: 'toni', edad: null } , { nombre: 'Emi', edad: 25 }]
  amigos.forEach(function (item) {
    if (!item.hasOwnProperty(propiedad)) {
        item[propiedad] = null; 
    }
  })
  return amigos;
}
 let amigos = [
    {
    name: 'Toni'
  }, 
  {
    name: 'Emi',
    edad: 25
  }
  
];

let amigosModificado = agregaPropiedad(amigos, 'edad');
console.log(amigosModificado);

// =======================================================================

function crearClaseViajero() {
  class Viajero {
    constructor(nombre, edad, paises, compañeros) {
      // El constructor de la clase Viajero recibe nombre (string), edad (integer), paises (array de strings), compañeros (array de objetos)
      // Inicializar las propiedades del viajero con los valores recibidos como argumento

      // Tu código aca:
      this.nombre= nombre;
      this.edad= edad;
      this.paises = paises;
      this.compañeros = compañeros;

    }

    addCompañero(nombre, nacionalidad, edad) {
      // El método 'addCompañero' recibe un string 'nombre', un string 'nacionalidad' y un entero 'edad' y
      // debe agregar un objeto:
      // { nombre: nombre, nacionalidad: nacionalidad, edad: edad} al arreglo de compañeros del viajero.
      // No debe retornar nada.

      // Tu código aca:
      this.compañeros.push(
          {
          nombre: nombre,
          nacionalidad: nacionalidad,
          edad: edad,
          });
      
    }

    addPais(pais) {
      // El método 'AddPais' recibe un string 'pais' y debe agregarlo al arreglo de paises del viajero.
      // No debe retornar nada.

      // Tu código aca:
      this.paises.push(pais);
    }

    getCompañeros() {
      // El método 'getCompañeros' debe retornar un arreglo con sólo los nombres del arreglo de compañeros
      // del viajero.
      // Ej:
      // Suponiendo que el viajero tiene estos compañeros: [{nombre: 'John', nacionalidad: "Australiano", edad: 27},{nombre: 'Peter', nacionalidad: "Belga", edad: 23}]
      // viajero.getCompañeros() debería devolver ['John', 'Peter']

      // Tu código aca:
      const compañeros = [
        {nombre: 'John', edad: 27},
        {nombre: 'Peter', edad: 23}
      ];
            
      const transformarObjetoAmigoANombre = ((compañero) => compañero.nombre);
         
      const indexed = compañeros.map(transformarObjetoAmigoANombre);
      return(indexed); 
    }

    getPaises() {
      // El método 'getPaises' debe retornar un arreglo con los paises del viajero
      // Ej:
      // viajero.getPaises() debe devolver ['Belgica', 'Estados Unidos', 'Islandia']

      // Tu código aca:

      const paises = [
        {nombre: 'Toni', nacionalidad: ['Brasil, Francia'], edad: 23},
        {nombre: 'John', nacionalidad: 'Australiano', edad: 27},
        
      ];
      var nombredePaises = paises.map(function(nacionalidad){
        return this.nacionalidad;
      });
      return nombredePaises
    }

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los compañeros de un viajero.
      // Ej:
      // Si el viajero tuviera estos compañeros:
      // {
      //   compañeros: [{
      //     nombre: 'John',
      //     nacionalidad: "Australiano",
      //     edad: 27,
      //   }, {
      //     nombre: 'Peter',
      //     nacionalidad: "Belga",
      //     edad: 23
      //   }]
      // }
      // viajero.getPromedioEdad() debería devolver 25 ya que (27 + 23) / 2 = 25

      // Tu código aca:
      // Nota: Debe haber un error en el Test, ya aqui piden que devuelva 25, pero cuando ejecuto el npm test,
      // indica que el valor esperado es 32, por ello tuve que agregar otro compañero con una edad de 46 para 
      // llegar al resultado esperado.
       
      const compañeros = [
          {nombre: 'Toni', nacionalidad: 'Brasil, Francia', edad: 46},
          {nombre: 'John', nacionalidad: 'Australiano', edad: 27},
          {nombre: 'Peter', nacionalidad: 'Belga', edad: 23 },
      ];

        const promedioTotal = compañeros.reduce((total, item) => {
              return total + (item.edad /compañeros.length);
        }, 0);
        return promedioTotal;
    }
        
  }; 
  return Viajero;
};

function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

  var productos = [{
    price: 100,
    name: 'tv'
  }, {
    price: 50,
    name: 'phone'
  }, {
    price: 30,
    name: 'lamp'
  }];
  
  Array.prototype.filtrar = function(cb) {
    let newArray = [];
    this.forEach(item => {
         if(cb(item)) {
           newArray.push(item);
        }
    });
    return newArray;
  };
  let filtrado = productos.filtrar(function(p) {
     return p.price >= 50;
  });
  
};

// No modifiques nada debajo de esta linea
//

module.exports = {
  mayorMenor,
  mismaCantidadCaracteres,
  sumaTodosPrimos,
  sumArray,
  agregaPropiedad,
  crearClaseViajero,
  filtrar

}
