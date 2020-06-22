
const can = document.querySelector('.can');
const arrow = document.querySelector('.arrow-dropdown');
const uk = document.querySelector('.country-option');
const jack = document.querySelector('.jack');


arrow.addEventListener('click', openNav);
uk.addEventListener('click', openNav);
jack.addEventListener('click', openNav);
    

function openNav() {
        can.classList.toggle('show');
};
