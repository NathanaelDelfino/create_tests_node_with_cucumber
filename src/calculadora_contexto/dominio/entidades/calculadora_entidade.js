let calculadora = {
  numero1: 0,
  numero2: 0,
  AddNumero1: function (number) {
    this.numero1 = number;
  },
  AddNumero2: function (number) {
    this.numero2 = number;
  },
  add: function () {
    return this.numero1 + this.numero2;
  },
  sub: function () {
    return this.numero1 - this.numero2;
  },
  mult: function () {
    return this.numero1 * this.numero2;
  },
};

module.exports = calculadora;
