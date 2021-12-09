let crier = false;

function reset() {
    crier = false;
    localStorage.clear();
    goToChapter(`premier_chapitre`);
}

function condition2() {
    crier = true;
    localStorage.setItem("key", `${crier}`);
    goToChapter(`jouer_victime_true`);
}

function condition() {
    if (crier == true) {
        goToChapter(`jouer_victime_true`);
    } else {
        goToChapter(`jouer_victime`);
    }
}
let chaptersObj = {


    // Chapitres
    premier_chapitre: {
        subtitle: "L'arrivée",
        text: "Vous arrivez dans un magasin grande surface alors que vous avez passé un très mauvaise journée. Vous devez donc relâcher votre stresse sur des employés qui n'ont rien demandé. Vous aurez gagné lorsque vous aurez entré dans le magasin, embêter le plus de personnes possible et que vous serai sorti sans avoir de problèmes. Saurez-vous bien vous déstresser?",
        img: "Images/jpg/succ-accueil-corpo.jpg",
        video: "Images/video/un.mp4",
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

                text: "Appeler le gérant gérant",
                action: "goToChapter(`gerant_aide`)"
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
        text: "Partie perdue. Retour à la première question (Rappelez-vous que vous devez embêter le plus de personnes possibles.)",
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
        img: "Images/Gif/michael-scott-the-manager.gif",
        options: [{
                text: "Remercier le gérant",
                action: "goToChapter(`autre_chose`)"
            },

            {

                text: "Dire que son employé devrait être mieux formé",
                action: "goToChapter(`gerant_reste`)"
            },

            {
                text: "Rien Faire",
                action: "goToChapter(`autre_chose`)"

            },
        ]
        //options : [remercier, mieux_formé, Rien_faire],
    },

    gerant_reste: {
        subtitle: "Partie Perdue",
        text: "Àprès ce commentaire, le gérant vous a aider à compléter vos achats, vous n'avez donc aucune opportunités pour vous déchainer.",
        img: "Images/Gif/game-over.gif",
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
                action: "goToChapter(`clé`)"
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

    jouer_victime_true: {
        subtitle: "La carte de la victime",
        text: "Le commis vous propose d'appeler son gérant",
        img: "Images/Gif/giphy.gif",
        options: [{
                text: "S'excuser",
                action: "goToChapter(`autre_chose`)"
            },

            {

                text: "Partir vers les caisses",
                action: "goToChapter(`partir_caisses_true`)"
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

    partir_caisses_true: {
        subtitle: "Pfff...",
        text: "Alors que vous voulez vous faire rembourser un produit que vous avez consommé, la caissière vous dit qu'il est impossible de vous rembourser. Que voulez-vous faire?",
        img: "Images/Gif/karen-ok.gif",
        options: [{
                text: "Partir",
                action: "goToChapter(`true`)"
            },

            {

                text: "Demander à parler au gérant",
                action: "goToChapter(`true`)"
            },

            {
                text: "Rien faire",
                action: "goToChapter(`true`)"

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
        text: "Félicitation, vous avez été insupportable!",
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
        subtitle: "Question piège?",
        text: "Alors que vous conversez avec l'employé, voulez-vous lui crier dessus?",
        img: "Images/Gif/pote_waifu2x_2x_2n.gif",
        options: [{
                text: "oui",
                action: "condition()"
            },


            {
                text: "non",
                action: "victimeCrie()"
            },
        ]
    },

    true: {
        subtitle: "Partie Perdue",
        text: "Le gérant vous a vu et entendu à l'aide de ses caméras de surveillance et a appelé la police. Le but du jeu est de créer un pronlème pour les autres et non pour vous...",
        img: "Images/Gif/smosh-cop.gif",
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

}




function goToChapter(chapterName) {
    const body = document.querySelector('body');
    let chapter = document.getElementById("titre");
    let text = document.querySelector(".txt");
    let image = document.querySelector(".visuel");
    let choices = document.querySelector(".boutons-ligne1");
    const transition = new Audio("audio/OMG.mp3");
    const gameOver = new Audio();
    const gameWon = new Audio();
    const son = document.getElementById('check');
    const effacer = document.getElementById('submit');
    chapter.innerText = chaptersObj[chapterName].subtitle;
    text.innerText = chaptersObj[chapterName].text;

    body.className = chapterName;

    image.innerHTML = `<img src="${chaptersObj[chapterName].img}" alt="chapter_img" />`;
    let txtButton = "";


    if (chaptersObj[chapterName].video !== undefined) {
        image.innerHTML = `<video width="400" height="300" controls src=
     "${chaptersObj[chapterName].video}" autoplay loop muted>
              Browser not supported
             </video>`;
    }
    for (let index = 0; index < chaptersObj[chapterName].options.length; index++) {
        const choice = chaptersObj[chapterName].options[index].action;
        txtButton += `<div class="button"><button type="button" onclick="${chaptersObj[chapterName].options[index].action}">${chaptersObj[chapterName].options[index].text}</button></div>`;
    }
    choices.innerHTML = txtButton;

    choices.addEventListener("click", function () {
        transition.play();
        if (son.checked == true) {
            console.log("good");
        } else {
            transition.pause();
        }

        effacer.addEventListener("click", function () {
            reset();
        })
    });

}

//  if(body.classList.contains('autre_chose')){
// // gameOver.play();
// console.log("to")
//  }
// // if(body.classList.contains('finale')){
// //     gameWon.play();
// //     }

function victimeCrie() {
    crier = true;
    goToChapter(`jouer_victime`);
}


let save = "";
if (save != undefined) {
    save = localStorage.getItem("chapter");

    localStorage.getItem("crie", `${crier}`);
} else {
    goToChapter("premier_chapitre");
}


goToChapter("premier_chapitre");