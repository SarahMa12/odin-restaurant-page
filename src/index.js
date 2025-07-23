import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js'


const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');


homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contentDiv.innerHTML = "";
    loadHome();
});

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contentDiv.innerHTML = "";
    loadMenu();
});

aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contentDiv.innerHTML = "";
    loadAbout();
});


loadHome();