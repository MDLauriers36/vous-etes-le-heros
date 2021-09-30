
let chaptersObj = {
              //Chapitres
  premier_chapitre : {
    subtitle: "L'arrivée",
    text:"Vous arrivez dans un magasin grande surface alors que vous avez massé un très mauvaise journée. Vous devez donc relâcher votre stress sur des employés qui n'ont rien demandé. Saurez-vous bien vous déstresser?",
    img: ("images/Gif/giphy.gif"),
    options : [, commencer, ]
  }
    ,
  aucune_aide : {
    subtitle: "L'incapable",
    text:"Le commis ne peut pas vous aider",
    img: ("images/Gif/giphy.gif"),
    options : [Douter, Plaindre, Rien_faire]
  },

  deux_mille : {
  subtitle: "L'excuse du commis",
  text:"Le commis vous affirme qu'il a plus de 2000 produits différents dans son magasin et ne peut pas tous les connaitre. Que voulez-vous faire?",
  img: ("images/Gif/giphy.gif"),
  options : ["Passer à autre chose", "Appeler le gérant", "Saluer l'employé et partir"]
  
},
  autre_chose : {
    subtitle: "BOOOOOO!",
    text:"Partie perdue. Retour à la première question (Rappelez-vous que vous devez embêter le plus de personnes possibles.",
    img: ("images/Gif/giphy.gif"),
    options : [Douter, Plaindre, Rien_faire]
  },

  gerant_aide : {
  subtitle: "Enfin de l'aide",
  text:"Le gérant vous a aidé à trouver votre produit.",
  img: ("images/Gif/giphy.gif"),
  options : [remercier, mieux_formé, Rien_faire]
},
  commis_calme : {
    subtitle: "L'audace du commis",
    text:"Le commis vous demande de vous calmer. Que voulez-vous faire?",
    img: ("images/Gif/giphy.gif"),
    options : [victime, Hausser_ton, Appeler_gérant]
  },
  jouer_victime : {
    subtitle: "La carte de la victime",
    text:"Le commis vous propose d'appeler son gérant",
    img: ("images/Gif/giphy.gif"),
    options : [excuser, Go_caisses, Rien_faire]
  },
  partir_caisses : {
    subtitle: "Pfff...",
    text:"Alors que vous voulez vous faire rembourser un produit que vous avez consommé, la caissière vous dit qu'il est impossible de vous rembourser. Que voulez-vous faire?",
    img: ("images/Gif/giphy.gif"),
    options : [Partir, Demander_gérant, Rien_faire]
  },
  remboursement : {
    subtitle: "Vraiments tous incapables",
    text:"Le gérant vous affirme qu'il est impossible de vous rembourser. Que voulez-vous faire?",
    img: ("images/Gif/giphy.gif"),
    options : [Partir, Jamais_revenir, Insulter]
  },
  //
  //
  //
  commencer : {
    text : "Commencer la partie",
    action : (goToChapter(deux_mille))
  },
  Plaindre : {
    text: "Douter des compétences de l'employé",
    action : (goToChapter(deux_mille))
  },
  Douter : {
    text: "Douter des compétences de l'employé",
    action : (goToChapter(deux_mille))
  },
  mieux_formé : {
    text: "Dire que son employé devrait être mieux formé",
    action : (goToChapter(autre_chose))
  },
  remercier : {
    text: "Le remercier",
    action : (goToChapter(autre_chose))
  },
  Appeler_gérant : {
    text : "Appeler_gérant",
    action : (goToChapter(autre_chose))
  },
  Hausser_ton : {
    text : "Hausser le ton",
    action : (goToChapter(autre_chose))

  },
  victime : {
    text : "Jouer à la victime",
    action : (goToChapter(jouer_victime))
  },
  Rien_faire : {
    text : "Rien faire",
    action : (goToChapter(autre_chose))
  },

  Go_caisses : {
    text : "Partir vers les caisses",
    action : (goToChapter(partir_caisses))
  },
  excuser : {
    text : "S'excuser",
    action : (goToChapter(autre_chose))
  },
  Demander_gérant : {
    text : "Demander à parler au gérant",
    action : (goToChapter(premier_chapitre))
  },

  Partir : {
    text : "Partir",
    action : (goToChapter(premier_chapitre))
  },
  
  Jamais_revenir : {
    text : "Dire que vous n'allez plus jamais revenir",
    action : (goToChapter(premier_chapitre)),
  },
  Insulter : {
    text : "Insulter toutes les personnes qui se trouvent devant vous",
    action : (goToChapter(premier_chapitre)),
  }
  
}

function goToChapter(chapterName){
  let chapitre = chaptersObj[chapterName];
  console.log(chapitre.subtitle);
  console.log(chapitre.text);
  
  
  
}


/*

let premier_chapitre = {
  subtitle: "Sed ut perspiciatis",
  text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  img: af
};


let aucune_aide = {
  subtitle: "Sed ut perspiciatis",
  text:"Le commis ne peut pas vous aider",
  img: (Git/vous-etes-le-heros/diagrammeFini.jpg),
  options : ["Douter de ses compétences", "Vous plaindre", "Rien faire"]
};

let deux_mille = {
  subtitle: "Sed ut perspiciatis",
  text:"Le commis vous affirme qu'il a plus de 2000 produits différents dans son magasin et ne peut pas tous les connaitre. Que voulez-vous faire?",
  img: af,
  options : ["Passer à autre chose", "Appeler le gérant", "Saluer l'employé et partir"]
  
};

let autre_chose = {
  subtitle: "Sed ut perspiciatis",
  text:"Partie perdue. Retour à la première question (Rappelez-vous que vous devez embeter le plus de personnes possibles.",
  img: af,
  options : ["Douter de ses compétences", "Vous plaindre", "Rien faire"]
};

let gerant_aide = {
  subtitle: "Sed ut perspiciatis",
  text:"Le gérant vous a aidé à trouver votre produit.",
  img: af,
  options : ["Le remercier", "Dire que son employé doit être mieux formé", "Rien faire"]
};

let commis_calme = {
  subtitle: "Sed ut perspiciatis",
  text:"Le commis vous demande de vous calmer. Que voulez-vous faire?",
  img: af,
  options : ["Jouer la victime", "Hausser le ton", "Appeler le gérant"]
};

let jouer_victime = {
  subtitle: "Sed ut perspiciatis",
  text:"Le commis vous propose d'appeler son gérant",
  img: af,
  options : ["S'excuser", "Partir vers les caisses", "Rien faire"]
};

let partir_caisses = {
  subtitle: "Sed ut perspiciatis",
  text:"Alors que vous voulez vous faire rembourser un produit que vous avez consommé, la caissière vous dit qu'il est impossible de vous rembourser. Que voulez-vous faire?",
  img: af,
  options : ["Partir", "Demander le gérant", "Rien faire"]
};
let remboursement = {
  subtitle: "Sed ut perspiciatis",
  text:"Le gérant vous affirme qu'il est impossible de vous rembourser. Que voulez-vous faire?",
  img: af,
  options : ["Partir", "Demander le gérant", "Rien faire"]
};
*/


