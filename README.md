# simpleFilter.js
A simple jquery based tool that allows to search/filter items in an html page (tag + attribute)

This script requires jquery

**[Test the DEMO](https://skylab.inha.fr/simpleFilter/)**

Il s'agit d'une simple fonction qui permet de filtrer des objets dans une page html sur la base du contenu d'un attribut :
Ex. des images (img) sur la base de l'attribut "titre" (title="").
Pour fonctionner, le script nécessite de [jquery](https://jquery.com/).

Vous pouvez choisir entre deux solutions :
- [simpleFilter.js](https://github.com/INHAParis/simpleFilter/blob/master/js/simpleFilter.js) : si vous souhaitez intégrer le script dans votre page en utilisant la touche « Entrée » pour lancer la fonction ;
- [simpleFilterFunction.js](https://github.com/INHAParis/simpleFilter/blob/master/js/simpleFilterFunction.js) : pour utiliser le script en tant que fonction (ex. sur un bouton onclick="simpleFilter()")

Il suffit avoir un input dans l'html :
...

<input type="text" id="inputFilter" placeholder="Saisir votre filtre..."></input>

...

et des objets à filtrer (ex. img)
...

<img src="img1.jpg" title="Fleurs">
<img src="img2.jpg" title="Paysage">
<img src="img3.jpg" title="Ville">

...
