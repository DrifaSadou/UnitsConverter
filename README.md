# Exercice 3: Units converter 🛣️🌡️

## Le Sujet

Pour cet exercice, tu dois développer une API web [RESTful](https://fr.wikipedia.org/wiki/Representational_state_transfer) proposant des services de conversion d'unités. Tu peux développer, au choix, cette API web en **JS avec Node.js** ou en **PHP**.

**Ne modifie aucun fichier dans le dossier "tests"** qui contient les tests automatiques qui nous permettront de vérifier le fonctionnement de ton code. Tu ne dois pas non plus déplacer ce dossier qui doit rester à la racine du dossier du projet.

### Résumé en video

[<img src="https://lebocal.academy/videos-thumbnails/video-youtube.png" width="500px" />](https://youtu.be/Q0cG3fJpfsg)

### Contraintes (PHP)

Si tu choisis de développer l'API web en PHP, tu devra utiliser uniquement PHP _vanilla_ (c'est à dire PHP sans _framework_ ou librairie). Ton application devra respecter les contraintes suivantes:

- Le **point d'entrée** unique pour **l'ensemble des routes** doit être un fichier nommé index.php et situé à la racine du dossier de l'exercice. Lorsque nous testerons ton code, l'ensemble du trafic sera redirigé vers ce fichier (quel que soit le verbe HTTP ou le chemin de destination de la requête).

### Contraintes (Node.js)

Si tu choisis de développer l'API web en JS avec Node.js, tu ne pourras utiliser que le framework [Express.js](https://expressjs.com/fr/) ou Node.js seul (sans _framework_ ou librairie). Ton application devra respecter les contraintes suivantes:

- Le fichier de démarrage de ton application doit être un fichier nommé server.js et situé à la racine du dossier de l'exercice.

- Ton application doit démarrer un serveur HTTP sur le **port 3000**.

- Le seul gestionnaire de packet autorisé est (npm)[https://www.npmjs.com/]. Lorsque nous testerons ton code, seule la commande `npm install` sera exécutée avant de lancer ton application.

### Les routes

Ton API web devra accepter le format JSON et répondre dans ce même format. Elle devra implémenter les routes suivantes:

- [GET /units](#units)
- [POST /convert/distance](#distance)
- [POST /convert/temperature](#temperature)

<hr />

<h4 id="units">GET /units</h4>

**Verbe** : GET
**Chemin** : /units

**Description** : Cette route permet d'obtenir la liste des unités disponibles pour la conversion, triée par catégories.

**Réponse** :

```
{
    "distance": ["km", "mile"],
    "temperature": ["celcius", "farenheit"]
}
```

<hr />

<h4 id="distance">POST /convert/distance</h4>

**Verbe** : POST
**Chemin** : /convert/distance

**Description** : Cette route permet de convertir une valeur de distance d'une unité vers une autre. Dans notre cas, des km vers les miles ou inversement. Pour la conversion, vous pouvez considérer que 1 km = 1.609 miles.

**Exemple de requête** :

```
{
    "unit": "km", // Unité de la valeur
    "convertTo": "mile", // Unité vers laquelle la conversion doit être effectuée
    "value": 1 // Valeur à convertir
}
```

**Exemple de réponse** :

```
{
    result: 1.609 // Résultat
}
```

<hr />

<h4 id="temperature">POST /convert/temperature</h4>

**Verbe** : POST
**Chemin** : /convert/temperature

**Description** : Cette route permet de convertir une valeur de température d'une unité vers une autre. Dans notre cas, des degrés celcius vers les degrés farenheit ou inversement. Pour la conversion, vous pouvez utiliser les formules suivantes:

- F° = (°C × 9/5) + 32
- C° = (°F − 32) × 5/9

**Exemple de requête** :

```
{
    {
      unit: "farenheit", // Unité de la valeur
      convertTo: "celcius", // Unité vers laquelle la conversion doit être effectuée
      value: 59 // Valeur à convertir
    }
}
```

**Exemple de réponse** :

```
{
    result: 15 // Résultat
}
```
