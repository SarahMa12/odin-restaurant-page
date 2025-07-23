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
    setActiveButton(homeBtn);
});

menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contentDiv.innerHTML = "";
    loadMenu();
    setActiveButton(menuBtn);
});

aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contentDiv.innerHTML = "";
    loadAbout();
    setActiveButton(aboutBtn);
});

function setActiveButton(activeBtn) {
    [homeBtn, menuBtn, aboutBtn].forEach(btn => {
        btn.style.color = '';
    });
    activeBtn.style.color = 'rgba(151, 151, 84, 1)';
}

loadHome();
setActiveButton(homeBtn);