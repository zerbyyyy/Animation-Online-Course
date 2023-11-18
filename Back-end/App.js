const express = require('express');
const app = express();

// Définir le dossier statique pour servir les fichiers CSS, JS, etc.
app.use(express.static('Front-end/Public'));

// Définir la route pour la page HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Front-end/Public/index.html');
});

// D'autres routes ou configurations peuvent être ajoutées ici...

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
    console.log(`http://localhost:${port}`);
});
