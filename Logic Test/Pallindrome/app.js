let kata1 = "Radar";
let kata2 = "Malam";
let kalimat1 = "Kasur ini Rusak";
let kalimat2 = "Ibu Ratna antar ubi";
let kata3 = "Malas";
let kalimat3 = "Makan nasi goreng";
let kalimat4 = "balonku ada lima";

function cekPallindrome(Input){
    let strArray = Input.toLowerCase().split('');// mengubah input menjadi lower case
    let newArray = strArray.join(''); // membuat array baru
    let reverseArray = [...newArray].reverse().join(''); // melakukan reverse array dengan join

    console.log(newArray);
    console.log(reverseArray);

    if (newArray === reverseArray) { // cek apakah aray baru sama dengan array reverse
        return true;
    } else {
        return false;
    }

};

console.log(cekPallindrome(kata1));
console.log(cekPallindrome(kata2));
console.log(cekPallindrome(kalimat1));
console.log(cekPallindrome(kalimat2));
console.log(cekPallindrome(kata3));
console.log(cekPallindrome(kalimat3));
console.log(cekPallindrome(kalimat4));

