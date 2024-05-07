"use strict";

// 1 - Faça um script que receba duas notas por meio do prompt, calcule e mostre a média ponderada dessas notas, considerando peso 6 para a primeira nota e peso 4 para a segunda nota. Utilize o alert para dar a resposta final.

let nota1 = parseFloat(prompt("Digite a Primeira nota:"));
let nota2 = parseFloat(prompt("Digite a Segunda nota:"));

let media = (nota1*6)+(nota2*4)/10;


alert(`A média ponderada é ${media}`)




