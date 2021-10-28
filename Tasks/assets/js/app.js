

window.addEventListener('resize', function () {
    document.querySelector(".width").innerHTML = "window width: " + window.innerWidth;
    document.querySelector(".height").innerHTML = "window height: " + window.innerHeight;


})

//task1
let pBtn = document.querySelector('.font-change')
let pText = document.querySelector('.text1')
pBtn.addEventListener('click', function () {
    pText.style.fontSize = '50px';
})

//task2
let getValue = document.querySelector('.getValue');
getValue.addEventListener('keyup', function () {
    console.log(getValue.value)
})


//task3

pText.setAttribute('title', 'myTitle');
pText.classList.add('text');


