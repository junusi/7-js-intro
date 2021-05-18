function abbrevName(name){
  
    let sum = '   ';
  const a1 = name.length;
    
   
    for(let i =0;i < a1;i = i + 1){
      if(name[i] === ' '){
        sum =  name[0] + '.' + name [i + 1];
       }
      }
  
    return sum ;
}
  console.log(abbrevName("Sam Harris"), "S.H");
  console.log(abbrevName("Patrick Feenan"), "P.F");
  console.log(abbrevName("Evan Cole"), "E.C");
    console.log(abbrevName("P Favuzzi"), "P.F");
   console.log(abbrevName("David Mendieta"), "D.M");









