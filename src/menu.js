import './menu.css';
import siumaiImg from './images/siu-mai.png';
import lotusImg from './images/lotus-rice.png';
import chickenImg from './images/chicken-feet.png';
import iceLemonImg from './images/lemon-tea.png';
import fishWTomatoImg from './images/fish-fillet.png';
import porkCutletWBlackPepperImg from './images/pork-cutlet.jpg';


const contentDiv = document.getElementById('content');

function loadMenu() {
    // Create wrapper div
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapper');
    contentDiv.appendChild(wrapperDiv);

    const title = document.createElement('h1');
    title.textContent = "Menu";
    wrapperDiv.appendChild(title);

    // DIMSUM
    const dimsumDiv = document.createElement('div');
    wrapperDiv.appendChild(dimsumDiv);
    
    const dimsumHeading = document.createElement('h2');
    dimsumHeading.classList.add('heading');
    dimsumHeading.textContent = 'Dim Sum & Small Eats';
    dimsumDiv.appendChild(dimsumHeading);

    const dimsumCards = document.createElement('div');
    dimsumCards.classList.add('cards');
    dimsumDiv.appendChild(dimsumCards);

    createCard("Siu Mai (3)", siumaiImg, "Open-topped dumplings filled with shrimp and pork.", "6.00", dimsumCards);
    createCard("Chicken Lotus Sticky Rice (2)", lotusImg, "Chicken, sausage and mushrooms wrapped in a lotus leaf.", "8.00", dimsumCards);
    createCard("Braised Chicken Claws (3)", chickenImg, "Chewy chicken feet that are braised.", "5.50", dimsumCards);

    // DRINKS
    const drinksDiv = document.createElement('div');
    wrapperDiv.appendChild(drinksDiv);

    const drinksHeading = document.createElement('h2');
    drinksHeading.classList.add('heading');
    drinksHeading.textContent = "Drinks";
    drinksDiv.appendChild(drinksHeading);

    const drinksCards = document.createElement('div');
    drinksCards.classList.add('cards');
    drinksDiv.appendChild(drinksCards);

    createCard("Iced Lemon Tea", iceLemonImg, "Green tea with fresh squeezed lemon and honey.", "4.00", drinksCards)

    // RICE PLATES & NOODLES
    const ricenoodleDiv = document.createElement('div');
    wrapperDiv.appendChild(ricenoodleDiv);

    const ricenoodleHeading = document.createElement('h2');
    ricenoodleHeading.classList.add('heading');
    ricenoodleHeading.textContent = 'Rice Plates & Noodles';
    ricenoodleDiv.appendChild(ricenoodleHeading);

    const ricenoodleCards = document.createElement('div');
    ricenoodleCards.classList.add('cards');
    ricenoodleDiv.appendChild(ricenoodleCards);

    createCard("Baked Fish Fillet w/ Tomato Sauce", fishWTomatoImg, "Baked fish with tomato sauce and cheese on rice", "15.00", ricenoodleCards);
    createCard("Pork Cutlet w/ Black Pepper Sauce", porkCutletWBlackPepperImg, "Pan-fried pork cutlet with black pepper sauce on rice", "14.00", ricenoodleCards);
}


function createCard(name, imgSrc, desc, price, parentDiv) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const image = document.createElement('img');
    image.src = imgSrc;

    const title = document.createElement('h3');
    title.textContent = name;

    const description = document.createElement('p');
    description.textContent = desc;

    const priceTag = document.createElement('p');
    priceTag.textContent = `$${price}`;
    priceTag.classList.add('price');

    cardDiv.appendChild(image);
    cardDiv.appendChild(title);
    cardDiv.appendChild(description);
    cardDiv.appendChild(priceTag);

    parentDiv.appendChild(cardDiv);
}

export default loadMenu;