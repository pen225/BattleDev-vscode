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
  let notes = input[0].split(' ');
  let mesNotes = [];
  let nombreDecopains = input[1];
  let meilleurCopain = input[2];
  let noteCopain = input.slice(3);
  console.log(noteCopain);

  for (let i = 0; i < notes.length; i++) {
    mesNotes.push(Number(notes[i]));
  }
  let dist = 0;
  for (let i = 0; i < noteCopain.length; i++) {
    const note = input[i].split(' ');
    let noteDesCopains = [];
    for (let i = 0; i < noteDesCopains.length; i++) {
      noteDesCopains.push(Number(notes[i]));
      
    }
    
  }
  console.log(noteCopain);

  
}
// -- Fin de votre code

// Ne supprimez pas ces lignes
exports.ContestResponse = ContestResponse;
exports.initInput = initInput;
