const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

let calculadora = require("./dominio/entidades/calculadora_entidade.js");
let resultado;



Given("Eu entrei o primeiro {string} na calculadora", function (number) {
  calculadora.AddNumero1(parseInt(number));
});

Given("Eu entrei o segundo {string} na calculadora", function (number) {
  calculadora.AddNumero2(parseInt(number));
});


Then('Eu devo ver o resultado de ser {string} na tela', function (number) {
    assert.strictEqual(parseInt(number), resultado);
});

When('Quando se somar dois números', () => {
  resultado = calculadora.add();
})


