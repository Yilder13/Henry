const {
  mayorMenor,
  mismaCantidadCaracteres,
  sumaTodosPrimos,
  sumArray,
  agregaPropiedad,
  crearClaseViajero,
  filtrar
} = require('../checkpoint.js');

var personas =[
  {
    nombre: 'Emi',
    edad: 21,
    hobbies: ['correr', 'dormir', 'nadar'],
    amigos: [
      { 
        nombre: 'Martin',
      },{
        nombre: 'Leo',
      }
    ],
  }, {
    nombre: 'Franco',
    edad: 22,
    hobbies: ['futbol', 'golf'],
    amigos: [
      {
        nombre: 'Emi',
      }, {
        nombre: 'Jimmy',
      }, {
        nombre: 'Matias',
      }
    ],
  },
  {
    nombre: 'Martin',
    edad: 35,
    hobbies: ['Cancha', 'emprender'],
    amigos: [
      {
        nombre: 'Toni',
      }, {
        nombre: 'Leo',
      }, {
        nombre: 'Manu',
      }
    ],
  },
];

describe('Funciones', function() {
  describe('mayorMenor', function() {
    it('should return [1, 10] for [1,2,3,4,5,6,7,8,9,10]', function() {
      expect(mayorMenor([1,2,3,4,5,6,7,8,9,10])).toEqual([1, 10]);
    });
    it('should return [-10, 10] for [-10,2,3,4,5,6,7,8,9,10]', function() {
      expect(mayorMenor([-10,2,3,4,5,6,7,8,9,10])).toEqual([-10, 10]);
    });
     it('should return [1, 10] for [1, 10]', function() {
      expect(mayorMenor([1, 10])).toEqual([1, 10]);
    });
  });

  describe('mismaCantidadCaracteres', function() {
    it('should return ["hi"]', function() {
      expect(mismaCantidadCaracteres(['hi', 'hello', 'ni hao', 'guten tag'], 2)).toEqual(["hi"]);
    });
    it('should return ["pedro", "amigo"]', function() {
      expect(mismaCantidadCaracteres(['javascript', 'pedro', 'amigo', 'parque'], 5)).toEqual(['pedro', 'amigo']);
    });
  });

  describe('sumaTodosPrimos', function() {
    it('should return 21 with [1, 5, 2, 9, 3, 4, 11]', function() {
      expect(sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11])).toBe(21);
    });
    it('should return 23 with [0,5,7,10,11,15,20]', function() {
      expect(sumaTodosPrimos([0,5,7,10,11,15,20])).toBe(23);
    });
    it('should return 35 with [-2,5,7,10,23,10,25]', function() {
      expect(sumaTodosPrimos([-2,5,7,10,23,10,25])).toBe(35);
    });
  });

  describe('sumArray', function() {
    it('should return true with [2,5,7,10,11,15,20], 2 + 11 = 13', function() {
      expect(sumArray([2,5,7,10,11,15,20], 13)).toBe(true);
    });
    it('should return false.', function() {
      expect(sumArray([2,5,7,10,11,15,20], 14)).toBe(false);
    });
    it('should return false (cant sum the same number with itself)', function() {
      expect(sumArray([2,5,7,10,11,15,20], 4)).toBe(false);
    });
  });

  describe('agregaPropiedad', function() {

    it('should return "[{ nombre: "toni", edad: null }, { nombre: "Emi", edad: 25 }]"', function() {
      expect(agregaPropiedad([{ nombre: 'toni' } , { nombre: 'Emi', edad: 25 }], 'edad')).toEqual([{ nombre: "toni", edad: null }, { nombre: "Emi", edad: 25 }]);
    });
    it('should return "[{ nombre: "toni" }, { nombre: "Emi", edad: 25 }]"', function() {
      expect(agregaPropiedad([{ nombre: 'toni' } , { nombre: 'Emi', edad: 25 }], 'nombre')).toEqual([{ nombre: "toni" }, { nombre: "Emi", edad: 25 }]);
    });
  });

});

describe('Clase', function() {
  describe('crearClaseViajero', function() {
    it('should return a user constructor that correctly builds user objects', function() {
        const Viajero = crearClaseViajero();
        const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
        expect(viajero.nombre).toBe('toni');
        expect(viajero.edad).toBe(23);
        expect(viajero.paises).toEqual(['Brasil', 'Francia']);
        expect(viajero.compañeros).toEqual([{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
    });
    it('should add a partner with addCompañero', function() {
        const Viajero = crearClaseViajero();
        const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
        viajero.addCompañero('Peter', 'Belga', 37);
        expect(viajero.compañeros[1]).toEqual({ nombre: 'Peter', nacionalidad: 'Belga', edad: 37});
    });
    it('should add a country with addPais', function() {
      const Viajero = crearClaseViajero();
      const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
      viajero.addPais('Mexico');
        expect(viajero.paises[2]).toBe('Mexico');
    });
    it('should get all partners with getCompañeros', function() {
      const Viajero = crearClaseViajero();
      const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}, { nombre: 'Peter', nacionalidad: 'Belga', edad: 37}]);
      expect(viajero.getCompañeros()).toEqual(['John','Peter']);
    });
    it('should get all countries with getPaises', function() {
      const Viajero = crearClaseViajero();
      const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}]);
      expect(viajero.getPaises()).toEqual(['Brasil', 'Francia']);
    });
    it('should get age average with getPromedioEdad', function() {
      const Viajero = crearClaseViajero();
      const viajero = new Viajero('toni', 23, ['Brasil', 'Francia'], [{nombre: 'John', nacionalidad: "Australiano", edad: 27}, { nombre: 'Peter', nacionalidad: 'Belga', edad: 37}]);
      expect(viajero.getPromedioEdad()).toBe(32);
    });
  });
});

describe('Extra Credit', function() {
  describe('Filter', function() {
    filtrar();
    it('should filter', function() {
      expect(personas.filtrar(p => p.edad <= 22).length).toBe(2);
    })
    it('should filter ok', function() {
      expect(personas.filtrar(p => p.edad > 50).length).toBe(0);
    })
  })
});