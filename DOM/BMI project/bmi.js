const heightEl = document.getElementById('height');
// console.log(height);

const weight = dcument.getElementById('weight');
// console.log(weight);

const buttonpress = document.querySelector('button');

const bmi = (weight / ((height * height) / 1000)).toFixed(2);

height.addEventListener('click', (event) => {
        event.preventDefault();
        result = (bmi);
})
