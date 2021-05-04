/*
IF-salygos sakinis

uzklausos klausimas visada atsako "TAIP ar NE"?

reiksmes: true;
          false;

SABLONAI:

if ( ) {}
if ( ) {} else {}
if ( ) {} else if () {}
if ( ) {} else if () {} else ....


PALYGINIMO OPERATORIAI:
visi: > , < , == , != (ne lygu), <= (maziau arba lygu), >= (daugiau arba lygu), === , !==
palyginimas  ( == ) tikrina tik ju reiksme, palyginimas ( === ) tikrina ir reiksme ir tipus (grezta lygibe) pradziuoi tikrina tipa o po to reiksme.
nenaudotini : == , != 
naudotini : < , > , >= , <= , ===  , !-- ( grezta nelygibe)

*/

const a = 4;
const b = 8;

if (a < b) {
 console.log('A yra maziau uz B');
} else {
 console.log('A nera maziau uz B');
}
if (4 == 4) {
    console.log('abu yra lygus');
}   else {
    console.log('nera lygus');
}
if (5 != 8) {
    console.log('penki nelygu astuoniem');
}  else {
    console.log('vis gi yra lygu');
}
if (11 >= 8) {
    console.log('daugiau arba lygu 11 >= 8');
} 


const akys = 'zalios';
if (akys ==='melynos') {

    console.log('Akys yra melynos');

} else if (akys === 'zalios') {

    console.log('Akys yra zalios');
} else { 
    console.log('Neatpazynta akiu spalva');
}

 




