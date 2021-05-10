/*
Kintamųjų palyginimas.
1. Išvesti sąrašo tipo kintamųjų ilgius
2. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
3. kuris didesnis
4. kuris mažesnis
5. ar jie lygūs
6. ar jie nelygūs
7. kuris didesnis arba lygus
8. kuris mažesnis arba lygus
*/
//1. Išvesti sąrašo tipo kintamųjų ilgius
const a =['a','ab','abc','gdg'] ; //  pirmas sarasas
const b = ['df','ghj','r1','hgghf'] ;// antras sarasas

const a1 = a.length ;
console.log('pirmo saraso didis, a1 =',a1,'vienetai');
const b1 = b.length;
console.log ('antro saraso didis,b1 =',b1,'vienetai');
 console.log( 'PIRMO SARASO KINTAMUJU ILGIAI');

for (let i = 0; i < a.length ; i = i + 1) { 
   
console.log((i + 1),'kintamojo ilgis is saraso a  yra',a[i].length,'zenklu');
    
}console.log( 'ANTRO SARASO KINTAMUJU ILGIAI');

for (let i = 0; i < b.length ; i = i + 1) {
    
    console.log((i + 1),'kintamojo ilgis is saraso b  yra',b[i].length,'zenklu');
}
//2.  Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:  
let c  = a [i].length ;
        
    
    












