"use strict";

/* Uma empresa decide aplicar descontos nos seus preços usando a tabela a seguir. 
Faça um script que receba o preço atual de um produto e que calcule e mostre o valor do desconto e o novo preço.

Preço atual % de desconto
Até R$ 30,00 Sem desconto
De R$ 30,00 até R$ 100,00 10%
Acima de R$ 100,00 15%

OBS: Utilize formulário para receber os dados e mostrar a saída solicitada, a não utilização de formulário irá invalidar a resposta.*/

let botao = document.querySelector("#botao");

botao.addEventListener('click', function (){
    let preco = Number(document.querySelector("#preco").value);
    let resposta = document.querySelector("#resposta");
    let resposta2 = document.querySelector("#resposta2");

    if (preco <= 30 && preco > 0){
        resposta.value = `Sem desconto`;
        resposta2.value = `R$ ${preco}`;
    }

    else if (preco > 30 && preco <= 100){
        let desconto = (preco*10)/100;     
        resposta.value = `R$ ${desconto}`;
        resposta2.value = `R$ ${preco-desconto}`;
    }

    else if (preco > 100){
        let desconto = (preco*15)/100
        resposta.value = `R$ ${desconto}`;
        resposta2.value = `R$ ${preco-desconto}`;
    }

    else {
        resposta.value = `Valor inválido`;
    }
    
});

