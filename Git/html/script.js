




let chaptersObj = {


  // Chapitres
  premier_chapitre: {
    subtitle: "L'arrivée",
    text: "Vous arrivez dans un magasin grande surface alors que vous avez massé un très mauvaise journée. Vous devez donc relâcher votre stress sur des employés qui n'ont rien demandé. Saurez-vous bien vous déstresser?",
    img: ("images/Gif/un.gif"),
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
      action: "goToChapter(`Rien_faire`)"

    },
  ]
  
  },
  aucune_aide: {
    subtitle: "L'incapable",
    text: "Le commis ne peut pas vous aider",
    img: ("images/Gif/deux.gif"),
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
        action: "goToChapter(`Rien_faire`)"

      },
    ]
    //options : [Douter, Plaindre, Rien_faire],
  },

  deux_mille: {
    subtitle: "L'excuse du commis",
    text: "Le commis vous affirme qu'il a plus de 2000 produits différents dans son magasin et ne peut pas tous les connaitre. Que voulez-vous faire?",
    img: ("images/Gif/trois.gif"),
    options: [{
        text: "Passer à autre chose",
        action: "goToChapter(`autre_chose`)"
      },

      {

        text: "Appeler_gérant",
        action: "goToChapter`(autre_chose`)"
      },

      {
        text: "Saluer l'employé et partir",
        action: "goToChapter(`premier_chapitre`)"

      },
    ]
    // options : ["Passer à autre chose", "Appeler le gérant", "Saluer l'employé et partir"],

  },
  autre_chose: {
    subtitle: "BOOOOOO!",
    text: "Partie perdue. Retour à la première question (Rappelez-vous que vous devez embêter le plus de personnes possibles.",
    img: ("images/Gif/quatre.gif"),
    options: [{
        text: "Douter de la compétence de l'employé",
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

  gerant_aide: {
    subtitle: "Enfin de l'aide",
    text: "Le gérant vous a aidé à trouver votre produit.",
    img: ("images/Gif/cinq.gif"),
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
    img: ("images/Gif/six.gif"),
    options: [{
        text: "Jouer à la victime",
        action: "gotochapter(`jouer_victime`)"
      },

      {

        text: "Hausser le ton",
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
    img: ("images/Gif/un.gif"),
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
    img: ("images/Gif/deux.gif"),
    options: [{
        text: "Partir",
        action: "gotochapter(`autre_chose`)"
      },

      {

        text: "Demander à parler au gérant",
        action: "goToChapter(`premier_chapitre`)"
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
    img: "images/Gif/trois.gif",
    options: [{
        text: "Partir",
        action: "gotochapter(`autre_chose`)"
      },
      {
        text: "Demander à parler au gérant",
        action: "goToChapter(`premier_chapitre`)"
      },

      {
        text: "Insulter toutes les personnes qui se trouvent devant vous",
        action: "goToChapter(`premier_chapitre`)"
      },
    ]
  }

   
}


function goToChapter(chapterName) {
  
  for(let i = 0; i < chaptersObj[i].length; i++){
    let chapitre = document.getElementById('titre').innerText;
    let text = document.querySelector('.txt').innerHTML;
    let image = document.querySelector('.visuel').innerHTML;
    let button1 = document.querySelector('.bouton1').innerHTML;
    let button2 = document.querySelector('.bouton2').innerHTML;
    let button3 = document.querySelector('.bouton3').innerHTML;
    chapitre.innerText = chaptersObj[i].subtitle;
    text.innerText = chaptersObj[i].text
    image.innerText = `<img src="${chaptersObj[i].img}" alt="img" />`;
    button1.innerText = `<button type="button">${chaptersObj[i].options[0].text}</button>`;
    button2.innerText = `<button type="button">${chaptersObj[i].options[1].text}</button>`;
    button3.innerText = `<button type="button">${chaptersObj[i].options[2].text}</button>`;
    
    goToChapter(chapterName);
  }
 
  goToChapter(premier_chapitre);
  

}
function click(){

}