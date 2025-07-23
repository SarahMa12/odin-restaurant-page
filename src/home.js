import dimsumImage from "./images/dim-sum.jpg";
import oceanImage from "./images/ocean.jpg";
import './home.css';

function loadHome() {
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = "";

    const img = document.createElement('img');
    img.src = dimsumImage;
    contentDiv.appendChild(img);

    const wrapper = document.createElement('div');
    wrapper.classList.add('container');
    contentDiv.appendChild(wrapper);

    const locationDiv = document.createElement('div')
    locationDiv.classList.add('location');

    const img2 = document.createElement('img');
    img2.src = oceanImage;
    locationDiv.appendChild(img2);

    const location = document.createElement('p');
    location.textContent = "Location: 2608 Ocean Ave, San Francisco, CA, 94132";
    locationDiv.appendChild(location);


    wrapper.appendChild(locationDiv);

    const hoursHeader = document.createElement('h1');
    hoursHeader.textContent = "Working Hours";
    wrapper.appendChild(hoursHeader);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add("hours");
    wrapper.appendChild(hoursDiv)

    days.forEach((day) => {
        const dayDiv = document.createElement('div');
        const hourDiv = document.createElement('div');
        dayDiv.textContent = day;
        if(day == 'Monday') {
            hourDiv.textContent = 'Closed';
        } else if(day == 'Friday' || day == 'Saturday') {
            hourDiv.textContent = '11:00 AM - 10:00 PM';
        } else {
            hourDiv.textContent = '11:00 AM - 9:30 PM';
        }
        hoursDiv.appendChild(dayDiv);
        hoursDiv.appendChild(hourDiv);
    });

}

export default loadHome;
