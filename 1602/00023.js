// Ubah Huruf

// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
// Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
// Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

function ubahHuruf(word) {
  // you can only write your code here!
  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    //newWord += "a";
    let currentChar = word[i];
    if (currentChar === "z") {
      newWord += "a";
    } else if (/[a-y]/i.test(currentChar)) {
      newWord += String.fromCharCode(currentChar.charCodeAt(0) + 1);
    } else {
      newWord += currentChar;
    }
  }

  return newWord;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu