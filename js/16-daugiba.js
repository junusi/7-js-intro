/*
ANALOGISKI VARIANTAI :

 if ( isNaN(a))

 if ( '' + b === 'NaN') 


*/






function daugiba(a,b) {
    // validacija
    if ( typeof a !== 'number') {
        return 'EROR :pirma reiksme nera skaiciaus tipo';
    }
if ( typeof b !== 'number') {
    return 'EROR : antra reiksme nera skaiciaus tipo';
}
if ( isNaN(a)) {
    return 'EROR : pirma reiksme nera tikras skaiciaus ';
}
if ( '' + b === 'NaN') {
    return 'EROR : antra reiksme nera tikras skaiciaus ';
}
if ( isFinite(a) === false) {
    return 'EROR : pirma reiksme nera tikras skaiciaus ';
}
if ( isFinite(b) === false) {
    return 'EROR : antra reiksme nera tikras skaiciaus ';
}


    const sandaugosReiksme = a * b ;
    return  sandaugosReiksme ;
} 
const skaicius1 = 7;
const skaicius2 = 10;
const skaicius3 = 5;
console.log(daugiba(skaicius1,skaicius2));
console.log(daugiba(skaicius1,skaicius3));
console.log(daugiba(skaicius3,skaicius2));

























