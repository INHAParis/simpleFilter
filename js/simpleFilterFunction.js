// Ce script nécessite de jquery
// Le nom de la fonction : « searchFilter() »
function simpleFilter() {
// cette variable définit le filtre sur la base de ce qu'on écrit dans le formulaire d'input (modifier l'idInput avec le bon id)
// toLowerCase() : tranforme en minuscule et rend la recherche insensible au Majuscule/minuscule
// normalize("NFD") et replace(): transforment les lettres accentuées et rendent insensible aux accents
	var value = $('#idInput').val().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// cette variable définit les éléments à montrer (changer le tag selon votre nécessité - ex. img, div, etc.)
	var showedElements = $('tag').filter(function() {
// cette fonction vérifie si le résultat colle bien avec la recherche (changer l'attribute - ex. class, title, etc.)
// toLowerCase() : tranforme en minuscule et rend la recherche insensible au Majuscule/minuscule
// normalize("NFD") et replace([...]): transforment les lettres accentuées et rendent insensible aux accents
	return $(this).attr('attribute').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(value) > -1;
	});
// cette variable définit les éléments à cacher (changer le tag selon votre nécessité - ex. img, div, etc.)
	var hiddenElements = $('tag').filter(function() {
// vérifier si le résultat ne colle pas avec la recherche (changer l'attribute - ex. class, title, etc.)
// toLowerCase() : tranforme en minuscule et rend la recherche insensible au Majuscule/minuscule
// normalize("NFD") et replace(): transforment les lettres accentuées et rendent insensible aux accents
	return $(this).attr('attribute').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(value) == -1;
	});
// cette fonction montre les résultats qui collent
	showedElements.show();
// cette fonction cache les résultats qui collent
	hiddenElements.hide();
// cette fonction vide la barre de l'input suite à la recherche (modifier l'idInput avec le bon id)
	$('#idInput').val('');
}
