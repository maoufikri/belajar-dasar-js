// 1 perbedaan dari if else dengan switch case adalah switch case tidak bisa membandingkan kondisi dengan kompleks(+,-,*,/,%) tetapi if else bisa .

// 2
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// 3
let o = 191234567897895;

if (o % 2 == 0) {
    console.log("genap");
} else {
    console.log("ganjil");
}

// 4
let member = ['fikri', 'baihaqi', 'maou'];
 for (let orang of member) {
     console.log(orang);
 }

 let data = {
    nama: 'fikri',
    umur: 18,
    pekerjaan : 'programmer'
 }

 for (let key in data) { 
     console.log(key + ': ' + data[key]);
 }

//  5
let hari = 'minggu';
switch (hari) {
    case 'senin':
        console.log('hari senin harinya bekerja');
        break;
    case 'selasa':
        console.log('hari selasa sama kaya senin');
        break;
    case 'rabu':
        console.log('hari rabu sama kaya hari senin dan selasa');
        break;
    case 'kamis':
        console.log('hari kamis sama aja cuy gak ada bedanya');
        break;
    case 'jumat':
        console.log('hari jumat sama aja cuy gak ada bedanya');
        break;
    case 'sabtu':
        console.log('hari sabtu yey besok libur');
        break;
    default:
        console.log('yey libur');
}

// 6 perbedaan dari while dan do while adalah jika while dijalankan dia tidak akan eksekusi nilai sebelum kondisinya terpenuhi tetapi do while dia jalankan sekali dulu walaupun kondisi tidak terpenuhi