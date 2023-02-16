/*    document.get("boutonMusee").addEventListener("click", MuseeMap);*/

document.getElementById("boutonMusee").addEventListener("click", myMuseeFunction);
var pageMusee = 1;

function myMuseeFunction() {
    if (pageMusee == 1) {
    document.getElementById("texteMusee").innerHTML = "Les personnages imaginés ici sont les marcottes de notre borne numérique pour représenter l'Antiquité et la Préhistoire ";
    document.getElementById("vignetteMusee").src = "MuseeVignettes/Vignette_FinalSketch_Scan SNSM651.png";
    document.getElementById("lienMusee").href = "MuseeOuverts/FinalSketch_Scan SNSM651.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 2) {
    document.getElementById("texteMusee").innerHTML = "Le but: retrouver des objets de musée étiquetés pour découvrir son histoire avec des animations call to action";
    document.getElementById("vignetteMusee").src = "MuseeVignettes/Vignette_Venus.png";
    document.getElementById("lienMusee").href = "MuseeOuverts/Venus.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 3) {
    document.getElementById("texteMusee").innerHTML = "J'ai pu préparer un personnage animable pour personnfier l'utilisateur dans cet espace numérique";
    document.getElementById("vignetteMusee").src = "MuseeVignettes/Vignette_TeteFace1.png";
    document.getElementById("lienMusee").href = "MuseeOuverts/PersonnageEntier.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 4) {
    document.getElementById("texteMusee").innerHTML = "Voici un projet pour le musée Breton réalisé en collaboration avec Sami Prmiet et Julie Conan, pour une visite intéractive";
    document.getElementById("vignetteMusee").src = "MuseeVignettes/VignetteTurnAround.png";
    document.getElementById("lienMusee").href = "MuseeOuverts/TurnAround.png";
    pageMusee=1;
    return ;  

    }
  }

document.getElementById("boutonNode").addEventListener("click", myNodeFunction);
var pageMusee = 1;

function myNodeFunction() {
    if (pageMusee == 1) {
    document.getElementById("texteNode").innerHTML = "Pour le préparer, j'ai dû respecter une seule contrainte : le modèle doit rester globalement sphérique";
    document.getElementById("vignetteNode").src = "VignettesNode/Vignette_ezgif-frame-001.png";
    document.getElementById("lienNode").href = "NodeOuverts/ezgif-frame-001.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 2) {
    document.getElementById("texteNode").innerHTML = "Les textures mettent en valeur le personnage en reflettant la lumière, presque au loin, depuis un plan lointain.";
    document.getElementById("vignetteNode").src = "VignettesNode/Vignette_ezgif-frame-010.png";;
    document.getElementById("lienNode").href = "NodeOuverts/ezgif-frame-010.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 3) {
    document.getElementById("texteNode").innerHTML = "Voici le concept que j'avais préparé en amont. Il m'a permis d'apprendre à respecter un plan 2D à modéliser";
    document.getElementById("vignetteNode").src = "VignettesNode/Vignette_Scan SNSM284.png";
    document.getElementById("lienNode").href = "NodeOuverts/Scan SNSM284.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 4) {
    document.getElementById("texteNode").innerHTML = "Voici un exemple de mes travaux en 3D. Personnels et enrichissants, je maitrise Blender avec eux";
    document.getElementById("vignetteNode").src = "VignettesNode/Vignette_ezgif-frame-007.png";
    document.getElementById("lienNode").href = "NodeOuverts/ezgif-frame-007.png";
    pageMusee=1;
    return ;  

    }
  }

/*<div class="responsive">
  <div class="gallery">
    <div class="haut1">Freeform</div>
       <img class="superData" src="JS.svg" alt="DataMotion">
    <div class="haut2">JS</div>
    <a id ="lienfreeform" target="_blank" href="Ouverts_Freeform/1.png">
      <img id ="vignettefreeform" class="image" src="Vignette_Freeform/1.png" alt="Mountains" width="600" height="400">
    </a>
    <div id ="textefreeform" class="desc">Cet espace regroupe mes travaux d'étudiante de DNMADe numérique</div>
    <img class="boutonC" src="arrowCreativite.svg" alt="Clique-moi"> 
  </div>
</div>
*/



