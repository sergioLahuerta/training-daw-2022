class Coche {
    // En el constructor se le especifique: marca, modelo, consumoPor100
    constructor(marca, modelo, consumoX100) {
        console.log("constructor...");
        this.total = 0;
        this.marca = marca
        this.modelo = modelo
        this.consumoX100 = consumoX100;
    }
  
    reposta(litros) {
        this.total += litros;
    }

    //Contenga el total de gasolina que dispone
    totalGasofa() {
        this.total = litros
    }

    darRodeo(distancia) {
        this.total -= distancia * this.total / 100
    }
  }

  module.exports = Coche;