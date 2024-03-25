function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Print dans la consol si c'est une année bissextile ou non
const annee = 2024;
if (bisextile(annee)) {
    console.log(annee + " est une année bissextile.");
} else {
    console.log(annee + " n'est pas une année bissextile.");
}