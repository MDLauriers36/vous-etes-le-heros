
let chaptersObj = {
  premier_chapitre : {
    subtitle: "Sed ut perspiciatis",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    img: ("images/Gif/giphy.gif"),
  }
    ,
  aucune_aide : {
    subtitle: "Sed ut perspiciatis",
    text:"Le commis ne peut pas vous aider",
    img: ("images/Gif/giphy.gif"),
    options : ["Douter de ses compétences", "Vous plaindre", "Rien faire"]
  },

  deux_mille : {
  subtitle: "Sed ut perspiciatis",
  text:"Le commis vous affirme qu'il a plus de 2000 produits différents dans son magasin et ne peut pas tous les connaitre. Que voulez-vous faire?",
  img: ("images/Gif/giphy.gif"),
  options : ["Passer à autre chose", "Appeler le gérant", "Saluer l'employé et partir"]
  
},
  autre_chose : {
    subtitle: "Sed ut perspiciatis",
    text:"Partie perdue. Retour à la première question (Rappelez-vous que vous devez embeter le plus de personnes possibles.",
    img: ("images/Gif/giphy.gif"),
    options : ["Douter de ses compétences", "Vous plaindre", "Rien faire"]
  },

  gerant_aide : {
  subtitle: "Sed ut perspiciatis",
  text:"Le gérant vous a aidé à trouver votre produit.",
  img: ("images/Gif/giphy.gif"),
  options : ["Le remercier", "Dire que son employé doit être mieux formé", "Rien faire"]
},
  commis_calme : {
    subtitle: "Sed ut perspiciatis",
    text:"Le commis vous demande de vous calmer. Que voulez-vous faire?",
    img: ("images/Gif/giphy.gif"),
    options : ["Jouer la victime", "Hausser le ton", "Appeler le gérant"]
  },
  jouer_victime : {
    subtitle: "Sed ut perspiciatis",
    text:"Le commis vous propose d'appeler son gérant",
    img: ("images/Gif/giphy.gif"),
    options : ["S'excuser", "Partir vers les caisses", "Rien faire"]
  },
  partir_caisses : {
    subtitle: "Sed ut perspiciatis",
    text:"Alors que vous voulez vous faire rembourser un produit que vous avez consommé, la caissière vous dit qu'il est impossible de vous rembourser. Que voulez-vous faire?",
    img: ("images/Gif/giphy.gif"),
    options : ["Partir", "Demander le gérant", "Rien faire"]
  },
  remboursement : {
    subtitle: "Sed ut perspiciatis",
    text:"Le gérant vous affirme qu'il est impossible de vous rembourser. Que voulez-vous faire?",
    img: ("images/Gif/giphy.gif"),
    options : ["Partir", "Demander le gérant", "Rien faire"]
  },

  
}
console.log(chaptersObj);

function goToChapter(chapterName){
  let chapitre = chaptersObj.chapterName;
  return chapitre;
  console.log(goToChapter);
  
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


