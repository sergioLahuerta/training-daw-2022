const Coche = require('./Coche.js');

let coche1 = new Coche('toyota', 'XR3', 55);
coche1.reposta(11);
coche1.total;
coche1.move(100)

console.log('Km -> ', coche1)


// METODOS
// move (distancia): descuenta distancia/consumoPor100 litros del total

// restante(): devuelve los km que aun podemos hacer (...)

