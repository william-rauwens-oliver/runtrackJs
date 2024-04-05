const http = require('http');
const fs = require('fs');

// Créez un serveur HTTP
const server = http.createServer((req, res) => {
    // Vérifiez si la requête est une requête POST
    if (req.method === 'POST') {
        let body = '';

        // Capturer les données du formulaire
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Une fois que toutes les données sont reçues
        req.on('end', () => {
            // Analysez les données du formulaire JSON
            const formData = JSON.parse(body);

            // Enregistrez les données dans un fichier JSON
            fs.writeFile('user_data.json', JSON.stringify(formData), err => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('Erreur lors de l\'enregistrement des données');
                } else {
                    res.statusCode = 200;
                    res.end('Données enregistrées avec succès');
                }
            });
        });
    } else {
        // Si ce n'est pas une requête POST, renvoyer une erreur
        res.statusCode = 404;
        res.end('Page non trouvée');
    }
});

// Écoutez le port 3000
server.listen(3000, () => {
    console.log('Le serveur écoute sur le port 3000');
});
