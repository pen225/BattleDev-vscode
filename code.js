// Ne supprimez pas ces lignes
// Chargement de l'input de test
let input;
function initInput(valeur) {
  input = valeur;
}

// Ne supprimez pas ces lignes
// Support de LocalPrint et LocalPrintArray utilisées dans les
// réponses des exercices de la saison 11
function LocalPrint(chaine) {
  console.error(chaine);
}
function LocalPrintArray(chaine) {
  console.error(chaine);
}

// -- Développez votre code dans la fonction ContestResponse ci-après
function ContestResponse(chaine) {
  // Implémentez votre code ci-dessous
  let nCopain1, nCopain2, nCopain3, nCopain4, nCopain5;
  let distance1, distance2, distance3, distance4,  distance5;
  let compteur = 2;
  let min1;
  let min = [];
  let nPCopain = [];
  let distance = [];

  // Mes notes
  let chaineMesNotes = input[0].split(' ');
  let mesNotes = [];
  // 
  let nombreDecopains = input[1];
  let meilleurCopain = Number(input[2]);
  
  // ChaineNotesCopains
  let chaineNotesCopains = input.slice(3);
  let notesCopains = [];
  let tabNotesCopains;

  //
  for (let i = 0; i < chaineMesNotes.length; i++) {
    mesNotes.push(Number(chaineMesNotes[i]));
  }

  for (let i = 0; i < chaineNotesCopains.length; i++) {
    tabNotesCopains = chaineNotesCopains[i].split(' ');
    nCopain1 = Number(tabNotesCopains[0]) ;
    nCopain2 = Number(tabNotesCopains[1]);
    nCopain3 = Number(tabNotesCopains[2]);
    nCopain4 = Number(tabNotesCopains[3]);
    nCopain5 = Number(tabNotesCopains[4]);
    
    
    distance1 = Math.abs(mesNotes[0] - nCopain1);
    distance2 = Math.abs(mesNotes[1] - nCopain2);
    distance3 = Math.abs(mesNotes[2] - nCopain3);
    distance4 = Math.abs(mesNotes[3] - nCopain4);
    distance5 = Math.abs(mesNotes[4] - nCopain5);

    nPCopain.push(Number(tabNotesCopains[5]));
    distance.push (distance1 + distance2 + distance3 + distance4 + distance5);


  }
  
  
  // for (let i = 0; i < distance.length; i++) {
  //   //let element = distance[i];
  //   if (compteur <= meilleurCopain) {
  //     min1 = Math.min(distance[i]);
      
  //   }
   
  // }
  let indexValeur;
  let somme;
  for (let i = 0; i < meilleurCopain; i++) {
    
    for (let i = 0; i < distance.length; i++) {
      indexValeur = distance.indexOf(Math.min(...distance));
      // indexValeur = (Math.min(distance[i]));
      somme = nPCopain.slice(indexValeur);
      
    }
    min.push(somme);
    distance = Number.MAX_VALUE;
    
  }
  console.log(min);
  
  
  //let index1 = nPCopain[indexValeur1];

  // for (let i = 0; i < nPCopain.length; i++) {
    
    
  // }
  
  // console.log(nPCopain);
  // console.log(distance);
  // console.log(indexValeur);
  // console.log(somme);
  // console.log(indexValeur1);
  // console.log(index1);
    


  
  

  
}
// -- Fin de votre code

// Ne supprimez pas ces lignes
exports.ContestResponse = ContestResponse;
exports.initInput = initInput;
