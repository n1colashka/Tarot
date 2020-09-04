document.addEventListener('DOMContentLoaded', function() {
    
    var menuBtn = document.querySelector('.menu__btn');
    var menu = document.querySelector('.menu');
    var menuClose = document.querySelector('.menu__close');
    var menuSubitems = menu.querySelectorAll('.navigation-menu__item');
    var menuItems = menu.querySelectorAll('.navigation__item');
    var isMenuActive = false;
    var isSubMenuActive = false;

    menuBtn.addEventListener('click', function() {
        this.classList.add('active');
        menu.classList.add('active');
    });

    menuClose.addEventListener('click', function(event) {
        
        if (isSubMenuActive) {
            menuSubitems.forEach(function(item) {
                item.classList.remove('active');
            });
            isSubMenuActive = false;
        } else if (isMenuActive) {
            menuItems.forEach(function(item) {
                item.classList.remove('active');
            });
            menuClose.classList.remove('active');
            isMenuActive = false;
        } else {
            this.classList.add('active');
            menu.classList.remove('active');
        }
        
    });

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.add('active');
            isMenuActive = true;
            menuClose.classList.add('active');
        });
    });

    menuSubitems.forEach(function(item) {
        item.addEventListener('click', function() {
            item.classList.add('active');
            isSubMenuActive = true;
            menuClose.classList.add('active');
        });
    });
    
});