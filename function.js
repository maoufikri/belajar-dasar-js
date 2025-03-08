// 1 function declaration itu bisa dipanggil sebelum dideklarasikan sedangkan function expression harus dideklarasikan terlebih dahulu baru bisa dipanggil lalu function expression berada di dalam variabel 

// 2
const bagi = function (a, b) {
    return a / b;
}
console.log(bagi(10, 2));
// 3
const kuadrat = (a) => a**2;
console.log(kuadrat(25));
    
// 4
function deret(n) {
    if (n === 1) {
        return 1;
    }
    return n + deret(n - 1);
}
console.log(deret(5));

// 5
arr = [1, 2, 3, 4, 5];
function kaliDua(arr) {
    let result = [];
    for (let angka of arr) {
        result.push(angka * 2);
    }
    return result;
}
console.log(kaliDua(arr));