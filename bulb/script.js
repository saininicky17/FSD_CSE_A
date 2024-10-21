const numBulbsInput = document.getElementById('numBulbs');
const searchButton = document.getElementById('searchBtn');
const container = document.getElementById('container');
searchButton.addEventListener('click', () => {
    container.innerHTML = '';
    const numBulbs = parseInt(numBulbsInput.value);
    const bulbList = [];

    for (let i = 0; i < numBulbs; i++) {
        const bulbDiv = document.createElement('div');
        const bulbImage = document.createElement('img');
        bulbImage.src = 'Lightbulb.png';
        bulbImage.alt = 'Bulb';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                bulbImage.src = 'glowbulb.png'; 
            } else {
                bulbImage.src = 'Lightbulb.png'; 
            }
        });
        bulbDiv.appendChild(bulbImage);
        bulbDiv.appendChild(checkbox);
        container.appendChild(bulbDiv);
    }
});
