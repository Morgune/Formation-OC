

//calcul du score
function afficherResultat ( score, nombreMotMax) {
    let message = "vous avez " + score + " sur " + nombreMotMax
    console.log(message)
}


// choix de l'utlisateur
function choisirPhrasesOuMots () {
    let question = prompt("taper 'mot' ou 'phrase'")
    while(question !== "mot" && question !=="phrase"){
        question = prompt("taper 'mot' ou 'phrase'")
    }
    return question
}



//tape les mots et les phrases
function lancerBoucleDeJeu (listePropositions){
    let score= 0
    
        for (let  i= 0; i <listePropositions.length; i ++){
    
            let motUtilisateur= prompt("Entrez un mot: " + listePropositions[i])
            if (motUtilisateur === listeMots[i]){
                score++
            }
        }
        return score
}



//lance les functions
function lancerJeu (){
    let question = choisirPhrasesOuMots()
    let score = 0
    let nombreMotMax = 0

    if (question === "mot"){
    score=   lancerBoucleDeJeu(listeMots)
    nombreMotMax = listeMots.length
    }
    else{
    score =   lancerBoucleDeJeu (listePhrases)
        nombreMotMax = listePhrases.length
    }

    afficherResultat(score,nombreMotMax)
}


