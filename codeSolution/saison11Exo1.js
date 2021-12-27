function ContestResponse(chaine) {
    // Implémentez votre code ci-dessous
    let convertNombreDeRestaurant = input[0];
    let restaurant = input.slice(1);
    let tab_temp;
    let n1, n2, n3;
    let moyenne;
    let all_moyenne = [];
    
    for (let i = 0; i < restaurant.length; i++) {
      tab_temp = restaurant[i].split(' ');
      n1 = Number(tab_temp[0]);
      n2 = Number(tab_temp[1]);
      n3 = Number(tab_temp[2]);
      moyenne = (n1 + n2 + n3)/3;
      moyenne = Math.ceil(moyenne);
      all_moyenne.push(moyenne);
      
    }
  
    console.log(Math.max(...all_moyenne));
  }