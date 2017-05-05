console.log("Merhaba NodeJS!");

//file.js ten fonksiyon çağırdık
// var file=require("./file.js");
// file.ReadFile("text.txt");


//3. parti kullandık
var islem=require("./math.js");
var sonuc=islem.PiIleCarp(9);
console.log(sonuc);
