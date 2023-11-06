// cette ligne permet d'être sûr que le document est prêt à utiliser jQuery
$(function() {
    console.log('script prêt et chargé')
    /*  
    Quand je clique sur un élément de la navigation, 
    le composant : 
    1. met en avant le lien sur lequel je viens de cliquer
    2. affiche l'image adéquate
    3. affiche le paragraphe adéquat

    Console: Débug

    */
   var nom = "Gaspard"
   var pseudo ="ded"
   console.log (nom, pseudo)
   console.log ('Bonjour '+nom+' 'pseudo)

$(".js-links a").on('clic'), function(event) {
    event.prevent.Default();
    console.log('clic')
}

    
});