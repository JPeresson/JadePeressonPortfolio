/*var onScroll = false ;*/
var deretour = false ;
var scrollSenVa ;
var scrollMonte ;

var onScroll = false ;

var animeScrollJoue = false;
var animeDeScrollJoue = false;
var horsDebut = false ;

var tempsAnimation = 600;
var count = 0 ;
var countRideaux = 0 ;
var activite = false ;
var numero ;
var ici ;

var setup ;
var disparitionTitre = false;
var scrollTopBase = 0;
var positionne = false;
var opacite = false;
var retour = false;

var possibiliteDeRetour ;
var degage = true ;
var degagemet ;
var countallez = 0 ;
var tooltip = false ;

var madiaQueryLargeTooltip ;
var madiaQueryPetitTooltip ;


/*TAILLE MIN 1015px
*/
/*var navTab = document.getElementById("nav");*/


/*Histoire();
document.ready = function Histoire() {
 scrollTopBase = 0;
  var histoire2 = document.getElementById("contenuTitre");

    if(scrollTopBase == 0) {
      histoire.style.animation = "0.65s ease-in 0s 1 forwards DebutOpacite";
    }
  console.log(scrollBase)
  scroll

}*/


window.onscroll = function() {scrollFunction()};

window.addEventListener('scroll', () => {



  const {scrollTop, clientHeight} = document.documentElement ;
  numero = scrollTop;
/*  scrollTopBase = scrollTop;*/


/*HISTOIRE ET BABY*/

var histoire = document.getElementById("contenuTitre");/*style.animation = "0.65s ease-in 0s 1 forwards ToutSeDegage ";*/
var baby = document.getElementById("babyTitre");/*style.animation = "0.35s ease-in 0s 1 forwards ToutSeDegage ";*/

  const topHistoireToTopViewport = histoire.getBoundingClientRect().top;

    var mesDebuts = document.getElementById("mesDebuts");




      if ((scrollTop > (scrollTop + 120 + topHistoireToTopViewport).toFixed() - clientHeight * 0.4)) {
    histoire.style.animation = "0.25s ease-in 0s 1 forwards ToutSeDegage";
    
  }



   if ((scrollTop > (scrollTop + topHistoireToTopViewport).toFixed() - clientHeight * 1)) {
    baby.style.animation = "0.25s ease-in 0s 1 forwards ToutSeDegage";
  /*  if(scrollTop == 0) {
      console.log("contrattaque"); }*/ /*attention à l'ordre ou tout disparait apès la création*/
  }

  if((scrollTop > (-10)) && (scrollTop < (10)) || ((scrollTop < (scrollTop + topHistoireToTopViewport).toFixed() - clientHeight * 0.7))) {
    baby.style.animation = "0.65s ease-in 0s 1 forwards DebutOpacite";

 /*   console.log("histoire")*/
/*     if(scrollTop == 0) {
      console.log(scrollTop); }*/
  } 



  if((scrollTop > (-10)) && (scrollTop < (40)) || ((scrollTop < (scrollTop + topHistoireToTopViewport).toFixed() - clientHeight * 0.7))) {
    histoire.style.animation = "0.65s ease-in 0s 1 forwards DebutOpacite";
   
  }

 




  

 
  var fin = document.getElementById('fin') ;

  
     
   




 /* console.log(scrollTop);*/


/*  if((scrollTop > (-10)) && (scrollTop < (10)) || ((scrollTop < (scrollTop + topHistoireToTopViewport).toFixed() - clientHeight * 0.7))) {
    histoire.style.animation = "0.65s ease-in 0s 1 forwards DebutOpacite";
  }
*/
 


})

function Degager() {
  degage = !degage ;
 clearTimeout(degagement);
}

function Retour() {
  retour = !retour ;
  clearTimeout(possibiliteDeRetour);

}



Partie() ;

function Partie() {
  setup = setTimeout(SetupGauche, 1375);

}

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

function SetupGauche() {
  document.getElementById("screenLeft").style.animation = "0.95s ease-in-out 0s 1 forwards screenGaucheRetour";
/*  console.log("ici");*/
/*  clearTimeout(setup);*/

}
function draw() {
  var viewport_width = window. innerWidth;
/*  juste ecrire window.innerwidth dans console*/

  count += 1 ;
  if (count >=20) {
    horsDebut = !horsDebut;
    count = 20;
  }

  countRideaux += 1 ;
  if (countRideaux >= 65) {
    activite = true;
    countRideaux = 65;
  }
   





  /*console.log(countRideaux)*/

}
function scrollFunction() {
/*  var navTab = document.getElementsByClassName("nav");*/

/*  if (!box.classList.contains('bg-salmon')) {
  console.log('Element does NOT have class');
} else {
  console.log('Element has class');
}
*/


  accessibilte();

  if (onScroll == false && horsDebut == true) {
   /* document.getElementsByClassName("nav").style.animation = "ScrollCache 2s easy-in 1" ; */
    


    if (animeScrollJoue == false) {
     document.getElementById("contenuNav").style.animation = "1s ease-in 0s 1 forwards ScrollCache ";
     if (activite==true) {
      document.getElementById("animationDesign").style.animation = "1s ease-in 0s 1 forwards ScreenMonte ";
    }
      /*animeScrollJoue = true ;
      animeDeScrollJoue = false ;*/
      /*console.log('ca scroll');*/
       scrollSenVa = setTimeout(perteClasse, tempsAnimation) ;
        

    }

    
   
  } 

/*  animation-name: ScrollCache;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: easy-in;
*/

  if (onScroll == true)  {
    scrollMonte = setTimeout(regagneClasse, tempsAnimation) ;
    

    if(animeDeScrollJoue == false) {
      document.getElementById("contenuNav").style.animation = "0.5s ease-in 0s 1 forwards ScrollRetour ";
      if (activite == true) {
        document.getElementById("animationDesign").style.animation = "0.5s ease-in 0s 1 forwards ScreenDescend ";
      }
       /* console.log('ca Descroll');*/
      scrollMonte = setTimeout(regagneClasse, tempsAnimation) ;
    }
    
  }

}
if (history.scrollRestoration) {
      window.scrollTo(0, 0);
} 


function perteClasse() {

  ici = numero ;
  
/*  onScroll = true ;*/
  clearTimeout(scrollSenVa);
  animeScrollJoue = true ;
  animeDeScrollJoue = false ;


}

function regagneClasse() {

  ici = numero ;
/*  onScroll = false ;*/
  clearTimeout( scrollMonte);
  animeDeScrollJoue = true ;
  animeScrollJoue = false ;

  if (numero < ici) {
    onScroll = false ;
   /* console.log("action")*/
  }
  


}



function accessibilte() {
    
    if (numero < ici) {
    onScroll = true ;
/*    console.log("ici");*/
  } 

   if (numero > ici) {
    onScroll = false ;
 /*   console.log("action")*/
  }
  
}


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth',
});


  var numMusee = 0;

