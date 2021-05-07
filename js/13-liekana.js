/*

LIEKANOS : keli skaiciai dalijasi be liekanos nurodytame skaiciaus intervale imtinai.

*/

const nuo = 0;
const iki = 11;
const daliklis = 3;
let kiekis = 0 ;


for (let i = nuo; i <= iki; i = i + 1) {
    console.log(i,'->',i / daliklis);
    // jeigu be liekanos
    if (i % daliklis === 0) {
    // tai didiname kieki +1 
      kiekis = kiekis + 1 ;  
    }
    
}
const ats = `Skaiciu intervale tarp ${nuo} ir ${iki} ,besidalijanciu be liekanos is ${daliklis} yra ${kiekis} vienetai.`;
console.log(ats);










