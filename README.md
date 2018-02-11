Douarking
====

A faire :

- [x] Affichage des parkings déjà renseignés (nom, type de véhicules, coordonnées GPS, nombre de places, email responsable, système de comptage) sous forme d'un tableau (comportant une dizaine de lignes "codées en dur" pour les tests)

- [x] Repli du tableau (afficher / masquer) en utilisant la fonction "collapse" de Bootstrap (pensez à inclure en plus de la bibliothèque bootstrap.js, jquery.js)

- [x] Ajout d'un parking (non persistant) via un formulaire :
    - [x] les données saisies sont vérifiées (validité, message d'erreurs, etc.) // Mails peut passer si du genre george@gmail
    - [ ] les informations de contact sont auto-complétées (pour tester vous devrez activer la gestion de profils de votre navigateur)
    - [x] le traitement du formulaire utilise des fonctions JavaScript du DOM (notamment, les méthodes createElement() et element.appendChild()) // uniquement utilisé .append()
    - [x] le succès de l'ajout est confirmé par un message éphémère // Utilisation des alertes bootstrap, pb d'affichage : overlay, accumulation de multiples messages...
- [x] Suppression d'un parking (non persistant) :
    - [x] plusieurs solutions d'implémentation sont possibles, donc choisissez-en une en tenant compte de l'ergonomie //Supression par une croix lors du visionnage de la table
    - [x] vous aurez probablement besoin de la méthode element.removeChild() .remove() Utilisé
- [x] Modification d'un parking (non persistant) :
    - [x] plusieurs solutions d'implémentation sont possibles, donc choisissez-en une en tenant compte de l'ergonomie //Modification par une icone lors du visionnage de la table ++ possibilitée de modifier plusieurs entrées à la fois et verifications des données
    - [x] vous aurez probablement besoin de la méthode element.innerHTML()  element.innerHTML() non utilisé
- [x] Recherche dans le tableau :
    - [x] la requête (texte libre) est saisie dans une barre de recherche // formulaire de recherche crée, Pas de Case sensitive et en mode Word Part, ++ certaines fonctionalitées de recherches
    - [x] le résultat de la recherche est une liste de toutes les ressources correspondant à la requête
- [ ] Adaptation de votre site aux différents dispositifs ("responsive design", pour mobile, tablette, ordinateurs de bureau) :
    - [ ] pour tester, vous pouvez utiliser votre smartphone ou la "vue adaptative" disponible dans les Outils de développement fournis par les navigateurs.