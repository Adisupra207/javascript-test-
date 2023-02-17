// Faktor Persekutuan Terbesar

// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

function fpb(angka1, angka2) {
  // you can only write your code here!
  let factor1 = []; let factor2 = []; let factorB = [];
  for(let i = 1; i<angka1; i++){
    if(angka1%i==0){
      factor1.push(i);
    }
  }
  for(let j = 1; j<angka2; j++){
    if(angka2%j==0){
      factor2.push(j);
    }
  }

  for(let k=0; k<factor1.length; k++){
    for(let l=0; l<factor2.length; l++){
      if(factor2[l]==factor1[k]){
        factorB.push(factor2[l]);
      }
    }
  }

  return factorB[factorB.length-1];
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1