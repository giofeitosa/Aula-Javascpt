//var nome = "Giovani Feitosa";
//var idade= 36;
//var frase="Japão é melhor time do mundo"

//alert( nome + " tem " +idade); invés do alert, posso usar o console.log e ver noa pag(f12 -> console)
//console.log(nome);
//console.log(idade);
//console.log(frase.toUpperCase());
//alert(frase.replace ("Japão", "Brasil"));

//Array
//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); // adiciona
//lista.pop(); // retira o último

//console.log(lista);
//console.log(lista.length);
//console.log(lista.toString()); //transforma em string
//console.log(lista.join(" | ")); //muda o marcador da sepaaração

//Dicionário
/*
var fruta={nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/

// Array de dicionario
/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);*/

//Decisão
/*
var idade = prompt("Qual a sua idade?"); //pede um preenchimento
//var idade = 18;
if (idade>=18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade")
};
*/

//Repetição
/*var count = 0;
while (count<=5){
    console.log(count);
    alert(count);
    count++;
};*/
/*var count;
for(count=0; count<=5; count++){
    console.log(count);
};*/

//Datas
/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getMonth()+1); // +1 pq começa do 0
alert(d.getHours());
alert(d.getDate());*/

//Função

function soma(n1,n2){
    return n1+n2;
}
var validar=0;
function validaIdade(idade){
     validar //Se colocar var aqi, ele leva em consideração a atribuição da global
    if (idade >=18){
        validar= true
    }else{
        validar=false
    }
    return validar
}
//function setReplace(frase, nome, novo_nome){
   // return frase.replace(nome, novo_nome)}

alert(soma(5,10));
//alert(setReplace("Vai japão", "Japão", "Brasil"));
var idade= prompt("qual a sua idade");
validaIdade(idade);
console.log(validar);