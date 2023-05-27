const button = document.querySelector('button')
const rgb = document.querySelector('p')
const body = document.querySelector('body');

const random = () => {
    r = Math.floor(Math.random()* 255);
    g = Math.floor(Math.random()* 255);
    b = Math.floor(Math.random()* 255);
    const doneRgb = `rgb(${r},${g},${b})`;
    rgb.innerHTML = doneRgb;
    body.style.backgroundColor = doneRgb
}

button.addEventListener('click',random)
