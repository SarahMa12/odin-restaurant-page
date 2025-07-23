import './about.css';
import ggbImg from './images/golden-gate-bridge.jpg';

function loadAbout() {
    const contentDiv = document.getElementById('content');

    
    const descDiv = document.createElement('div');
    descDiv.classList.add('desc-div');
    descDiv.style.backgroundImage = `url(${ggbImg})`;
    contentDiv.appendChild(descDiv);


    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = "Wok Up is a cozy, casual Cantonese dim sum spot in San Francisco, offering a variety of dim sum, noodles, rice dishes, and small eats. With its warm dishes and laid-back atmosphere, it’s an ideal stop on a foggy day in the city.";
    descDiv.appendChild(desc);

}

export default loadAbout;
