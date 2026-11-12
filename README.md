# QoD Tools — Centre de contrôle

Portail web public de présentation et de lancement local de **QoD Tools**, une suite Windows dédiée à 14 contrôles de qualité SIG et télécom.

## Site publié

<https://ben-moussa-wassim.github.io/qod-tools-control-center/>

## Fonctionnement

- Le catalogue, la recherche, les filtres et les captures fonctionnent entièrement dans le navigateur.
- Le sélecteur **FR/EN** traduit toute l’interface et mémorise la langue choisie dans le navigateur.
- Les traitements SIG restent dans l'application Windows locale.
- Le bouton de lancement utilise le protocole personnalisé `qodtools://open`.
- Aucune couche SIG, donnée client ou information de production n'est envoyée au site.

## Connexion locale

1. Installer QoD Tools et repérer le chemin complet de `QoD_Tools.exe`.
2. Télécharger [`downloads/qodtools-protocol.example.reg.txt`](downloads/qodtools-protocol.example.reg.txt).
3. Remplacer les deux occurrences de `C:\PATH\TO\QoD_Tools.exe` par le chemin réel, en conservant les doubles antislashs.
4. Enregistrer une copie avec l'extension `.reg`, puis l'ouvrir pour ajouter le protocole au profil Windows courant.
5. Revenir sur le site et utiliser **Ouvrir QoD Tools**.

Le modèle agit uniquement sous `HKEY_CURRENT_USER` et ne demande pas de privilèges administrateur. L'application locale doit valider strictement l'URI reçue et n'accepter que les actions prévues, notamment `qodtools://open`.

Pour retirer la passerelle, adapter puis utiliser [`downloads/qodtools-remove.example.reg.txt`](downloads/qodtools-remove.example.reg.txt).

## Développement local

Le site est statique et ne nécessite aucune dépendance ni étape de compilation.

```powershell
python -m http.server 4173
```

Ouvrir ensuite <http://127.0.0.1:4173/>.

## Publication

Le workflow `.github/workflows/pages.yml` publie automatiquement la branche `main` sur GitHub Pages.

## Données et captures

Les captures publiées utilisent des données synthétiques ou des chemins masqués. Aucun identifiant réseau client, coordonnée de production, secret ou source privée de l'application n'est inclus.

## Licence

Le code et les contenus sont publiés à des fins de présentation professionnelle. Aucune licence open source n'est accordée. Tous droits réservés.
