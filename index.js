//contoh program If else//
var angka = 10;

if (angka > 0) {
  console.log("Angka positif");
} else {
  console.log("Angka negatif atau nol");
}

//Contoh program Nested if//
var x = 10;
var y = 5;

if (x > y) {
  if (x % 2 === 0) {
    console.log("x adalah angka positif genap");
  } else {
    console.log("x adalah angka positif ganjil");
  }
} else {
  console.log("x tidak lebih besar dari y");
}

//Contoh Program Switch case
var hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa");
    break;
  default:
    console.log("Hari ini adalah hari lain");
}

//Contoh Program For
for (var i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

//Contoh Programm while
var angka = 1;

while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}

//Contoh program do while
var angka = 1;

do {
  console.log("Angka: " + angka);
  angka++;
} while (angka <= 5);

//contoh function
function tambah(a, b) {
  return a + b;
}

var hasil = tambah(5, 3);
console.log("Hasil penambahan: " + hasil);
