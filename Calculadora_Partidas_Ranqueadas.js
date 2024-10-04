//Usei os valores como exemplo
console.log(CalcularPartidasRanqueadas(116, 15));
function CalcularPartidasRanqueadas(Vitorias, Derrotas){
    let nivel;
    let Resultado = Vitorias - Derrotas;
    if(Resultado <= 10){
         nivel = "Ferro";
    }else if(Resultado > 10 && Resultado<= 20){
         nivel = "Bronze";
    }else if(Resultado > 20 && Resultado <= 50){
         nivel = "Prata";
    }else if(Resultado > 50 && Resultado <= 80){
         nivel = "Ouro";
    }else if(Resultado > 80 && Resultado <= 90){
         nivel = "Diamante";
    }else if(Resultado > 90 && Resultado <= 100){
         nivel = "Lendário";
    }else{
         nivel = "Imortal";
    }
    console.log(`O Herói tem de saldo de ${Resultado} está no nível de ${nivel}`)
        return Resultado;
}