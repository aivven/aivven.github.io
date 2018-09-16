var menuElem = document.querySelector('.menu');
    var titleElem = menuElem.querySelector('.menu__button');

    titleElem.onclick = function() {
      menuElem.classList.toggle('menu--open');
    };