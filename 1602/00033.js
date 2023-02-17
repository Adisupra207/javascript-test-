// Password Generator

// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

function changeVocals (str) {
  //code di sini
  let newWord = "";
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (currentChar === "a"||currentChar === "i"|| currentChar === "u"||currentChar === "e"||currentChar === "o") {
      newWord += String.fromCharCode(currentChar.charCodeAt(0) + 1);
    }else if (currentChar === "A"||currentChar === "I"|| currentChar === "U"||currentChar === "E"||currentChar === "O") {
      newWord += String.fromCharCode(currentChar.charCodeAt(0) + 1);
    }else {
      newWord += currentChar;
    }
  }
  return newWord;
}

function reverseWord (str) {
  //code di sini
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str.charAt(i);
  }
  return rev;
}

function setLowerUpperCase (str) {
  //code di sini
  let fSentence = "";
  for(i=0; i<str.length; i++){
    if(/[A-Z]/.test(str[i])){
      fSentence += str[i].toLowerCase();
    }else if(/[a-z]/.test(str[i])){
      fSentence += str[i].toUpperCase();
    }else{
      fSentence += str[i];
    }
  }
  return fSentence;
}

function removeSpaces (str) {
  //code di sini
  let rSentence ="";
  return rSentence = str.replace(" ","");
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'