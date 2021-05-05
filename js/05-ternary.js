/*

TERNARY - sutrumpintas yra  IF -as

jam ira butinos  "true"  ir  "false"  dalys

struktura : klausimas ? tiesa : ar ne tiesa ;

*/

const a = 4;
const b = 7;
a > b ?  console.log('taip') :  console.log('ne');

const amzius = 14;
const cenzas = 18;

const arIleisti = amzius >= cenzas ?  true : false ;
console.log('Ar ileisti:', arIleisti);

const arVyresnis = amzius >= cenzas ? ' viresnis ' : ' neviresnis';
console.log('ar viresnis :' ,arVyresnis);
//--------------------------------------------------
const amzius2 = 114;
const cenzas2 = 18;
let arIleisti2 = null;
if (amzius2 >= cenzas2) {
    arIleisti2 = true;
} else {
    arIleisti2 = false;
}
console.log('Ar ileisti :', arIleisti2);
//---------------------------------------------------

const ats = 0 > 4 ? 5 : 7;

const ats = if (0 < 4) {
                         ? 5
} else {
                         :7
}

console.log(ats);

const ats = 0 < 1 ? 2 < 3 ? 4 : 5 : 6 ;
/*
0 < 1
     ? 2 < 3
           ? 4
           :5
    :6 ;
*/
console.log(ats);
//---------------------------------------------------

console.log(boo);

/*const boo = true 
                 ? false 
                       ? true 
                       : false 
             : true ;

*/
