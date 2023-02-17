// Mengelompokkan Hewan

// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. 
// Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. 
// Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

function groupAnimals(animals) {
  // you can only write your code here!
  let arrayA=[];let arrayB=[];let arrayC=[];let arrayD=[];let arrayE=[];let arrayF=[];let arrayG=[];let arrayI=[];
  let arrayJ=[];let arrayK=[];let arrayL=[];let arrayM=[];let arrayN=[];let arrayO=[];let arrayP=[];let arrayQ=[];
  let arrayR=[];let arrayS=[];let arrayT=[];let arrayU=[];let arrayV=[];let arrayW=[];let arrayX=[];let arrayY=[];
  let arrayZ=[];let arrayH=[];let arrayfinal=[];
  animals.forEach(element => {
    switch (element[0]) {
      case "a":
        arrayA.push(element);
        break;
      case "b":
        arrayB.push(element);
        break;
      case "c":
        arrayC.push(element);
        break;
      case "d":
        arrayD.push(element);
        break;
      case "e":
        arrayE.push(element);
        break;
      case "f":
        arrayF.push(element);
        break;
      case "g":
        arrayG.push(element);
        break;
      case "h":
        arrayH.push(element);
        break;
      case "i":
        arrayI.push(element);
        break;
      case "j":
        arrayJ.push(element);
        break;
      case "k":
        arrayK.push(element);
        break;
      case "l":
        arrayL.push(element);
        break;
      case "m":
        arrayM.push(element);
        break;
      case "n":
        arrayN.push(element);
        break;
      case "o":
        arrayO.push(element);
        break;
      case "p":
        arrayP.push(element);
        break;
      case "q":
        arrayQ.push(element);
        break;
      case "r":
        arrayR.push(element);
        break;
      case "s":
        arrayS.push(element);
        break;
      case "t":
        arrayT.push(element);
        break;
      case "u":
        arrayU.push(element);
        break;
      case "v":
        arrayV.push(element);
        break;
      case "w":
        arrayW.push(element);
        break;
      case "x":
        arrayX.push(element);
        break;
      case "y":
        arrayY.push(element);
        break;
      case "z":
        arrayZ.push(element);
        break;      
      default:
        break;
    }
    // if(element[0]=="a")
    // arrayA.push(element);    
  });
  // Iterate through the input arrays
  for (let arr of [arrayA, arrayB, arrayC, arrayD, arrayE, arrayF, arrayG, arrayH, arrayI, arrayJ, arrayK, arrayL, arrayM, arrayN, arrayO, arrayP, arrayQ, arrayR, arrayS, arrayT, arrayU, arrayV, arrayW, arrayX, arrayY, arrayZ]) {
  // Check if the array is not empty
    if (arr.length > 0) {
      // Append the array to the result array
      arrayfinal.push(arr);
    }
  }
  return arrayfinal;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]