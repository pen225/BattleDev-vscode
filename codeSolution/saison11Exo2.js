function LocalPrintArray(chaine) {
    console.error(chaine);
  }
  
  // -- Développez votre code dans la fonction ContestResponse ci-après
  function ContestResponse(chaine) {
    // Implémentez votre code ci-dessous
    let prixPersonnes = Number(input[0]);
    let tablesServies = Number(input[1]);
    let personneParTable = input.slice(2);
    let sommeVente = 0;
  
  for (let i = 0; i < personneParTable.length; i++) {
  
    let nombrePersonne = Number(personneParTable[i]);
    let vente = nombrePersonne * prixPersonnes;
    
    if (nombrePersonne >= 10) {
      vente =  vente * (0.7);
    }else if (nombrePersonne >= 6) {
      vente =  vente * (0.8);
    }else if (nombrePersonne >= 4) {
      vente = vente * (0.9);
    }
    sommeVente += vente;
  }
  console.log(Math.ceil(sommeVente));
  }