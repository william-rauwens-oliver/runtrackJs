function customCode(sequence, callback) {
    let position = 0;

    document.addEventListener('keydown', function (e) {
        if (e.key === sequence[position]) {
            position++;
            if (position === sequence.length) {
                position = 0;
                callback();
            }
        } else {
            position = 0;
        }
    });
}

function applyPlatformStyle() {
    const laPlatformContent = document.getElementById('LaPlateforme');
    laPlatformContent.classList.remove('hidden');
}

const customSequence = ['3', '6', '3', '6'];

customCode(customSequence, applyPlatformStyle);