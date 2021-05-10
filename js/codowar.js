/*Patikrinkite, ar eilutėje yra vienodas skaičius „x“ ir „o“.
  Metodas turi pateikti loginę reikšmę ir neskirti didžiųjų ir mažųjų raidžių.
   Stygoje gali būti bet kokia simbolis. 
---------------------------------------------------------------------------------
Check to see if a string has the same amount of 'x's and 'o's.
 The method must return a boolean and be case insensitive.
  The string can contain any char.

*/
function XO(str)
{
if    ( a % 2 === 0 )
{ console.log('Taip tekstas simetrinis') ;
    for (let i = 0; i < str.length / 2  ;  i = i + 1)
{
    str [i] === str [(str.length / 2) - 1] ? console.log(
    'Pirmos teksto dales  raide:',str [i]) : console.log ('Pirma teksto dalis,  raide:',str[i],'Pirmos teksto dales raides skirtingos');}
  for (let i = str.length /2 ;i < str.length ;i = i + 1)
{  str [i] === str [str.length -1] ? console.log(
    'Antros teksto dales  raide:',str [i]) : console.log ('Antra teksto dalis, raide:',str[i],'Antros teksto dales raides skirtingos');}

} else
{console.log('ne tekstas ne simetrinis');  
}
    return str.length; 
}

let r = '';
//  TEKSTAS :
const str = 'kjh;'

const a = str.length;
console.log(XO(str));
console.log(`Tecsto turinis :  "${str}"`);
console.log(`Teksto ilgis   :   ${str.length} zenklai`);




console.log(XO("ooxx"), '=>',true);
console.log(XO("ooxx"),'=>',true);
console.log(XO("xooxx"),'=>', false);
console.log(XO("ooxXm") ,'=>',true);
console.log(XO("zpzpzpp"),'=>', true) ;
console.log(XO("zzoo") ,'=>',false);
