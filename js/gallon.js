function differenceInAges(array){
  let c = array[0];
  for(let i = 0;i < array.length;i = i + 1) {
    
    if(c > array[i]){
      true
    }else{c = array[i]}
  }

  let b = array[0];
  
  for(let i = 0;i < array.length;i = i + 1) {
    
    if(b> array[i]){b = array [i];
     
    }else{false}
  }

 let a = c - b;
 return array = [b,c,a];
}


  console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
  console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);





