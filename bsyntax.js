// 1 Perbedaan var, let, dan const dalam JavaScript

//     var adalah cara lama untuk mendeklarasikan variabel.
//     var memiliki function scope, artinya hanya terbatas dalam function tempat dia dibuat.
//     Bisa di-hoist, tetapi nilainya akan menjadi undefined jika diakses sebelum deklarasi.
//     Bisa di-deklarasikan ulang (re-declare) dan bisa diubah nilainya (re-assign).
//     Karena sifatnya yang kurang ketat, var sering menyebabkan bug, sehingga tidak direkomendasikan.

// let adalah cara modern dan lebih aman untuk mendeklarasikan variabel.
//     let memiliki block scope, artinya hanya bisa diakses dalam {} tempat dia dibuat.
//     Bisa di-hoist, tetapi tidak bisa digunakan sebelum dideklarasikan (akan error).
//     Tidak bisa di-deklarasikan ulang (re-declare) dalam scope yang sama, tetapi nilainya bisa diubah (re-assign).
//     Lebih fleksibel dan aman dibanding var, jadi lebih sering digunakan.

// const adalah variabel yang nilainya tetap dan tidak bisa diubah.
//     const juga memiliki block scope seperti let.
//     Tidak bisa di-deklarasikan ulang (re-declare) dan tidak bisa diubah nilainya (re-assign) setelah dideklarasikan.
//     Namun, jika const adalah object atau array, isi dalamnya masih bisa diubah, tetapi bukan referensinya.
//     Cocok digunakan untuk nilai yang tidak boleh berubah sepanjang kode berjalan.

// Kesimpulan Singkat:

// Gunakan var jika butuh kompatibilitas dengan kode lama, tetapi sebaiknya dihindari.
// Gunakan let jika variabel bisa berubah.
// Gunakan const jika variabel tidak boleh berubah setelah dideklarasikan.

// 2 tipe data
// 1. string
let greeting = "hello world"
// console.log(greeting)
// number
let age = 20;
let desimal = 3.14;
// console.log(desimal)
// boolean
let isAdmin = true;
// console.log(isAdmin)
// array
let hobi = ["makan", "minum", "tidur"];
// console.log(hobi)
// object
let user = {
    name: "john",
    age: 20,
    address: {
        street: "jalan 1",
        city: "jakarta"
        }
        }
        // console.log(user)
// 3
let x = 10;
x += 5;
// console.log(x) // 15
// 4
let mobil = {
    merek: "Toyota",
    model: "Camry",
    tahun: 2020
}
console.log(mobil)
// 5
// == membandingkan nilai sedangkan === membandingkan nilai dan tipe data
// 6
let makan = true;
let tidur = false;
console.log(makan && tidur) // false
console.log(makan || tidur) // true
console.log(!makan) // false