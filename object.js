// 1 cara mengakses object menggunakan bracket notation adalah dengan cara console.log(namaobjek["...."]); jadi orang pertama di ketik tuh console.log lalu tulis nama objeknya lalu beri [] lalu di dalam braket tulis key-nya

// 2 perbedaan menggunakan . dan braket hanya perbedaan penulisan cara menggunakannya sama saja yang ditulis objectnya dulu baru keynya

// 3 cara menambah properti baru object hanya dengan tulis objectnya lalu diikuti key mau mau ditambah lalu = valuenya

// 4 ,5 & 6
let mobil = {
     merk : "lamborghini",
     warna : "orange",
     tahun : 2022
}

mobil.warna = "hitam";
mobil.kecepatanMaksimum = 300;
delete mobil.tahun;
console.log(mobil);