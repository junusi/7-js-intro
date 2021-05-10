/*https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

Gaunate skaičių masyvą, grąžinkite visų teigiamų sumų sumą.

Pavyzdys [1, -4,7,12] => 1 + 7 + 12 = 20

Pastaba: jei nėra ko susumuoti, suma pagal numatytuosius nustatymus yra 0.


*/

function positiveSum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i = i + 1) {
      const item = arr[i];
      if (item > 0) {
          total = total + item;
      }
  }

  return total;
}

console.log(positiveSum([1, 2, 3, 4, 5]), '->', 15);
console.log(positiveSum([1, -2, 3, 4, 5]), '->', 13);
console.log(positiveSum([]), '->', 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), '->', 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), '->', 9);












