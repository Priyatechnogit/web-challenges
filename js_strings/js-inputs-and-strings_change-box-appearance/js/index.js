console.clear();

const box = document.querySelector('[data-js="box"]');
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

inputColor.addEventListener('click', () => {
    const newColor = inputColor.value;
    box.style.backgroundColor = `hsl(${newColor}, 70%, 50%)`; 
    
});


inputRadius.addEventListener('click', () => {
    const radius = inputRadius.value;
    box.style.borderRadius = `${radius}%`;
    
});

inputRotation.addEventListener('click', () => {
    const rotation = inputRotation.value;
    box.style.transform = `rotate(${rotation}deg)`;
    
});



