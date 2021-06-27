'use strict';

//TODO: Delcare all required variables
const openMenu = document.querySelector('.dropdown-open');
const closeMenu = document.querySelector('.dropdown-close');
const mobileMenu = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');
const body = document.body;
const scrollUp = document.querySelector('.scroll-up');
const headerSection = document.querySelector('.header-container');





// ============================================================
//TODO: Mobile navigation menu feature

//* Open mobile menu
const OpenMobileMenu = function() {
    mobileMenu.classList.add('menu-active');
    overlay.style.display = 'block';
    body.style.overflow = 'hidden';
}

//* Close mobile menu
const CloseMobileMenu = function(e) {
    mobileMenu.classList.remove('menu-active');
    body.style.overflow = 'auto';
    overlay.style.display = 'none';
}

//* Add event listener to "openMenu"
openMenu.addEventListener('click', e => {
    OpenMobileMenu();
})

//* Add event listener to "closeMenu"
closeMenu.addEventListener('click', e => {
    CloseMobileMenu();
})

//* Close when overlay is clicked: Add event listener to "closeMenu"
overlay.addEventListener('click', e => {
    CloseMobileMenu();
})

//* Close when escape key is pressed: Add keydown event listener
document.addEventListener('keydown', e => {
    if (e.key == 'Escape') {
        CloseMobileMenu(e);
    }
})
//===========================================================


//TODO: Scroll-Up feature 

scrollUp.addEventListener('click', e => {
    headerSection.scrollIntoView({behavior: 'smooth'});
})
