const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', () => nav.classList.toggle('slide'));