var compteur = 0 ;
var ligneDroite ;
var tempsAnimation = 500;
var tempsPetit = 135 ;
var mediaQueryGrand ;
var mediaQueryPetit ;
var ligneAnimation ;

var histoire ;
var cHistoire = false;
var accueil ;
var creativite ;


function setup() {
	ligneDroite = document.getElementById('ligneDroite');
	histoire = document.getElementById('histoire');
	accueil = document.getElementById('accueil');
	creativite = document.getElementById('creativite');

	maligneDroite() ;
/*	histoire.addEventListener("mouseispressed", Click);*/

}



function draw() {

	if (compteur < tempsAnimation) {
		compteur += 1 ;
	}

	maligneDroite() ;

/*	window.addEventListener('scroll', () => {

	const {scrollTop, clientHeight} = document.documentElement;
	console.log(scrollTop,clientHeight);
})*/

}

function maligneDroite() {

	mediaQueryGrand = window.matchMedia('(min-width : 1100px)');
	mediaQueryPetit = window.matchMedia('(max-width : 810px)');

	if (compteur < 135) {
		maligneDroitePetite();
		mediaQueryGrand.addListener(maligneDroitePetite);
		mediaQueryPetit.addListener(maligneDroitePetite);

	} else if (compteur > 175) {
		maligneDroiteGrandit();
		mediaQueryGrand.addListener(maligneDroiteGrandit);
		mediaQueryPetit.addListener(maligneDroiteGrandit);
		
	} else {

		return; 
		/*maligneDroitePetite()
		mediaQueryGrand.addListener(maligneDroitePetite);
		mediaQueryPetit.addListener(maligneDroitePetite);*/
	}

		


}

/*function ligneMarge() {
	ligneDroite.style.marginLeft =""<
}*/

function maligneDroiteGrandit() {
		if (mediaQueryPetit.matches) {
		ligneDroite.style.left = "2.8vw";
		ligneDroite.style.width = "1.37vw";
		/*ligneDroite.style.backgroundColor = "yellow";*/

	} else if (mediaQueryGrand.matches) {
		ligneDroite.style.left = "4.7vw";
		ligneDroite.style.width = "2.4vw";
		/*ligneDroite.style.backgroundColor = "pink";*/

	} else {
		ligneDroite.style.left = "4.3vw";
		ligneDroite.style.width = "1.5vw";
		/*ligneDroite.style.backgroundColor = "blue";*/
	}
	/*console.log('grande');*/

	/*AJUSTER LA TAILLE ICI A ELSE IF ET VOIR POUR ADDEVENT SI DE BASE ACTIVE POSSIBLE*/

}

function maligneDroitePetite() {

	if (mediaQueryPetit.matches) {
		ligneDroite.style.left = "3.02vw";
		ligneDroite.style.width = "1.37vw";
		/*ligneDroite.style.backgroundColor = "green";*/

	} else if (mediaQueryGrand.matches) {
		ligneDroite.style.left = "4.7vw";
		ligneDroite.style.width = "2.4vw";
		/*ligneDroite.style.backgroundColor = "red";*/

	} else {
		ligneDroite.style.left = "4.4vw";
		ligneDroite.style.width = "1.5vw";
		/*ligneDroite.style.backgroundColor = "gray";*/
	}

/*	console.log('petite');*/

}

function Histoire() {
	console.log("HELLO");
}


/*function hello() {*/
/*	document.getElementById("hello").animate(
		[
			{ padding : "15%"},
			{ padding : "10%"},
		],
		{
			duration : 500,
			iterations : 1,
			/*easing: 'easeOutInQuad',*/
			/*direction : "normal"*/
		/*
		);*/
/*}*/

 