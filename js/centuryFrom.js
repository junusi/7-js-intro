/*Pirmasis amžius tęsiasi nuo 1-ojo iki 100-ųjų metų imtinai, Antrasis - nuo 101-ojo iki 200-ųjų metų imtinai.

Užduotis:
Duodami metus, grąžinkite šimtmetį, kuriame jis yra.

Įvesties, išvesties pavyzdžiai:
1705 -> 18
1900 -> 19
1601 -> 17
2000 -> 20
Tikiuosi, kad jums patiks. Laukiame geriausios praktikos kodų

*/
function century(a,b) {  
    if ((a % 100) === 0) {b = a / 100;
      
  } else {b = (a - (a % 100))  / 100 + 1
      
  }
  
     return b  ;
 }

 console.log(century(1705), 18, 'Testing for year 1705');
 console.log(century(1900), 19, 'Testing for year 1900');
 console.log(century(1601), 17, 'Testing for year 1601');
 console.log(century(2000), 20, 'Testing for year 2000');
 console.log(century(89), 1, 'Testing for year 89');

















