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
// const ham = document.querySelector('.hamburger');
const dropNavi = document.querySelector('.drop-navi');
const showPic = document.querySelector('.show-casepicture');

toggle.addEventListener('click', openDropNav);

// ham.addEventListener('click', openDropNav);

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

        if (scrolled < 500) {
                dropNavi.classList.add('hide-navi');
                hamburger.classList.add('show-ham');
        } else if (scrolled > 500) {
                dropNavi.classList.remove('hide-navi');
                hamburger.classList.remove('show-ham');
        } 
});
//////////////////////////////////////
// Panel function
        $('.tab-list').each(function () {  // Find lists of tabs
                let $this = $(this); // Store this list
                let $tab = $this.find('li.active'); // Get the active list item
                let $link = $tab.find('a'); // Get link from active tab
                let $panel = $($link.attr('href')); // Get active panel

                $this.on('mouseover', '.tab-control', function (e) { // When click/mouseover on tab
                        e.preventDefault(); // Prevent link behavior
                        let $link = $(this); // Store the current link
                        let id = this.hash; // Get href of clicked tab

                        if (id && !$link.is('.active')) { // If not currently active
                                $panel.removeClass('active'); // Make panel inactive
                                $tab.removeClass('active'); // Make tab inactive

                                $panel = $(id).addClass('active'); // Make new panel active
                                $tab = $link.parent().addClass('active'); // Make new tab active
                        }
                });
        });

        
//////////////////////////////////////

// Hover drop panel menue function 

//Add.active class to each li.tab in html to activate below function 

let panel = document.getElementsByClassName('tab-control');

for (let i = 0; i < panel.length; i++) {
        let j = i;

        panel[j].addEventListener('mouseover', showPanel)
};


let tabPanel = document.getElementsByClassName('tab-panel');


function showPanel() {
        
        for (let i = 0; i < tabPanel.length; i++) {
                let p = i;

                tabPanel[p].classList.add('see-panel');
        }

};


////////////////////////////////////////

let outSide = document.getElementsByTagName('div');

for (let i = 0; i < outSide.length; i++) {

        outSide[i].addEventListener('click', removePanel);
        
}

function removePanel() {
        for (let i = 0; i < tabPanel.length; i++) {
                let p = i;
                tabPanel[p].classList.remove('see-panel');
        }
};

//////////////////////////////////////////////////////////////



