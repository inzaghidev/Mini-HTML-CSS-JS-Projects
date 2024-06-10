function funcdt() {
  const dt = new Date();

  let year = dt.getFullYear();
  let month = dt.getMonth() + 1;
  let date = dt.getDate();
  let day = dt.getDay();
  let hour = dt.getHours();
  let minute = dt.getMinutes();
  let second = dt.getSeconds();

  let time =
    ("0" + hour).slice(-2) +
    ":" +
    ("0" + minute).slice(-2) +
    ":" +
    ("0" + second).slice(-2);

  var start = new Date(year, 0, 0);
  var diff =
    dt -
    start +
    (start.getTimezoneOffset() - dt.getTimezoneOffset()) * 60 * 1000;
  var oneDay = 1000 * 60 * 60 * 24;
  var dayYear = Math.floor(diff / oneDay);

  if (year % 400 == 0) {
    leap = 366;
  } else if (year % 100 == 0) {
    leap = 365;
  } else if (year % 4 == 0) {
    leap = 366;
  } else {
    leap = 365;
  }

  var percent =
    (100 / leap) * (dayYear - 1 + hour / 24 + minute / 1440 + second / 86400);
  var dayCtdwn = 1 + leap - dayYear;
  var prcntCtdwn = 100 - percent;

  var num1 = percent;
  var num2 = prcntCtdwn;

  var percent =
    (100 / leap) * (dayYear - 1 + hour / 24 + minute / 1440 + second / 86400);
  var dayCtdwn = 1 + leap - dayYear;
  var prcntCtdwn = 100 - percent;

  var num1 = percent;
  var num2 = prcntCtdwn;

  const monthsID = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let monID = monthsID[month - 1];

  const weekdayID = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  let wkDayID = weekdayID[day];

  const monthsMS = [
    "Januari",
    "Februari",
    "Mac",
    "April",
    "Mai",
    "Jun",
    "Julai",
    "Ogos",
    "September",
    "Oktober",
    "November",
    "Disember",
  ];
  let monMS = monthsMS[month - 1];

  const weekdayMS = [
    "Ahad",
    "Isnin",
    "Selasa",
    "Rabu",
    "Khamis",
    "Jumaat",
    "Sabtu",
  ];
  let wkDayMS = weekdayMS[day];

  const monthsMA = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maiy",
    "Juniy",
    "Juliy",
    "Agus",
    "September",
    "Oktober",
    "November",
    "Dizember",
  ];
  let monMA = monthsMA[month - 1];

  const weekdayMA = [
    "Ahad",
    "Sanin",
    "Salasa",
    "Rabu",
    "Kamis",
    "Jumah",
    "Sabat",
  ];
  let wkDayMA = weekdayMA[day];

  const monthsEN = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monEN = monthsEN[month - 1];

  const weekdayEN = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let wkDayEN = weekdayEN[day];

  const monthsNL = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "NLzember",
  ];
  let monNL = monthsNL[month - 1];

  const weekdayNL = [
    "Zondag",
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag",
  ];
  let wkDayNL = weekdayNL[day];

  const monthsDE = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  let monDE = monthsDE[month - 1];

  const weekdayDE = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
  ];
  let wkDayDE = weekdayDE[day];

  const monthsES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let monES = monthsES[month - 1];

  const weekdayES = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  let wkDayES = weekdayES[day];

  const monthsFR = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  let monFR = monthsFR[month - 1];

  const weekdayFR = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  let wkDayFR = weekdayFR[day];

  const monthsPT = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Septembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  let monPT = monthsPT[month - 1];

  const weekdayPT = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  let wkDayPT = weekdayPT[day];

  const monthsIT = [
    "Gennairo",
    "Febbraio",
    "Marzo",
    "Apprile",
    "Maggio",
    "Giugno",
    "Lugio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novemre",
    "Dicembre",
  ];
  let monIT = monthsIT[month - 1];

  const weekdayIT = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  let wkDayIT = weekdayIT[day];

  const monthsPL = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];
  let monPL = monthsPL[month - 1];

  const weekdayPL = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];
  let wkDayPL = weekdayPL[day];

  const monthsRU = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  let monRU = monthsRU[month - 1];

  const weekdayRU = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  let wkDayRU = weekdayRU[day];

  const monthsTR = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  let monTR = monthsTR[month - 1];

  const weekdayTR = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let wkDayTR = weekdayTR[day];

  const monthsVN = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];
  let monVN = monthsVN[month - 1];

  const weekdayVN = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ Tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
  ];
  let wkDayVN = weekdayVN[day];

  const monthsZH = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ];
  let monZH = monthsZH[month - 1];

  const weekdayZH = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  let wkDayZH = weekdayZH[day];

  const monthsJP = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ];
  let monJP = monthsJP[month - 1];

  const weekdayJP = [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
  ];
  let wkDayJP = weekdayJP[day];

  const monthsKO = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  let monKO = monthsKO[month - 1];

  const weekdayKO = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  let wkDayKO = weekdayKO[day];

  const monthsAR = [
    "يناير",
    "فبراير",
    "مرس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر ",
  ];
  let monAR = monthsAR[month - 1];

  const weekdayAR = [
    "الأحد‎‎",
    "الاثنين",
    "الثّلاثاء",
    "الْأربعاء",
    "الخميس‎",
    "الجمعة",
    "السّبت",
  ];
  let wkDayAR = weekdayAR[day];

  const monthsTH = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  let monTH = monthsTH[month - 1];

  const weekdayTH = [
    "วันอาทิตย์",
    "วันจันทร์",
    "วันอังคาร",
    "วันพุธ",
    "วันพฤหัสบดี",
    "วันศุกร์",
    "วันเสาร์",
  ];
  let wkDayTH = weekdayTH[day];

  const monthsHI = [
    "जनवरी",
    "फरवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर",
  ];
  let monHI = monthsHI[month - 1];

  const weekdayHI = [
    "रविवार",
    "सोमवार",
    "मंगलवार",
    "बुधवार",
    "गुरुवार",
    "शुक्रवार",
    "शनिवार",
  ];
  let wkDayHI = weekdayHI[day];

  document.getElementById("datetime-daydate-id").innerHTML =
    wkDayID + ", " + date + " " + monID + " " + year;
  document.getElementById("datetime-time-id").innerHTML =
    time + " (" + hour + " Jam " + minute + " Menit " + second + " Detik)";
  document.getElementById("datetime-daynprtg-id").innerHTML =
    "Hari ke-" + dayYear + " di Tahun " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-id").innerHTML =
    dayCtdwn +
    " Hari lagi menuju Tahun " +
    (year + 1) +
    " (" +
    num2.toFixed(4) +
    "%)";

  document.getElementById("datetime-daydate-ms").innerHTML =
    wkDayMS + ", " + date + " " + monMS + " " + year;
  document.getElementById("datetime-time-ms").innerHTML =
    time + " (" + hour + " Jam " + minute + " Minit " + second + " Saat)";
  document.getElementById("datetime-daynprtg-ms").innerHTML =
    "Hari-" + dayYear + " pada Tahun " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-ms").innerHTML =
    dayCtdwn +
    " Hari hingga Tahun " +
    (year + 1) +
    " (" +
    num2.toFixed(4) +
    "%)";

  document.getElementById("datetime-daydate-ma").innerHTML =
    wkDayMA + ", " + date + " " + monMA + " " + year;
  document.getElementById("datetime-time-ma").innerHTML =
    time + " (" + hour + " Jam " + minute + " Manit " + second + " Sekon)";
  document.getElementById("datetime-daynprtg-ma").innerHTML =
    "Hari ke-" + dayYear + " di " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-ma").innerHTML =
    dayCtdwn +
    " Hari manuju Tahun " +
    (year + 1) +
    " (" +
    num2.toFixed(4) +
    "%)";

  document.getElementById("datetime-daydate-en").innerHTML =
    wkDayEN + ", " + date + " " + monEN + " " + year;
  document.getElementById("datetime-time-en").innerHTML =
    time + " (" + hour + " Hour " + minute + " Minute " + second + " Second)";
  document.getElementById("datetime-daynprtg-en").innerHTML =
    "Day-" + dayYear + " in " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-en").innerHTML =
    dayCtdwn + " Days to a Year " + (year + 1) + " (" + num2.toFixed(4) + "%)";

  document.getElementById("datetime-daydate-nl").innerHTML =
    wkDayNL + ", " + date + " " + monNL + " " + year;
  document.getElementById("datetime-time-nl").innerHTML =
    time + " (" + hour + " Uur " + minute + " Minuten " + second + " Seconden)";
  document.getElementById("datetime-daynprtg-nl").innerHTML =
    "Dag-" + dayYear + " in " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-nl").innerHTML =
    dayCtdwn +
    " Dagen tot een Jaar " +
    (year + 1) +
    " (" +
    num2.toFixed(4) +
    "%)";

  document.getElementById("datetime-daydate-de").innerHTML =
    wkDayDE + ", " + date + ". " + monDE + " " + year;
  document.getElementById("datetime-time-de").innerHTML =
    time +
    " (" +
    hour +
    " Stunde " +
    minute +
    " Minute " +
    second +
    " Sekunde)";
  document.getElementById("datetime-daynprtg-de").innerHTML =
    "Tag-" + dayYear + " im Jahr " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-de").innerHTML =
    dayCtdwn +
    " Tage bis ein Jahr " +
    (year + 1) +
    " (" +
    num2.toFixed(4) +
    "%)";

  document.getElementById("datetime-daydate-es").innerHTML =
    wkDayES + ", " + date + " de " + monES + " de " + year;
  document.getElementById("datetime-time-es").innerHTML =
    time +
    " (" +
    hour +
    " Horas " +
    minute +
    " Minutos " +
    second +
    " Segundos)";
  document.getElementById("datetime-daynprtg-es").innerHTML =
    "Día-" + dayYear + " en " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-es").innerHTML =
    dayCtdwn + " Días a un Año " + (year + 1) + " (" + num2.toFixed(4) + "%)";

  document.getElementById("datetime-daydate-fr").innerHTML =
    wkDayFR + ", " + date + " " + monFR + " " + year;
  document.getElementById("datetime-time-fr").innerHTML =
    time +
    " (" +
    hour +
    " Heures " +
    minute +
    " Minutes " +
    second +
    " Secondes)";
  document.getElementById("datetime-daynprtg-fr").innerHTML =
    "Jour-" + dayYear + " en " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-fr").innerHTML =
    dayCtdwn + " Jours à un An " + (year + 1) + " (" + num2.toFixed(4) + "%)";

  document.getElementById("datetime-daydate-pt").innerHTML =
    wkDayPT + ", " + date + " de " + monPT + " de " + year;
  document.getElementById("datetime-time-pt").innerHTML =
    time + " (" + hour + " Hora " + minute + " Minuto " + second + " Segundo)";
  document.getElementById("datetime-daynprtg-pt").innerHTML =
    "Dia-" + dayYear + " em " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-pt").innerHTML =
    dayCtdwn +
    " Dias para um Ano de " +
    (year + 1) +
    " (" +
    num2.toFixed(4) +
    "%)";

  document.getElementById("datetime-daydate-it").innerHTML =
    wkDayIT + ", " + date + " " + monIT + " " + year;
  document.getElementById("datetime-time-it").innerHTML =
    time + " (" + hour + " Ore " + minute + " Minuti " + second + " Secondi)";
  document.getElementById("datetime-daynprtg-it").innerHTML =
    "Giorno-" + dayYear + " nel " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-it").innerHTML =
    dayCtdwn +
    " Giorni a un Anno " +
    (year + 1) +
    " (" +
    num2.toFixed(4) +
    "%)";

  document.getElementById("datetime-daydate-pl").innerHTML =
    wkDayPL + ", " + date + " " + monPL + " " + year;
  document.getElementById("datetime-time-pl").innerHTML =
    time + " (" + hour + " Godzin " + minute + " Minut " + second + " Sekundy)";
  document.getElementById("datetime-daynprtg-pl").innerHTML =
    "Dzień-" + dayYear + " w " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-pl").innerHTML =
    dayCtdwn + " Dni do Roku " + (year + 1) + " (" + num2.toFixed(4) + "%)";

  document.getElementById("datetime-daydate-ru").innerHTML =
    wkDayRU + ", " + date + " " + monRU + " " + year;
  document.getElementById("datetime-time-ru").innerHTML =
    time + " (" + hour + " Часов " + minute + " Минут " + second + " Секунды)";
  document.getElementById("datetime-daynprtg-ru").innerHTML =
    "День-" + dayYear + " в " + year + " Году (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-ru").innerHTML =
    dayCtdwn + " Дней до " + (year + 1) + " Года (" + num2.toFixed(4) + "%)";

  document.getElementById("datetime-daydate-tr").innerHTML =
    wkDayTR + ", " + date + " " + monTR + " " + year;
  document.getElementById("datetime-time-tr").innerHTML =
    time + " (" + hour + " Saat " + minute + " Dakika " + second + " Saniye)";
  document.getElementById("datetime-daynprtg-tr").innerHTML =
    year + "'de " + dayYear + ". Gün (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-tr").innerHTML =
    year + 1 + " yılına " + dayCtdwn + " Gün (" + num2.toFixed(4) + "%)";

  document.getElementById("datetime-daydate-vn").innerHTML =
    wkDayVN + ", Ngày " + date + " " + monVN + " Năm " + year;
  document.getElementById("datetime-time-vn").innerHTML =
    time + " (" + hour + " Giờ " + minute + " Phút " + second + " Giây)";
  document.getElementById("datetime-daynprtg-vn").innerHTML =
    "Ngày-" + dayYear + " Năm " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-vn").innerHTML =
    dayCtdwn + " Ngày đến Năm " + (year + 1) + " (" + num2.toFixed(4) + "%)";

  document.getElementById("datetime-daydate-zh").innerHTML =
    wkDayZH + ", " + year + "年 " + monZH + " " + date + "日";
  document.getElementById("datetime-time-zh").innerHTML =
    time + " (" + hour + "小时 " + minute + "分 " + second + "秒)";
  document.getElementById("datetime-daynprtg-zh").innerHTML =
    year + "年第" + dayYear + "天 (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-zh").innerHTML =
    dayCtdwn + "天到一年" + (year + 1) + " (" + num2.toFixed(4) + "%)";

  document.getElementById("datetime-daydate-jp").innerHTML =
    wkDayJP + ", " + year + "年 " + monJP + " " + date + "日 (火)";
  document.getElementById("datetime-time-jp").innerHTML =
    time + " (" + hour + "時間 " + minute + "分 " + second + "秒)";
  document.getElementById("datetime-daynprtg-jp").innerHTML =
    year + "年の" + dayYear + "日目 (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-jp").innerHTML =
    year + 1 + "年までの" + dayCtdwn + "日 (" + num2.toFixed(4) + "%)";

  document.getElementById("datetime-daydate-ko").innerHTML =
    wkDayKO + ", " + year + "년 " + monKO + " " + date + "일 (토)";
  document.getElementById("datetime-time-ko").innerHTML =
    time + " (" + hour + "시 " + minute + "분 " + second + "초)";
  document.getElementById("datetime-daynprtg-ko").innerHTML =
    year + "년" + dayYear + "일차 (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-ko").innerHTML =
    year + 1 + "년까지" + dayCtdwn + "일 (" + num2.toFixed(4) + "%)";

  document.getElementById("datetime-daydate-ar").innerHTML =
    year + " " + monAR + " " + date + ", " + wkDayAR;
  document.getElementById("datetime-time-ar").innerHTML =
    " (ثانية " + second + " دقيقة " + minute + " ساعة " + hour + ") " + time;
  document.getElementById("datetime-daynprtg-ar").innerHTML =
    "(٪" + num1.toFixed(4) + ") " + year + " في " + dayYear + " اليوم";
  document.getElementById("datetime-daynprtg-ctdwn-ar").innerHTML =
    "(٪" + num2.toFixed(4) + ") " + (year + 1) + " يومًا حتى عام " + dayCtdwn;

  document.getElementById("datetime-daydate-th").innerHTML =
    wkDayTH + " " + date + " " + monTH + " " + year;
  document.getElementById("datetime-time-th").innerHTML =
    time +
    " (" +
    hour +
    " ชั่วโมง " +
    minute +
    " ชั่วโมง " +
    second +
    " วินาที)";
  document.getElementById("datetime-daynprtg-th").innerHTML =
    "วันที่ " + dayYear + " ในปี " + year + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-th").innerHTML =
    dayCtdwn + " วันถึงหนึ่งปี " + (year + 1) + " (" + num2.toFixed(4) + "%)";

  document.getElementById("datetime-daydate-hi").innerHTML =
    wkDayHI + ", " + date + " " + monHI + " " + year;
  document.getElementById("datetime-time-hi").innerHTML =
    time + " (" + hour + " घंटा " + minute + " मिनट " + second + " सेकेंड)";
  document.getElementById("datetime-daynprtg-hi").innerHTML =
    year + " में दिन-" + dayYear + " (" + num1.toFixed(4) + "%)";
  document.getElementById("datetime-daynprtg-ctdwn-hi").innerHTML =
    dayCtdwn + " दिन से एक वर्ष " + (year + 1) + " (" + num2.toFixed(4) + "%)";
}

setInterval(function () {
  funcdt();
}, 1000);
