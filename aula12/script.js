
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A


teste = varA;
varA = varB;
varB = varC;
varC = teste;


console.log(varA,varB,varC)