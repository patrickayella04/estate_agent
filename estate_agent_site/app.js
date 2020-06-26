// Country option dropdwon
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

// toggle to drop-navi

const toggle = document.querySelector('.navi-toggle');

const dropNavi = document.querySelector('.drop-navi');

const showPic = document.querySelector('.show-casepicture');


toggle.addEventListener('click', openDropNav);

showPic.addEventListener('click', openDropNav);

function openDropNav() {
        dropNavi.classList.toggle('see');
};
//////////////////////////////////

const xbtn = document.querySelector('.xbtn');
const dropscrollNavi = document.querySelector('.scroll-navi');

window.addEventListener('scroll', function () {
        // const scrollable = document.documentElement.scrollHeight - window.innerHeight;

        let scrolled = window.scrollY;
        
        

        if (scrolled >= 400) {
                
                xbtn.classList.toggle('xbtn-show');
        } 

        console.log(scrolled)
});




