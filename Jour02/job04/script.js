document.addEventListener('keypress', function(event) {
    var textarea = document.getElementById('keylogger');
    var keyPressed = String.fromCharCode(event.which).toLowerCase();
    
    if (event.target !== textarea) {
        textarea.value += keyPressed;
    } else {
        textarea.value += keyPressed + keyPressed;
    }
});
