const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post('/api/signup', (req, res) => {
    const userData = req.body;
    console.log('Nouvel utilisateur enregistré:', userData);

    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier users.json:', err);
            res.status(500).json({ message: 'Erreur lors de la création du compte' });
            return;
        }

        let users = [];
        if (data) {
            users = JSON.parse(data).utilisateurs;
        }

        users.push(userData);

        fs.writeFile('users.json', JSON.stringify({ utilisateurs: users }, null, 4), err => {
            if (err) {
                console.error('Erreur lors de l\'enregistrement des données utilisateur:', err);
                res.status(500).json({ message: 'Erreur lors de la création du compte' });
            } else {
                console.log('Utilisateur enregistré avec succès:', userData);
                res.status(200).json({ message: 'Utilisateur enregistré avec succès !' });
            }
        });
    });
});

app.get('/connexion.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'connexion.html'));
});

app.get('/inscription.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'inscription.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