document.getElementById("boutonFreeform").addEventListener("click", myFreeFunction);
var pageMusee = 1;

function myFreeFunction() {
    if (pageMusee == 1) {
    document.getElementById("textefreeform").innerHTML = "Voici mon tout premier modèle freeform d'une longue série où j'utilise également Blender en logiciel";
    document.getElementById("vignettefreeform").src = "Vignette_Freeform/Vignette_2.png";
    document.getElementById("lienfreeform").href = "Ouverts_Freeform/1.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 2) {
    document.getElementById("textefreeform").innerHTML = "Ensuite, j'ai voulu m'exercer en m'inspirant de la carosserie d'une voiture pour des courbes dynamiques";
    document.getElementById("vignettefreeform").src = "Vignette_Freeform/Vignette_3.png";
    document.getElementById("lienfreeform").href = "Ouverts_Freeform/1.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 3) {
    document.getElementById("textefreeform").innerHTML = "Enfin, voilà un sac \'hard surface\' qui donne accès à des fonctionnalités numériques et mécaniques sci-fi ";
    document.getElementById("vignettefreeform").src = "Vignette_Freeform/Vignette_4.png";
    document.getElementById("lienfreeform").href = "Ouverts_Freeform/1.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 4) {
    document.getElementById("textefreeform").innerHTML = "Ce style de modèles correspond plus à de la modélisation au feeling qui se fait par ajouts de détails";
    document.getElementById("vignettefreeform").src = "Vignette_Freeform/Vignette_1.png";
    document.getElementById("lienfreeform").href = "Ouverts_Freeform/1.png";
    pageMusee=1;
    return ;  

    }
  }

document.getElementById("boutonReproduction").addEventListener("click", myNBFunction);
var pageMusee = 1;

function myNBFunction() {
    if (pageMusee == 1) {
    document.getElementById("texteReproduction").innerHTML = "Mon thème choisi est ici les mains pour apprendre à les représenter de manière efficace et avec ma patte";
    document.getElementById("vignetteReproduction").src = "Vignettes_NB/Vignette_EcoleMusee.png";
    document.getElementById("lienReproduction").href = "Ouverts_NB/EcoleMusee.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 2) {
    document.getElementById("texteReproduction").innerHTML = "Le Serment des Horaces n'y a pas échapé, je l'ai reproduit à l'exactitude aux crayons gris plus ou moins gras";
    document.getElementById("vignetteReproduction").src = "Vignettes_NB/Vignette_SermontDesHoraces.png";
    document.getElementById("lienReproduction").href = "Ouverts_NB/SermontDesHoraces.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 3) {
    document.getElementById("texteReproduction").innerHTML = "Pour finir, ce sont des dessins/croquis réalisés au musée des Beaux-arts de Quimper lors d'une visite";
    document.getElementById("vignetteReproduction").src = "Vignettes_NB/Vignette_Scan SNSM270.png";
    document.getElementById("lienReproduction").href = "Ouverts_NB/Scan SNSM270.jpg";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 4) {
    document.getElementById("texteReproduction").innerHTML = "Issu des beaux-arts, mon apprentissage réside aussi dans l'observation d'oeuvres déjà existantes (ex:Mona Lisa)";
    document.getElementById("vignetteReproduction").src = "Vignettes_NB/Vignette_MonaECole.png";
    document.getElementById("lienReproduction").href = "Ouverts_NB/MonaECole.png";
    pageMusee=1;
    return ;  

    }
  }

