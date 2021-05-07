/*

FUNKCIJA : SUMA
funkcija yra pasikartojanti logika kuria galima igivendinti su skirtingu informacijos rinkiniu.
*/



function sum(a,b)  {
    return a + b ;
}

const s1 = sum(4,5) ;
console.log(s1) ;

function kurisDidesnis(a,b) {
    return a < b ? 'pirmas' : 'antras' ;
}

console.log(kurisDidesnis (7,4));

function labas(vardas) {
    return `Labas,${vardas}`
    
}

console.log(labas('IVANAI'));


