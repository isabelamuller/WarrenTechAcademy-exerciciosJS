// faça um algoritmo que escreva os números de 1 a 20

let x = 1;

while (x <= 20) {
  console.log(x);
  x++;
}


// faça um algoritmo que escreva todos os números pares entre 1 e 50

let x1 = 1;

while (x1 <= 50) {
  if (x1 % 2 == 0) {
    console.log(x1);
  }
  x1++;
}


// faça um algoritmo que escreva todos os numeros entre 1 e 200 que sao multiplos de 11

let x2 = 1;

while (x2 <= 200) {
  if (x2 % 11 == 0) {
    console.log(x2);
  }
  x2++;
}


// faça um algoritmo que leia 5 numeros e escreva os que forem pares

let x3 = 1;

while (x3 <= 5) {
  let num = parseInt(prompt());
  if (num % 2 == 0) {
    console.log(num);
  }
  x3++;
}


// faça um algoritmo que leia numeros ate que seja digitado um numero negativo e escreva todos que forem pares

let x4 = 0;

while (x4 >= 0) {
  x4 = parseInt(prompt());
  console.log(x4);
  if (x4 < 0) {
    break;
  }
}


// faça um algoritmo que leia 5 valores e conte quantos estao no intervalo [10,20], escrevendo no final essa informaçao

let x5 = 1;

while (x5 <= 5) {
  let num1 = parseInt(prompt());
  if (num1 >= 10 && num1 <= 20) {
    console.log(num1);
  }
  x5++;
}


// faça um algoritmo que leia um valor n. escreva a seguir os numeros de 1 a n

let n = parseInt(prompt());
let x6 = 1;

while (x6 <= n) {
  console.log(x6);
  x6++;
}


// faça um algoritmo que leia um valor n, representando a quantidade de valores a serem lidos em seguida. leia, a seguir, n valores e escreva os que forem positivos

let n1 = parseInt(prompt());
let x7 = 0;

while (x7 < n1) {
  let valores = parseInt(prompt());
  if (valores >= 0) {
    console.log(valores);
  }
  x7++;
}


// faça um algoritmo que leia um valor n, e escreva todos os seus divisores

let n3 = parseInt(prompt());
let div = 1;

while (n3 >= div) {
  if (n3 % div == 0) {
    console.log(div);
  }
  div++;
}


// faça um algoritmo que leia um valor n, e conte quantos divisores possui, escrevendo ao final essa informaçao

let n4 = parseInt(prompt());
let div1 = 1;
let numDiv = 0;

while (n4 >= div1) {
  if (n4 % div1 == 0) {
    numDiv++;
  }
  div1++;
}
console.log(numDiv);


// faça um algoritmo que leia um valor n, e calcule e escreva a soma dos seus divisores

let n5 = parseInt(prompt());
let div2 = 1;
let somaDiv = 0;

while (n5 >= div2) {
  if (n5 % div2 == 0) {
    somaDiv = somaDiv + div2;
  }
  div2++;
}
console.log(somaDiv);


// faça um algoritmo que leia um valor n inteiro e maior do que 1, e calcule e escreva o seu maior divisor (excetuando n)

let n6 = parseInt(prompt());
let div3 = 1;
let maiorDiv = 1;

while (n6 >= div3) {
  if (n6 % div3 == 0) {
    if (div3 != n6 && div3 >= maiorDiv) {
      maiorDiv = div3;
    }
  }
  div3++;
}
console.log(maiorDiv);

// faça um algoritmo que leia um valor n inteiro e maior do que 1, e calcule e escreva o seu menor divisor maior do que 1

let n7 = parseInt(prompt());
let div4 = 1;
let menorDiv = n7;

while (n7 >= div4) {
  if (n7 > 1) {
    if (n7 % 2 == 0) {
      menorDiv = 2;
    } else if (n7 % div4 == 0 && div4 > 1) {
      menorDiv = div4;
      div4 -= 2;
      break;
    }
  }
  div4++;
}
console.log(menorDiv);


// faça um algoritmo que leia um número e verifique se é primo escrevendo: 1 - se o número é primo; 0 - se o número não é primo

let n8 = parseInt(prompt());
let div5 = 1;
let maiorDiv1 = 1;
let divPrimo = 2;

while (divPrimo <= n8 / 2) {
  if (n8 % divPrimo == 0) {
    console.log("0");
    break;
  } else if (div5 != n8 && div5 >= maiorDiv1) {
    console.log("1");
    break;
  }
  div5++;
}


// faça um algoritmo que leia 2 valores e verifique se são amigos entre si escrevendo: 1 - se são amigos; 0 - se não são amigos

let valor1 = parseInt(prompt());
let valor2 = parseInt(prompt());
let div6 = 1;
let div7 = 1;
let somaDivValor1 = 0;
let somaDivValor2 = 0;

while (valor1 >= div6) {
  if (valor1 % div6 == 0) {
    somaDivValor1 = somaDivValor1 + div6;
  }
  div6++;
}
somaDivValor1 = somaDivValor1 - valor1;

while (valor2 >= div7) {
  if (valor2 % div7 == 0) {
    somaDivValor2 = somaDivValor2 + div7;
  }
  div7++;
}
somaDivValor2 = somaDivValor2 - valor2;

if (somaDivValor1 == valor2 && somaDivValor2 == valor1) {
  console.log("1 - são amigos");
} else {
  console.log("0 - não são amigos");
}




