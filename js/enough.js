/*Istorija:
Bobas dirba autobuso vairuotoju. Tačiau jis tapo itin populiarus tarp miesto gyventojų. Kai tiek daug keleivių nori įlipti į jo autobusą, kartais tenka susidurti su problema, kad autobuse nėra pakankamai vietos! Jis nori, kad parašytumėte paprastą programą, nurodydami, ar jis galės tilpti visiems keleiviams.

Užduoties apžvalga:
Turite parašyti funkciją, kuri priima tris parametrus:

viršutinė riba yra žmonių, kuriuos talpina autobusas, skaičius be vairuotojo.
yra autobuse esančių žmonių skaičius, išskyrus vairuotoją.
laukti yra žmonių, laukiančių įlipti į autobusą, išskyrus vairuotoją, skaičius.
Jei yra pakankamai vietos, grąžinkite 0, o jei ne, nurodykite keleivių, kurių jis negali priimti, skaičių.

Naudojimo pavyzdžiai:
dangtelis = 10, ant = 5, palaukite = 5 -> 0 # Jis gali tilpti visiems 5 keleiviams
dangtelis = 100, ant = 60, palaukite = 50 -> 10 # Jam netelpa 10 iš 50 laukiančių*/
function enough(cap, on, wait) {
  let d = 0;
  if (wait <= (cap - on)) {d = 0;
    
  } else {d = wait - (cap - on);
    
  }
    return d;
  }
  console.log(enough(10, 5, 5), 0);
  console.log(enough(100, 60, 50), 10);
 console.log(enough(20, 5, 5), 0);


