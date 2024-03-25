// Jour Travaille

function JourTravaille(date) {
    if (date.getDay() === 0 || date.getDay() === 6) {
        return "Non, aujourd'hui nous sommes le week-end";
    } else {
        return "Oui, aujourd'hui nous sommes un jour de travail";
    }
}