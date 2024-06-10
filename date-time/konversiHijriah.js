function toHijriah(tanggal) {
    const cbulan = [
        "Muharram", "Shafar", "Rabiul Awal", "Rabiul Akhir", "Jumadil Awal", "Jumadil Akhir",
        "Rajab", "Syaban", "Ramadhan", "Syawal", "Dzulkaidah", "Dzulhijjah"
    ];

    const gbulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September",
        "Oktober", "November", "Desember"
    ];

    const date = parseInt(tanggal.substr(8, 2));
    const month = parseInt(tanggal.substr(5, 2));
    const year = parseInt(tanggal.substr(0, 4));

    let jd;
    if ((year > 1582) || ((year === 1582) && (month > 10)) || ((year === 1582) && (month === 10) && (date > 14))) {
        jd = parseInt((1461 * (year + 4800 + parseInt((month - 14) / 12))) / 4) +
            parseInt((367 * (month - 2 - 12 * (parseInt((month - 14) / 12)))) / 12) -
            parseInt((3 * (parseInt((year + 4900 + parseInt((month - 14) / 12)) / 100))) / 4) +
            date - 32075;
    } else {
        jd = 367 * year - parseInt((7 * (year + 5001 + parseInt((month - 9) / 7))) / 4) +
            parseInt((275 * month) / 9) + date + 1729777;
    }

    const wd = jd % 7;
    let l = jd - 1948440 + 10632;
    const n = parseInt((l - 1) / 10631);
    l = l - 10631 * n + 354;
    const z = (parseInt((10985 - l) / 5316)) * (parseInt((50 * l) / 17719)) + (parseInt(l / 5670)) * (parseInt((43 * l) / 15238));
    l = l - (parseInt((30 - z) / 15)) * (parseInt((17719 * z) / 50)) - (parseInt(z / 16)) * (parseInt((15238 * z) / 43)) + 29;
    const m = parseInt((24 * l) / 709);
    const d = l - parseInt((709 * m) / 24);
    const y = 30 * n + z - 30;
    const g = m - 1;

    const hijriah = `${d} ${cbulan[g]} ${y} H`;

    return hijriah;
}

// Get current Gregorian date
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

// Convert Gregorian date to Hijri date
const hijriDate = toHijriah(formattedDate);

// Display results
console.log("KONVERSI TANGGAL MASEHI-HIJRIAH");
console.log(`Tanggal Masehi/Gregorian   : ${formattedDate}`);
console.log(`Tanggal Hijriah : ${hijriDate}`);