/*  <div class="gallery">
    <div class="haut1">Workshop</div>
      <img class="superData" src="3D.svg" alt="DataMotion">
    <div class="haut2">MOTION</div>
    <a id ="lienWorkshop" target="_blank" href="sky-g7e676952f_640.png">
      <img id ="vignetteWorkshop" class="image" src="sky-g7e676952f_640.png" alt="Forest" width="600" height="400">
    </a>
    <div id ="texteWorkshop" class="desc">Les premières choses que je peux vous montrer sont issues de mon parcours professionnel et scolaire</div>
    <img id ="boutonWorkshop" class="boutonC" src="arrowCreativite.svg" alt="Clique-moi"> 
  </div>
</div>*/

    document.getElementById("boutonWorkshop").addEventListener("click", myWorkshopFunction);
var pageMusee = 1;

function myWorkshopFunction() {
    if (pageMusee == 1) {
    document.getElementById("texteWorkshop").innerHTML = "Notre application doit répondre à des besoins d'entrprises et mettre en valeur le patrimoine historique";
    document.getElementById("vignetteWorkshop").src = "Vignettes_NB/Vignette_EcoleMusee.png";
    document.getElementById("lienWorkshop").href = "Ouverts_NB/EcoleMusee.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 2) {
    document.getElementById("texteWorkshop").innerHTML = "Pour le design d'experience, une application de réalité augmenter pour trouver des objets cachés";
    document.getElementById("vignetteWorkshop").src = "Vignettes_NB/Vignette_SermontDesHoraces.png";
    document.getElementById("lienWorkshop").href = "Ouverts_NB/SermontDesHoraces.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 3) {
    document.getElementById("texteWorkshop").innerHTML = "En 3D, j'ai réalisé des assets par rapport à la direction artistique (en voie de développement)";
    document.getElementById("vignetteWorkshop").src = "Vignettes_NB/Vignette_MonaECole.png";
    document.getElementById("lienWorkshop").href = "Ouverts_NB/MonaECole.png";
    pageMusee+=1;
    return ;  

    } else if (pageMusee == 4) {
    document.getElementById("texteWorkshop").innerHTML = "Le concept a été réalisé lors d'un challenge numérique avec des étudiants en Patrimoine et mes camarades";
    document.getElementById("vignetteWorkshop").src = "Vignettes_NB/Vignette_MonaECole.png";
    document.getElementById("lienWorkshop").href = "Ouverts_NB/MonaECole.png";
    pageMusee=1;
    return ;  

    }

  }


  document.getElementById("boutonPastele").addEventListener("click", myPastelFunction);
var pageMusee = 1;

function myPastelFunction() {
    if (pageMusee == 1) {
    document.getElementById("textePastele").innerHTML = "J'ai commencé par préparer le modèle final avec un premier dessin pour ensuite le recréer au format raisin";
    document.getElementById("vignettePastele").src = "Vignettes_NB/Vignette_EcoleMusee.png";
    document.getElementById("lienPastele").href = "Ouverts_NB/EcoleMusee.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 2) {
    document.getElementById("textePastele").innerHTML = "Voilà donc à quoi ressemble le dessin final où il reste l'arrière plan à terminer, si je le souhaite, plus tard";
    document.getElementById("vignettePastele").src = "Vignettes_NB/Vignette_SermontDesHoraces.png";
    document.getElementById("lienPastele").href = "Ouverts_NB/SermontDesHoraces.png";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 3) {
    document.getElementById("textePastele").innerHTML = "Le pastèle est le medium qui me permet de peindre moi-même de grandes surfaces en peu de temps";
    document.getElementById("vignettePastele").src = "Vignettes_NB/Vignette_MonaECole.png";
    document.getElementById("lienPastele").href = "Ouverts_NB/MonaECole.png";
    pageMusee=1;
    return ;  

    }
  }


document.getElementById("boutonMarche").addEventListener("click", myMarcheFunction);
var pageMusee = 1;

