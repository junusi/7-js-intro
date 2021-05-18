/*Создайте функцию, которая будет возвращать строку, которая объединяет все буквы трех введенных строк в группы.
 Взять первую букву всех входов и сгруппировать их рядом друг с другом. Сделайте это для каждой буквы, см. Пример ниже!

Например. Ввод: «aa», «bb», «cc» => Вывод: «abcabc»

Примечание: вы можете ожидать, что все входы будут одинаковой длины.*/

function tripleTrouble(a,b,c){
    const mark = [];
    const a1 = a.length;
    let sum = '';
for (let i = 0; i < a1; i = i +1) {
    mark[i] = a[i] + b[i] + c[i] ; 
    sum = sum + mark[i];
}

return sum ;
  
   }

  console.log(tripleTrouble("this","test","lock"), "ttlheoiscstk");
  console.log(tripleTrouble("aa","bb","cc"), "abcabc");
  console.log(tripleTrouble("Bm", "aa", "tn"), "Batman");
  console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");














