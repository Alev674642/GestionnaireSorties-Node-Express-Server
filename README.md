# GestionnaireSorties-Node-Express-Server

## Application client serveur développée en React.js, Node.js, Express, Typescript, MongoDb, Bootstrap.

### Réalisé en 2022

Serveur pour l'application Gestionnaire d'évènements.

L'application serveur est réalisée en Typescript, exécutée par Node.js, et utilise le framework Express, ainsi que les librairies suivantes : Bcrypt et Jsonwebtoken pour l'authentification, Mongoose et Mongoose-unique-validator pour la gestion de la base de données.

Les données de l'applications sont sauvegardées en base de donnes orientée documents MongoDb.

L'application permet de créer et partager des évènements qui seront visibles par les autres utilisateurs.

L'application repose sur le système d'authentification proposé par react-router-dom, basé sur l'échange de tokens d'identification générés par le serveur.

Les pages de l'application ne sont accessibles qu'aux utilisateurs authentifiés. Les évènements ne sont modifiables ou supprimables que par leur auteur. Par contre les évènements peuvent être signalés par tous les autres utilisateurs.

Se connecte à une base de données MongoDb, dont les identifiants de connexion doivent être enregistré dans les variables d'environnement du serveur (sécurisé)

### Licence

Projet sous licence MIT (cf. fichier Licence.txt)
