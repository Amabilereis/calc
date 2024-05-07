"use strict";

/* Faça um script que receba vários salários, calcule e mostre a média dos salários digitados.
Finalize a digitação com o valor 0.

OBS: Utilize prompt para ler os dados e apresente a saída utilizando uma DIV no HTML, a não utilização destas regras irá invalidar a resposta.
*/

let quantidade = 0;
let soma = 0;

while (prompt == true) {
    let salario = prompt("Digite o salario:");
    quantidade += 1;
    soma += salario;
    }
    
     document.querySelector("#saida").innerHTML = soma/quantidade;

