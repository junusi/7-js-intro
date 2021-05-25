
//---------------------------------------------------------
/*Atlikite funkciją, kuri užima du sveikus skaičius (a, b, kur a <b)
 ir grąžina visų sveikų skaičių masyvą tarp įvesties parametrų, įskaitant juos.

Pavyzdžiui:

a = 1
b = 4
-> [1, 2, 3, 4]*/
function between(a, b) {

  let c = [];
  c[0] = a;
  for(let i = 1;i < (b - a) + 1 ;i = i + 1){
  c[i] = c[i - 1] + 1;
    
  }
  return c;
}
console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);