function myMarcheFunction() {
    if (pageMusee == 1) {
    document.getElementById("texteMarche").innerHTML = "Une copine à moi, Alwena Gauter, qui a commencé à poser pour une minute par croquis";
    document.getElementById("vignetteMarche").src = "Vignettes_Cycle/Vignette_Scan SNSM273.png";
    document.getElementById("lienMarche").href = "Ouverts_Cycle/Scan SNSM273.jpg";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 2) {
    document.getElementById("texteMarche").innerHTML = "Une esquisse plus longue de dos (point de vue au hasard) pour représenter le corps en mouvement";
    document.getElementById("vignetteMarche").src = "Vignettes_Cycle/Vignette_Scan SNSM2711.png";
    document.getElementById("lienMarche").href = "Ouverts_Cycle/Scan SNSM271.jpg";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 3) {
    document.getElementById("texteMarche").innerHTML = "Et pour terminer, j'ai recommencé sur un entraînement du même type sur dix minutes de face";
    document.getElementById("vignetteMarche").src = "Vignettes_Cycle/Vignette_Scan SNSM2712.png";
    document.getElementById("lienMarche").href = "Ouverts_Cycle/Scan SNSM271.jpg";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 4) {
    document.getElementById("texteMarche").innerHTML = "Un cycle de marche en matière pratique m'a exercée sur le croquis de modèles vivants efficace";
    document.getElementById("vignetteMarche").src = "Vignettes_Cycle/Vignette_A_0006_Background.png";
    document.getElementById("lienMarche").href = "Ouverts_Cycle/A_0006_Background.png";
    pageMusee=1;
    return ;  

    }
  }

document.getElementById("boutonOutil").addEventListener("click", myOutilFunction);
var pageMusee = 1;

function myOutilFunction() {
    if (pageMusee == 1) {
    document.getElementById("texteOutil").innerHTML = "L'ange vert est une expérimentation avec un seul crayon vert et sa version plus claire pour le former";
    document.getElementById("vignetteOutil").src = "Vignettes_Outil/Vignette_ANGE_VERT.png";
    document.getElementById("lienOutil").href = "Ouverts_Outil/ANGE_VERT.jpg";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 2) {
    document.getElementById("texteOutil").innerHTML = "Ensuite, pour un modèle 3D, j'ai dû faire en sorte de travailler les reflets sur une surface arrondie";
    document.getElementById("vignetteOutil").src = "Vignettes_Outil/Vignette_Scan SNSM278.png";
    document.getElementById("lienOutil").href = "Ouverts_Outil/Scan SNSM278.jpg";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 3) {
    document.getElementById("texteOutil").innerHTML = "La dernière expérimentation est un dessin par imagination, sans modèle pour exercer ma mémoire visuelle";
    document.getElementById("vignetteOutil").src = "Vignettes_Outil/Vignette_Tentapoulpe.png";
    document.getElementById("lienOutil").href = "Ouverts_Outil/Tentapoulpe.jpg";
    pageMusee+=1;
    return ;    
    } else if (pageMusee == 4) {
    document.getElementById("texteOutil").innerHTML = "La pratique en couleur se fait avec différents médiums plastiques notamment l'aquarelle et crayons bois";
    document.getElementById("vignetteOutil").src = "Vignettes_Outil/Vignette_Scan SNSM276.png";
    document.getElementById("lienOutil").href = "Ouverts_Outil/Scan SNSM276.jpg";
    pageMusee=1;
    return ;  

    }
  }







