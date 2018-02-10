Douarking
====

A faire :

- [x] Affichage des parkings déjà renseignés (nom, type de véhicules, coordonnées GPS, nombre de places, email responsable, système de comptage) sous forme d'un tableau (comportant une dizaine de lignes "codées en dur" pour les tests)

- [x] Repli du tableau (afficher / masquer) en utilisant la fonction "collapse" de Bootstrap (pensez à inclure en plus de la bibliothèque bootstrap.js, jquery.js)

- [ ] Ajout d'un parking (non persistant) via un formulaire :
    - [ ] les données saisies sont vérifiées (validité, message d'erreurs, etc.)
    - [ ] les informations de contact sont auto-complétées (pour tester vous devrez activer la gestion de profils de votre navigateur)
    - [ ] le traitement du formulaire utilise des fonctions JavaScript du DOM (notamment, les méthodes createElement() et element.appendChild())
    - [ ] le succès de l'ajout est confirmé par un message éphémère
- [ ] Suppression d'un parking (non persistant) :
    - [ ] plusieurs solutions d'implémentation sont possibles, donc choisissez-en une en tenant compte de l'ergonomie
    - [ ] vous aurez probablement besoin de la méthode element.removeChild()
- [ ] Modification d'un parking (non persistant) :
    - [ ] plusieurs solutions d'implémentation sont possibles, donc choisissez-en une en tenant compte de l'ergonomie
    - [ ] vous aurez probablement besoin de la méthode element.innerHTML()
- [ ] Recherche dans le tableau :
    - [ ] la requête (texte libre) est saisie dans une barre de recherche
    - [ ] le résultat de la recherche est une liste de toutes les ressources correspondant à la requête
- [ ] Adaptation de votre site aux différents dispositifs ("responsive design", pour mobile, tablette, ordinateurs de bureau) :
    - [ ] pour tester, vous pouvez utiliser votre smartphone ou la "vue adaptative" disponible dans les Outils de développement fournis par les navigateurs.