window.addEventListener('scroll', function() {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;

    var footer = document.getElementById('footer');
    if (scrollPercentage < 25) {
        footer.style.backgroundColor = '#ff0000';
    } else if (scrollPercentage < 50) {
        footer.style.backgroundColor = '#ff9900';
    } else if (scrollPercentage < 75) {
        footer.style.backgroundColor = '#ffff00';
    } else {
        footer.style.backgroundColor = '#00ff00';
    }
});