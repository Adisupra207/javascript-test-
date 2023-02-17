// Toko X

// Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

// Barang-barang SALE yang akan dihitung penjualannya:

// Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
// Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
// Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
// Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

// Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut

function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  let totalProfitA = 0; let shoppersA = [];
  let totalProfitB = 0; let shoppersB = [];
  let totalProfitC = 0; let shoppersC = [];
  let none = [];                
///  you can only write your code here!
  if(shoppers.length != 0){
    shoppers.forEach(element => {
      if(element.product === listBarang[0][0]){
        if(element.amount <= listBarang[0][2]){
          listBarang[0][2] -= element.amount;
          totalProfitA += (listBarang[0][1] * element.amount);
          shoppersA.push(element.name);
        }      
      }else if(element.product === listBarang[1][0]){
        if(element.amount <= listBarang[1][2]){
          listBarang[1][2] -= element.amount;
          totalProfitB += listBarang[1][1] * element.amount;
          shoppersB.push(element.name);
        }
      }else if(element.product === listBarang[2][0]){
        if(element.amount <= listBarang[2][2]){
          listBarang[2][2] -= element.amount;
          totalProfitC += listBarang[2][1] * element.amount;
          shoppersC.push(element.name);
        }
      }
    });

    let objReport = [
      { product: 'Sepatu Stacattu', 
        shoppers: shoppersA, 
        leftOver: listBarang[0][2], 
        totalProfit: totalProfitA },
      { product: 'Baju Zoro', 
        shoppers: shoppersB, 
        leftOver: listBarang[1][2], 
        totalProfit: totalProfitB},
      { product: 'Sweater Uniklooh', 
        shoppers: shoppersC, 
        leftOver: listBarang[2][2], 
        totalProfit: totalProfitC }
    ]  
    return objReport;
  }else{
    return none;
  }
  //return shoppers.length;  
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([])); //[]
