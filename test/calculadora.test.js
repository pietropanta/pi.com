const calculadora = require("../models/calculadora.js")

test("somar 2 + 2 deveria dar 5", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
  console.log("a soma dor fatores é", resultado);
});

test("somar 100 + 5 deveria dar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
  console.log("a soma dor fatores é", resultado);
});

test("somar 'banana' + 5 deveria dar error", () => {
  const resultado = calculadora.somar('banana', 100);
  expect(resultado).toBe("Error");
  console.log("a soma dor fatores é", resultado);
});
test("somar 100 + maça deveria dar error", () => {
  const resultado = calculadora.somar(100, 'maça');
  expect(resultado).toBe("Error");
  console.log("a soma dor fatores é", resultado);
});