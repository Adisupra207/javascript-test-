// Check AB

// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
// function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

function checkAB(num) {
  // you can only write your code here!
  let arrA = [];
  let arrB = [];
  for(let i = 0; i<num.length; i++){
    if(num[i] === "a"){
      arrA.push(i);
    }else if(num[i] === "b"){
      arrB.push(i);
    }
  }

  if(arrA.length != 0 && arrB.length != 0){
    for(let j = 0;  j<arrA.length; j++){
      for(let k = 0; k<arrB.length; k++){
        let dist = Math.abs(arrA[j]-arrB[k]);
        if(dist == 4){
          return true;
        }
      }
    }
  }else{
    return false;
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false