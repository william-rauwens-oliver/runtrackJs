function citation() {
    var CitationElement = document.getElementById("citation");
    var CitationText = CitationElement.textContent.trim();
    console.log(CitationText);
}

var button = document.getElementById("button");
button.addEventListener("click", citation);