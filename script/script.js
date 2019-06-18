let button = document.querySelector('.button-top').classList;
window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    return (scrolled >= 450) ? button.remove('hide') : button.add('hide');
}

document.querySelector('.header__menu-icon').addEventListener('click', function(e) {
    e.preventDefault;
    document.querySelector('.header__menu-icon').classList.toggle('header__menu-icon--open');
    document.querySelector('.header__navigation').classList.toggle('show');
});

document.querySelector('.header__navigation-menu').addEventListener('click', function(e) {
    e.preventDefault;
    if (e.target.tagName == 'LI') {
        e.target.childNodes[0].click();
    }
  });