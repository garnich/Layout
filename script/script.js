window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled >= 450) {
        document.querySelector('.topButton').classList.remove('hide');
    };

    if (scrolled < 450) {
        document.querySelector('.topButton').classList.add('hide');
    };
}