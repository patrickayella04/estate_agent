// Country option dropdwon function
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
//////////////////////////////////

// toggle to drop-navi function

const toggle = document.querySelector('.navi-toggle');
const dropNavi = document.querySelector('.drop-navi');
const showPic = document.querySelector('.show-casepicture');

toggle.addEventListener('click', openDropNav);

showPic.addEventListener('click', openDropNav);

function openDropNav() {
        dropNavi.classList.toggle('see');
};
//////////////////////////////////

// Scroll function
const dropscrollNavi = document.querySelector('.scroll-navi');
const hamburger = document.querySelector('li.hamburger');

window.addEventListener('scroll', function () {
        let scrolled = window.scrollY;

        if (scrolled > 500) {
                dropNavi.classList.add('hide-navi');
                hamburger.classList.add('show-ham');
        } else if (scrolled < 500) {
                dropNavi.classList.remove('hide-navi');
                hamburger.classList.remove('show-ham');
        }
});
//////////////////////////////////////



//////////////////////////////////////



