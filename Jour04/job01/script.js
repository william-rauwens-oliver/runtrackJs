document.getElementById("button").addEventListener("click", function() {
    fetch("expression.txt")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur de récupération du fichier.");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("expression").innerHTML = data;
    })
    .catch(error => {
        console.error("Erreur:", error);
    });
});