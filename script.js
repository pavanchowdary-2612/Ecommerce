

const bar1 = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar1) {
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
