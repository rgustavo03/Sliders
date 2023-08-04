
const logo = document.getElementById('logo')
const lighDarkBtn = document.getElementById('light-dark-btn');

const body = document.body
const header = document.getElementById('header')
const produtosContainer = document.getElementById('produtos-container')
const itemTitle = document.getElementsByClassName('item-titulo');

let modo = false;
// false = light
// true = dark

lighDarkBtn.addEventListener('click', () => {
    if(!modo) {
        // Se estiver false(light) -> escurecer
        modo = true
        
        header.style.backgroundColor = 'rgb(60, 60, 60)'
        body.style.backgroundColor = 'rgb(41, 41, 41)'
        body.style.color = 'white'
        logo.src = 'src/logo-white.png'
        lighDarkBtn.src = 'src/sol.png'

        produtosContainer.style.backgroundColor = 'rgb(60, 60, 60)'
        produtosContainer.style.borderColor = 'rgb(97, 97, 97)'

        Array.prototype.forEach.call(itemTitle, function(el) {
            el.style.color = 'white';
        });
    }
    else {
        // Se estiver false(light) -> escurecer
        modo = false

        header.style.backgroundColor = 'rgb(241, 241, 241)'
        body.style.backgroundColor = 'rgb(236, 236, 236)'
        body.style.color = 'black'
        logo.src = 'src/logo.png'
        lighDarkBtn.src = 'src/lua.png';

        produtosContainer.style.backgroundColor = 'white'
        produtosContainer.style.borderColor = 'rgb(220, 220, 220)'
        
        Array.prototype.forEach.call(itemTitle, function(el) {
            el.style.color = 'black';
        });

    }
})