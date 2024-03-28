const jsonStringData = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

function jsonValueKey(jsonString, key) {
    try {
        const obj = JSON.parse(jsonString);
        return obj[key];
    } catch (error) {
        console.error("Erreur de syntaxe JSON :", error);
        return null;
    }
}

const key = "city";
const cityValue = jsonValueKey(jsonStringData, key);

const resultElement = document.getElementById("result");
resultElement.textContent = "La ville est : " + cityValue;