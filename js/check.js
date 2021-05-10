/* Jums bus suteiktas masyvas a ir reikšmė x. Viskas, ką jums reikia padaryti, tai patikrinti, ar pateiktame masyve yra vertė.

Masyve gali būti skaičiai arba eilutės. X gali būti bet kuri.

Grąžinkite true, jei masyve yra reikšmė, false, jei ne
----------------------------------------------------------------

https://www.codewars.com/kata/57cc975ed542d3148f00015b/
*/

function check(list, x) {
  for (let i = 0; i < list.length; i = i + 1) {
      const item = list[i];
      if (item === x) {
          return true;
      }
  }

  return false;
}


console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), '->', true);
console.log(check([66, 101], 66), '->', true);
console.log(check(['t', 'e', 's', 't'], 'e'), '->', true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), '->', false);






