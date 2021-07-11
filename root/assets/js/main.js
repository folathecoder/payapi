'use strict';

//TODO: Delcare all required variables
const openMenu = document.querySelector('.dropdown-open');
const closeMenu = document.querySelector('.dropdown-close');
const mobileMenu = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');
const body = document.body;
const scrollUp = document.querySelector('.scroll-up');
const headerSection = document.querySelector('.header-container');
const htmlDom = document.documentElement;
const header = document.querySelector('.header');


// ============================================================
//TODO: Mobile navigation menu feature

//* Open mobile menu
const OpenMobileMenu = function() {
    mobileMenu.classList.add('menu-active');
    overlay.style.display = 'block';
    body.style.overflow = 'hidden';
    htmlDom.style.overflow = 'hidden';
}

//* Close mobile menu
const CloseMobileMenu = function(e) {
    mobileMenu.classList.remove('menu-active');
    body.style.overflow = 'auto';
    htmlDom.style.overflowY = 'auto';
    body.style.overflowX = 'hidden';
    htmlDom.style.overflowX = 'hidden';
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

// scrollUp.addEventListener('click', e => {
//     headerSection.scrollIntoView({behavior: 'smooth'});
// })

//===========================================================

//TODO: Notifications

const planBtn = document.querySelectorAll('.plan__button a');
const requestAccess = document.createElement('div');
requestAccess.classList.add('notification');
requestAccess.innerHTML = '<p>Request Sent!</p>';
header.prepend(requestAccess);

requestAccess.style.opacity = '0';
requestAccess.style.transform = 'translateX(120%)';

planBtn.forEach( btn => {
    console.log(btn);

    btn.addEventListener('click', function() {
        preventDefault();
        requestAccess.style.opacity = '1';
        requestAccess.style.transform = 'translateX(0%)';
    })
})

console.log(planBtn);



//TODO: Contact Page Email Validation

const emailField = document.querySelector('.email__field');
const emailEmpty = document.querySelector('.email__empty');
const emailInvalid = document.querySelector('.email__invalid');
const emailValid = document.querySelector('.email__valid');
const contactEmail = document.querySelector('#email__contact');
const contactBtn = document.querySelector('.contact__btn');

console.log(emailValid);

//TODO: Email Field Empty When Submit Button Is Clicked

// ==== Add email__error to email__field
// ==== display block on email__empty

//TODO: Email Format Is Wrong When The User Is Typing

// ==== Add email__error to email__field
// ==== display block on email__invalid


const validateContactEmail = function() {
    let mail = contactEmail.value;
    let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if(regx.text(mail)) {
        emailField.classList.add('.email__error-cleared');
        emailValid.style.display = 'block';

        emailField.classList.remove('.email__error');
        emailInvalid.style.display = 'none';
        
        return true;
    }
    else {
        emailField.classList.remove('.email__error-cleared');
        emailValid.style.display = 'none';

        emailField.classList.add('.email__error');
        emailInvalid.style.display = 'block';
        return false;
    }
}

contactBtn.addEventListener('click', (e) => {
    preventDefault();
    validateContactEmail();
});