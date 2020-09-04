document.addEventListener('DOMContentLoaded', function() {
    
    var menuBtn = document.querySelector('.menu__btn');
    var menu = document.querySelector('.menu');
    var menuClose = document.querySelector('.menu__close');

    menuBtn.addEventListener('click', function() {
        this.classList.add('active');
        menu.classList.add('active');
    });

    menuClose.addEventListener('click', function() {
        this.classList.add('active');
        menu.classList.remove('active');
    });
    
});