/*
<div class="responsive" id="centrebas3">
  <div class="gallery">
    <div class="haut1">Outil D'Expression</div>
       <img class="superData" src="JS.svg" alt="DataMotion">
    <div class="haut2">IDEATION</div>
    <a id="lienOutil" target="_blank" href="Ouverts_Outil/Scan SNSM276.jpg">
      <img id="vignetteOutil" class="image" src="Vignettes_Outil/Vignette_Scan SNSM276.png" alt="Mountains" width="600" height="400">
    </a>
    <div id="texteOutil" class="desc">Les premières choses que je peux vous montrer sont issues de mon parcours professionnel et scolaire</div>
    <img id="boutonOutil" class="boutonC" src="arrowCreativite.svg" alt="Clique-moi"> 
  </div>
</div>



<div class ="centrer" style="z-index:8000;">
<div class="responsive">
  <div class="gallery">
    <h3 class="haut1">Cycle de marche</h3>
    <img class="superData" src="Motion.svg" alt="DataMotion">
    <h2 class="haut2">MOTION</h2>
    <a id ="lienMarche" id target="_blank" href="Ouverts_Cycle/A_0006_Background.png">
      <img id ="vignetteMarche" class="image" src="Vignettes_Cycle/Vignette_A_0006_Background.png" alt="Cinque Terre"> <!-- mettreLaTaille -->
    </a>
    <div id ="texteMarche" class="desc">Les premières choses que je peux vous montrer sont issues de mon parcours professionnel et scolaire</div>
    <img id ="boutonMarche" class="boutonC" src="arrowCreativite.svg" alt="Clique-moi"> 
  </div>
</div>


<div class ="centrer" style="z-index:8000;">
<div class="responsive">
  <div class="gallery">
    <h3 class="haut1">Reproductions</h3>
    <img class="superData" src="Motion.svg" alt="DataMotion">
    <h2 class="haut2">N&B</h2>
    <a id ="lienReproduction" target="_blank" href="Ouverts_NB/MonaEcole.png">
      <img id ="vignetteReproduction" class="image" src="Vignettes_NB/Vignette_MonaEcole.png" alt="Cinque Terre"> <!-- mettreLaTaille -->
    </a>
    <div id ="texteReproduction" class="desc">Les premières choses que je peux vous montrer sont issues de mon parcours professionnel et scolaire</div>
    <img id ="boutonReproduction" class="boutonC" src="arrowCreativite.svg" alt="Clique-moi"> 
  </div>
</div>



<div class="responsive" id="centrebas1">
  <div class="gallery">
    <div class="haut1">Node volant</div>
      <img class="superData" src="3D.svg" alt="DataMotion">
    <div class="haut2">3D</div>
    <a id = "lienNode" target="_blank" href="sky-g7e676952f_640.png">
      <img id = "vignetteNode" class="image" src="sky-g7e676952f_640.png" alt="Forest" width="600" height="400">
    </a>
    <div id = "texteNode" class="desc">Les premières choses que je peux vous montrer sont issues de mon parcours professionnel et scolaire</div>
    <img id="boutonNode" class="boutonC" src="arrowCreativite.svg" alt="Clique-moi"> 
  </div>
</div>







function MuseeMap() {
    console.log("ok");*/
/*    document.getElementById("lienMusee").href="Venus.png";
    document.getElementById("vignetteMusee").src="Vignette_Venus.png";
    document.getElementById("texteMusee").innerHTML="A";
    numMusee = 1;

    <div class ="centrer" style="z-index:8000;">
<div class="responsive">
  <div class="gallery">
    <h3 class="haut1">Projet musee</h3>
    <img class="superData" src="Motion.svg" alt="DataMotion">
    <h2 class="haut2">MOTION</h2>
    <a id = "lienMusee" target="_blank" href="MuseeOuverts/TurnAround.png">
      <img id = "vignetteMusee" class="image" src="MuseeVignettes/VignetteTurnAround.png" alt="Cinque Terre" width="345px" height="300px"> <!-- mettreLaTaille -->
    </a>
    <div id = "texteMusee" class="desc">Les premières choses que je peux vous montrer sont issues de mon parcours professionnel et scolaire</div>
    <img id = "boutonMusee" class="boutonC" src="arrowCreativite.svg" alt="Clique-moi"> 
  </div>
</div>
*/




/*
}*/