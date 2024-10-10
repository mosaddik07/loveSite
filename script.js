const yeah = document.getElementById('yeah');
const no = document.getElementById('no');
const title = document.getElementById('title');
const btn = document.querySelectorAll('.btn');
const h1 = document.querySelector('#h1');
const h2 = document.querySelector('#h2');
h1.style.display = "none";
h2.style.display = 'none'

yeah.addEventListener('click', () => {
    title.style.display = "none";
    btn[0].style.display = 'none';
    btn[1].style.display = 'none';
    h1.style.display = "block"
})

no.addEventListener('click', () => {
    title.style.display = "none";
    btn[0].style.display = 'none';
    btn[1].style.display = 'none';
    h2.style.display = "block"
})