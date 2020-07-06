////////////////////////////////////////////////////////////

// const filter = document.querySelector('area-prop');

// filter.addEventListener('keydown', filterProperty);

// function filterProperty(e) {
//         const text = e.target.value;

//         console.log(text);
// };

const filter = document.querySelector('#info');

filter.addEventListener('keyup', filterProperty);

function filterProperty(e) {

    const postCode = e.target.value;

    console.log(postCode);
};

// function hello() {
//     const p = 'patrick';

//     console.log(p);
// };

// hello();
