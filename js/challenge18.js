/*
Ši „Kata“ skirta kaip mažas iššūkis mano mokiniams

„All Star Code“ iššūkis Nr. 18

Sukurkite funkciją, kuri priima 2 eilutės argumentus ir pateikia sveikų įvykių skaičiaus skaičių. Antrasis argumentas randamas pirmajame.

Jei nepavyksta rasti įvykių, reikia grąžinti skaičių 0.

Pavyzdys (įėjimai -> išvestis)

„Hello“, „o“ => 1
„Hello“, „l“ => 2
"", 'z' => 0
Pastabos:

Pirmasis argumentas gali būti tuščia eilutė
Antrasis eilutės argumentas visada bus 1 ilgio*/


function strCount(array,b) {
    let total = 0;
    const c = array.length;
    for (let i = 0; i < c ; i = i + 1 ) {
        if (array[i] === b) {
            total = total + 1;
            
        } 
        
    }
  return  total;  
}



console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);





