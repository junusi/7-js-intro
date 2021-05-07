/*
for (a,b,c) {

    logika
}
a: kintamuju/iteratoriu iniciavimas
b: patikros,ar testi cikla
c: ka ir kaip keisti po kekvenos ciklo iteracijos

*/
for (let i = 0; i < 3; i++) {
    console.log('labas',i);
    
}
// ------------------------------------------
const marks = [1,2,5,10]
const count = marks.length
let sum = 0;
for (let i = 0; i <= count - 1; i = i + 1) {
    sum  = sum + marks[i];
    
}
const average = sum / count ;
    
console.log('pazimiu vidurkis:',average);






