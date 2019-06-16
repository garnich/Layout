window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled >= 450) {
        document.querySelector('.topButton').classList.remove('hide');
    };

    if (scrolled < 450) {
        document.querySelector('.topButton').classList.add('hide');
    };
}

document.querySelector('.menu__icon').addEventListener('click', function(e) {
    e.preventDefault;
    document.querySelector('.menu__icon').classList.toggle('menu_state_open');
    document.querySelector('nav').classList.toggle('show');
    console.log(document.querySelector('nav ul'))
  });