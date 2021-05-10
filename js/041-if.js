const a =['a','ab','abc','gdg'] ;
const b = ['df','ghj','r1','hgghf'] ;

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
for (let i = 0; i < a.length; i= i + 1) {
    if (a[0] > a[i]) {console.log(a[0])
    
    }
    
} 