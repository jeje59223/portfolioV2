// Ekko Lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
})

// Carousel de texte
$('.carousel').carousel({
    interval: 2500, // interval toutes les 2.5 secondes
    pause: 'null' // annuler le fait de mettre en pause quand on a la souris dessus
})

// Navbar Animation
$(window).scroll(function(){
    if($(this).scrollTop() > 30) {
        $('.navbar').addClass('opaque'); /* si on scroll a plus de 30 du top on ajoute la class opaque */
    } else {
        $('.navbar').removeClass('opaque'); /* sinon on supprime la class opaque */
    }
})

// Afficher l'année automatiquement
        var today=new Date();
		var annee = today.getFullYear();
		var sannee = document.getElementById('year');
        sannee.innerHTML = annee;
        
        