function estNombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    } else if (nombre <= 3) {
        return true;
    } else if (nombre % 2 === 0 || nombre % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= nombre) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

let nombre1 = 5;
let nombre2 = 7;
let resultat = sommeNombresPremiers(nombre1, nombre2);
if (resultat !== false) {
    console.log(`La somme des nombres premiers ${nombre1} et ${nombre2} est ${resultat}.`);
} else {
    console.log("Au moins l'un des nombres n'est pas premier.");
}