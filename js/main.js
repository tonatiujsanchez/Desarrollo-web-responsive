const btnMenuNav = document.querySelector('#icon-menu-nav');
const menuNav = document.querySelector('.navbar');


btnMenuNav.addEventListener( 'click', ()=>{
    menuNav.classList.toggle('menu-toggle');
});