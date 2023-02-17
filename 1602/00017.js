// Target Terdekat

// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
// Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
// Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

function targetTerdekat(arr) {
  // you can only write your code here!
  let j = 0;
  let k = 0;
  let arrO = [];
  let arrX = [];
  let sdist = arr.length;
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === "x"){
      arrX.push(i);
    }else if(arr[i] === "o"){      
      arrO.push(i);
    }
  }
  if(arrO.length != 0 && arrX.length != 0){
    while(j < arrO.length && k < arrX.length){
      let dist = Math.abs(arrO[j]-arrX[k]);
      if(dist<sdist){
        sdist = dist;
      }
      if(arrO[j]<arrX[k]){
        j++;
      }else{
        k++;
      }
    }
  }else{
    return 0;
  }  
  return sdist;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2