// This toggle function allows a click function to make a new css class appear and disapear on an existing element that will cause the element to appear or not. 

// I've selected the element I want to click on which is  const arrow. I used querySelector as that pick up the first element with that class name of '.can'.

const can = document.querySelector('.can');

const arrow = document.querySelector('.arrow-dropdown');

//  We creat the event listener and include the function.

arrow.addEventListener('click', openNav);

// we use the toggle method and create a new class name. We should now inclue that class name in our css on the end of the intended element we want to appear. So in our css file we create another class name of (.can.show) and add for example display: block. 

function openNav () {
        can.classList.toggle('show');
};

