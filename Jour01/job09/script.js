function tri(numbers, order) {
    const sortedArray = [...numbers];

    if (order === "asc") {
        sortedArray.sort((a, b) => a - b);
    } else if (order === "desc") {
        sortedArray.sort((a, b) => b - a);
    } else {
        console.error("Order should be 'asc' or 'desc'");
        return null;
    }
    return sortedArray;
}

const array = [4, 2, 7, 1, 9];
console.log("Array avant le tri :", array);
console.log("Array trié par ordre ascendant :", tri(array, "asc"));
console.log("Array trié par ordre descendant :", tri(array, "desc"));
console.log("Array après le tri :", array);