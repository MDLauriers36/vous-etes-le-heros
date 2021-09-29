let chaptersObj = {
  l_arrivée = premier_chapitre = {
    subtitle: "Sed ut perspiciatis",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    img: af
<<<<<<< HEAD
  }
    ,
  no_help : aucune_aide = {
=======
  };
  

  let aucune_aide = {
>>>>>>> 2c8a942727c51481926145ef858337ac3f0b7af2
    subtitle: "Sed ut perspiciatis",
    text:"Le commis ne peut pas vous aider",
    img: (Git/vous-etes-le-heros/diagrammeFini.jpg),
    options : ["Douter de ses compétences", "Vous plaindre", "Rien faire"]
<<<<<<< HEAD
  },

  produits : deux_mille = {
  subtitle: "Sed ut perspiciatis",
  text:"Le commis vous affirme qu'il a plus de 2000 produits différents dans son magasin et ne peut pas tous les connaitre. Que voulez-vous faire?",
  img: af,
  options : ["Passer à autre chose", "Appeler le gérant", "Saluer l'employé et partir"]
  
},
  autre : autre_chose = {
=======
  };

  let deux_mille = {
    subtitle: "Sed ut perspiciatis",
    text:"Le commis vous affirme qu'il a plus de 2000 produits différents dans son magasin et ne peut pas tous les connaitre. Que voulez-vous faire?",
    img: af,
    options : ["Passer à autre chose", "Appeler le gérant", "Saluer l'employé et partir"]
    
  };

  let autre_chose = {
>>>>>>> 2c8a942727c51481926145ef858337ac3f0b7af2
    subtitle: "Sed ut perspiciatis",
    text:"Partie perdue. Retour à la première question (Rappelez-vous que vous devez embeter le plus de personnes possibles.",
    img: af,
    options : ["Douter de ses compétences", "Vous plaindre", "Rien faire"]
<<<<<<< HEAD
  },

  respo_aide : gerant_aide = {
  subtitle: "Sed ut perspiciatis",
  text:"Le gérant vous a aidé à trouver votre produit.",
  img: af,
  options : ["Le remercier", "Dire que son employé doit être mieux formé", "Rien faire"]
},
  commis_chill : commis_calme = {
=======
  };
  let gerant_aide = {
    subtitle: "Sed ut perspiciatis",
    text:"Le gérant vous a aidé à trouver votre produit.",
    img: af,
    options : ["Le remercier", "Dire que son employé doit être mieux formé", "Rien faire"]
  };

  let commis_calme = {
>>>>>>> 2c8a942727c51481926145ef858337ac3f0b7af2
    subtitle: "Sed ut perspiciatis",
    text:"Le commis vous demande de vous calmer. Que voulez-vous faire?",
    img: af,
    options : ["Jouer la victime", "Hausser le ton", "Appeler le gérant"]
<<<<<<< HEAD
  },
  victime : jouer_victime = {
=======
  };

  let jouer_victime = {
>>>>>>> 2c8a942727c51481926145ef858337ac3f0b7af2
    subtitle: "Sed ut perspiciatis",
    text:"Le commis vous propose d'appeler son gérant",
    img: af,
    options : ["S'excuser", "Partir vers les caisses", "Rien faire"]
<<<<<<< HEAD
  },
  caisse : partir_caisses = {
=======
  };

  let partir_caisses = {
>>>>>>> 2c8a942727c51481926145ef858337ac3f0b7af2
    subtitle: "Sed ut perspiciatis",
    text:"Alors que vous voulez vous faire rembourser un produit que vous avez consommé, la caissière vous dit qu'il est impossible de vous rembourser. Que voulez-vous faire?",
    img: af,
    options : ["Partir", "Demander le gérant", "Rien faire"]
<<<<<<< HEAD
  },
  refund : remboursement = {
=======
  };
  let remboursement = {
>>>>>>> 2c8a942727c51481926145ef858337ac3f0b7af2
    subtitle: "Sed ut perspiciatis",
    text:"Le gérant vous affirme qu'il est impossible de vous rembourser. Que voulez-vous faire?",
    img: af,
    options : ["Partir", "Demander le gérant", "Rien faire"]
<<<<<<< HEAD
  },

  
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

=======
  };

  function goToChapters(chaptersName){
    chapitre = chaptersObj.chapter
    return chapitre;
  }

  let chaptersObj = {
    l_arrivée : premier_chapitre,
    no_help : aucune_aide,
    produits = deux_mille,
    autre = autre_chose,
    respo_aide = gerant_aide,
    commis_chill = commis_calme,
    victime = jouer_victime,
    caisse = partir_caisses,
    refund = remboursement,

    goToChapters();
    
}
>>>>>>> 2c8a942727c51481926145ef858337ac3f0b7af2

