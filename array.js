// 1 push untuk menambahkan elemen di akhir array sedangkan unshift untuk menambahkan elemen di awal array
// 2 gunakan shift untuk menghapus elemen di awal array 
// 3 reduce() itu buat ngolah data dalam array jadi satu hasil aja! Bisa buat jumlahin angka, kaliin angka, atau ngolah data lainnya, Mirip kaya nge-loop, tapi lebih rapi & simpel.

// 4
let arr = [1, 12, 25, 4, 20];
let kuadrat = arr.map(a => a**2);
console.log(kuadrat);

// 5
let arr2 = [1, 4, 3, 7, 9, 100, 25];
let filter = arr2.filter(a => a > 5);
console.log(filter);

// 6
let arr3 = [1, 2, 3, 4, 5];
let total = arr3.reduce((a, b) => a + b, 0);
console.log(total);