function verificaNumero(num){
    let str = '';
    
    if(num % 2 == 0){
      str = 'par';
    }else{
      str = 'impar';
    }
  
    str += ', ';
  
    if(num > 0){
      str += 'positivo';
    }else{
      str += 'negativo';
    }
  
    str += ' e ';
  
    if(num === parseInt(num)){
      str += 'não possui casas decimais';
    }else{
      str += 'possui casas decimais';
    }
  
    str = 'O numero ' + num + ' é ' + str;
  
    return str;
  }
  
  //console.log(verificaNumero(-12));


  let valor = 18;
let result = valor / 2;
console.log(result);

result = result / 3;
console.log(result);

let isPair = ( result == 3 );
console.log(isPair);

if(isPair){
  result = result * 6;
}else{
  result = result * 12;
}

//console.log(result);

function algarismosEmUmNumero(n){
    let str = `${n}`;
    let contagem = str.length;
    //console.log(contagem);
  
    if(n != parseInt(n)){
      console.log("Entrou aqui");
      contagem = contagem - 1;
    }
  
   // console.log(contagem);
  
    return contagem;
  }
 // algarismosEmUmNumero(3.141517);




retorno correto da função mediaEscolar().
function somaNotas(nota1, nota2, nota3, nota4){
    let sum = nota1 + nota2 + nota3 + nota4;
    return sum;
}

function mediaEscolar(){
    let media = somaNotas(8, 7, 8, 9) / 4;
    return media;
}

console.log(mediaEscolar())