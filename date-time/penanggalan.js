const dt = new Date();

let tahun = dt.getFullYear();
let bulan = dt.getMonth()+1;
let tanggal = dt.getDate();
let har = dt.getDay();
let jam = dt.getHours();
let menit = dt.getMinutes();
let detik = dt.getSeconds();

let waktu = ("0" + jam).slice(-2) + ":" + ("0" + menit).slice(-2) + ":" + ("0" + detik).slice(-2);

var start = new Date(tahun, 0, 0);
var diff = (dt-start)+((start.getTimezoneOffset()-dt.getTimezoneOffset())*60*1000);
var oneDay = 1000*60*60*24;
var harke = Math.floor(diff/oneDay);

if (tahun % 400 == 0){
  leap = 366;
}
else if (tahun % 100 == 0){
  leap = 365;
}
else if (tahun % 4 == 0){
  leap = 366;
}
else {
  leap = 365;
}

var persen = 100/leap*(harke-1+(jam/24)+(menit/1440)+(detik/86400));
var harmun = 1+leap-harke;
var permun = 100-persen;

var num1 = persen;
var num2 = permun;


const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let bul = month[bulan-1];

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let hari = weekday[har];

if (hari == "Sunday"){
  har = 7;
}


console.log("Tahun                    : "+tahun);
console.log("Bulan                    : "+bulan+" ("+bul+")");
console.log("Tanggal                  : "+tanggal);
console.log("Hari                     : "+har+" ("+hari+")");
console.log("Hari ke (dalam Setahun)  : "+harke);
console.log("Sisa Hari (Tahun depan)  : "+harmun);
console.log("Persentase dalam Setahun : "+num1.toFixed(6)+"%");
console.log("Persentase Hitung Mundur : "+num2.toFixed(6)+"%");
console.log("Jam                      : "+jam);
console.log("Menit                    : "+menit);
console.log("Detik                    : "+detik);

console.log("\n"+hari+", "+tanggal+" "+bul+" "+tahun);
console.log(waktu);
console.log("Day-"+harke+" ("+num1.toFixed(4)+"%)");