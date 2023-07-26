const btn = document.querySelector('#btn');
const sketch = document.querySelector('.sketch');


function addingBoxes() {
    for (let i = 0; i < 5; i++) {
        let container = document.createElement('div');
        container.classList.add('container');
        for (let j = 0; j < 6; j++) {
            let boxes = document.createElement('div');
            boxes.classList.add('box');
            container.appendChild(boxes);
        }
        sketch.appendChild(container);
    }
}
btn.addEventListener('click',addingBoxes);