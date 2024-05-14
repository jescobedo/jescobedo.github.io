const hamburgerToggle = document.querySelector('.hamburger-toggle');
const navLinksMobile = document.querySelector('.nav-links-mobile');

hamburgerToggle.addEventListener('click', () => {
    navLinksMobile.classList.toggle('show');
});