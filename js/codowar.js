/*7 kyu
Exes and Ohs
87619688% of 12,74836,808 of 107,329joh_pot1 Issue Reported
JavaScript
Node v10.x
VIM
EMACS
Instructions
Output
Check to see if a string has the same amount of 'x's and 'o's.
 The method must return a boolean and be case insensitive.
  The string can contain any char.
Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
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
const str =("Manooo") ;

const a = str.length;
console.log(XO(str));
console.log(`Tecsto turinis :  "${str}"`);
console.log(`Teksto ilgis   :   ${str.length} zenklai`)