let chaptersObj = {


  // Chapitres
  premier_chapitre: {
    subtitle: "L'arrivée",
    text: "Vous arrivez dans un magasin grande surface alors que vous avez massé un très mauvaise journée. Vous devez donc relâcher votre stress sur des employés qui n'ont rien demandé. Saurez-vous bien vous déstresser?",
    img: "Images/jpg/succ-accueil-corpo.jpg",
    options: [{
        text: "Douter des compétences de l'employé",
        action: "goToChapter(`deux_mille`)"
      },

      {

        text: "Se plaindre",
        action: "goToChapter(`commis_calme`)"
      },

      {
        text: "Rien Faire",
        action: "goToChapter(`autre_chose`)"

      },
    ]

  },
  aucune_aide: {
    subtitle: "L'incapable",
    text: "Le commis ne peut pas vous aider",
    img: "Images/Gif/200.gif",
    options: [{
        text: "Douter des compétences de l'employé",
        action: "goToChapter(`deux_mille`)"
      },

      {

        text: "Se plaindre",
        action: "goToChapter(`deux_mille`)"
      },

      {
        text: "Rien Faire",
        action: "goToChapter(`autre_chose`)"

      },
    ]
    //options : [Douter, Plaindre, Rien_faire],
  },

  deux_mille: {
    subtitle: "L'excuse du commis",
    text: "Le commis vous affirme qu'il a plus de 2000 produits différents dans son magasin et ne peut pas tous les connaitre. Que voulez-vous faire?",
    img: "Images/Gif/200w.gif",
    options: [{
        text: "Passer à autre chose",
        action: "goToChapter(`autre_chose`)"
      },

      {

        text: "Appeler_gérant",
        action: "goToChapter(`autre_chose`)"
      },

      {
        text: "Saluer l'employé et partir",
        action: "goToChapter(`autre_chose`)"

      },
    ]
    // options : ["Passer à autre chose", "Appeler le gérant", "Saluer l'employé et partir"],

  },
  autre_chose: {
    subtitle: "BOOOOOO!",
    text: "Partie perdue. Retour à la première question (Rappelez-vous que vous devez embêter le plus de personnes possibles.",
    img: "Images/Gif/4dck6t.gif",
    options: [{
      text: "Retour vers la page principal",
      action: "goToChapter(`premier_chapitre`)"
      },

      {

        text: "Retour vers la page principal",
        action: "goToChapter(`premier_chapitre`)"
      },

      {
        text: "Retour vers la page principal",
        action: "goToChapter(`premier_chapitre`)"

      },
    ]
    //options : [Douter, Plaindre, Rien_faire],
  },

  gerant_aide: {
    subtitle: "Enfin de l'aide",
    text: "Le gérant vous a aidé à trouver votre produit.",
    img: "Images/Gif/congrats-6.gif",
    options: [{
        text: "Remercier le gérant",
        action: "goToChapter(`autre_chose`)"
      },

      {

        text: "Dire que son employé devrait être mieux formé",
        action: "goToChapter(`autre_chose`)"
      },

      {
        text: "Rien Faire",
        action: "goToChapter(`autre_chose`)"

      },
    ]
    //options : [remercier, mieux_formé, Rien_faire],
  },
  commis_calme: {
    subtitle: "L'audace du commis",
    text: "Le commis vous demande de vous calmer. Que voulez-vous faire?",
    img: "Images/Gif/giphy (1).gif",
    options: [{
        text: "Jouer à la victime",
        action: "goToChapter(`clé`)"
      },

      {

        text: "Insulter l'employé",
        action: "goToChapter(`autre_chose`)"
      },

      {
        text: "Appeler le gérant",
        action: "goToChapter(`autre_chose`)"

      },
    ]
    //options : [victime, Hausser_ton, Appeler_gérant],
  },
  jouer_victime: {
    subtitle: "La carte de la victime",
    text: "Le commis vous propose d'appeler son gérant",
    img: "Images/Gif/giphy.gif",
    options: [{
        text: "S'excuser",
        action: "goToChapter(`autre_chose`)"
      },

      {

        text: "Partir vers les caisses",
        action: "goToChapter(`partir_caisses`)"
      },

      {
        text: "Rien faire",
        action: "goToChapter(`autre_chose`)"

      },
    ]

    //options : [excuser, Go_caisses, Rien_faire],
  },
  partir_caisses: {
    subtitle: "Pfff...",
    text: "Alors que vous voulez vous faire rembourser un produit que vous avez consommé, la caissière vous dit qu'il est impossible de vous rembourser. Que voulez-vous faire?",
    img: "Images/Gif/karen-ok.gif",
    options: [{
        text: "Partir",
        action: "goToChapter(`autre_chose`)"
      },

      {

        text: "Demander à parler au gérant",
        action: "goToChapter(`remboursement`)"
      },

      {
        text: "Rien faire",
        action: "goToChapter(`autre_chose`)"

      },
    ]

    //options : [Partir, Demander_gérant, Rien_faire],
  },


  remboursement: {
    subtitle: "Vraiments tous incapables",
    text: "Le gérant vous affirme qu'il est impossible de vous rembourser. Que voulez-vous faire?",
    img: "Images/Gif/téléchargement.jpg",
    options: [{
        text: "Partir",
        action: "goToChapter(`autre_chose`)"
      },
      {
        text: "Dire que vous ne reviendrez plus jamais",
        action: "goToChapter(`finale`)"
      },

      {
        text: "Insulter toutes les personnes qui se trouvent devant vous",
        action: "goToChapter(`finale`)"
      },
    ]
  },

  finale: {
    subtitle: "PARTIE TERMINÉE",
    text: "Félicitation, vous avez été une grosse bitch!",
    img: "Images/Gif/congrats-6.gif",
    options: [{
        text: "Retour à la page principale",
        action: "goToChapter(`premier_chapitre`)"
      },
      {
        text: "Retour à la page principale",
        action: "goToChapter(`premier_chapitre`)"
      },

      {
        text: "Retour à la page principale",
        action: "goToChapter(`premier_chapitre`)"
      },
    ]
  }, 

  quitter: {
    subtitle: "Partie Perdue",
    text: "Le gérant vous a menacer d'appeler la police si vous ne partiez pas de son magasin...",
    img: "Images/Gif/pote_waifu2x_2x_2n.gif",
    options: [{
        text: "Retour à la page principale",
        action: "goToChapter(`premier_chapitre`)"
      },
      {
        text: "Retour à la page principale",
        action: "goToChapter(`premier_chapitre`)"
      },

      {
        text: "Retour à la page principale",
        action: "goToChapter(`premier_chapitre`)"
      },
    ]
  },

  clé: {
    subtitle: "Partie Perdue",
    text: "Alors que vous jouez la carte de la victime, voulez-vous crier sur l'employé?",
    img: "Images/Gif/pote_waifu2x_2x_2n.gif",
    options: [{
        text: "oui",
        action: "goToChapter(`jouer_victime`)"
      },
      

      {
        text: "non",
        action: "goToChapter(`jouer_victime`)" 
      },
    ]
  }

}


function goToChapter(chapterName) {

  let chapter = document.getElementById("titre");
  let text = document.querySelector(".txt");
  let image = document.querySelector(".visuel");
  let choices = document.querySelector(".boutons-ligne1");
  chapter.innerText = chaptersObj[chapterName].subtitle;
  text.innerText = chaptersObj[chapterName].text;
  image.innerHTML = `<img src="${chaptersObj[chapterName].img}" alt="chapter_img" />`;
  let txtButton = "";
  for (let index = 0; index < chaptersObj[chapterName].options.length; index++) {
    const choice = chaptersObj[chapterName].options[index].action;
    txtButton += `<div class="button"><button type="button" onclick="${chaptersObj[chapterName].options[index].action}">${chaptersObj[chapterName].options[index].text}</button></div>`;
  }
  choices.innerHTML = txtButton;



}
let victimeCrie = false;
function victimeCrier(){
  victimeCrie = true;
  goToChapter(jouer_victime)
}
goToChapter("premier_chapitre");