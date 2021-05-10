/*Atsižvelgdami į dvi sveiko skaičiaus masyvus a, b,
 kurių abu ilgiai> = 1, sukurkite programą, kuri grąžina tikrąją reikšmę,
jei kiekvieno a elemento kvadratų suma yra griežtai didesnė už kiekvieno b elemento kubelių sumą.*/


function arrayMadness(a,b) {
let kvadratSum =0;
let kubSum =0;
 
    for (let i = 0; i < array.length; index++) 
    {
        console.log(a[i]);
        kvadratuSuma += a[i] * a[i] ;
     }
    for (let i = 0;i < b.lengt;i++) 
    {
        kubSum  +=b[i] * b[i] * b[i];
    
    }

     if (kvadratSum > kubSum)
    {
       return true;
    }else 
    {return false;}

}




    
console.log(a);
console.log(b);
console.log(kvadratu.Sum);

}

console.log(arrayMadness([4,5,6],[1,2,3]), true);













