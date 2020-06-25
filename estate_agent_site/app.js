
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

// toggle to drop-navi

const toggle = document.querySelector('.navi-toggle');

const dropNavi = document.querySelector('.drop-navi');

const showPic = document.querySelector('.show-casepicture');
////////////////////////////////

toggle.addEventListener('click', openDropNav);

// dropNavi.addEventListener('click', openDropNav);

showPic.addEventListener('click', openDropNav);

function openDropNav() {
        dropNavi.classList.toggle('see');
        // showPic.classList.toggle('move');
};





// window.addEventListener('scroll', function() {
        
//         const scr
        
//         console.log('Scrolled');

// });
