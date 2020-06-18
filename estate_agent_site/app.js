
const can = document.querySelector('.can');

const arrow = document.querySelector('.arrow-dropdown')


arrow.addEventListener('click', openNav);
        
function openNav () {
        can.classList.toggle('show');
}