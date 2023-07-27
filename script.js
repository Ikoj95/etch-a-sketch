const btn = document.querySelector('#btn');
const sketch = document.querySelector('.sketch');
const rmv = document.querySelector('#rmv');


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






function removeMe(){
    
    sketch.replaceChildren();
 
    /* second option
    let elementToRemove = document.getElementsByClassName('container');
    while(elementToRemove.length > 0){
        elementToRemove[0].parentNode.removeChild(elementToRemove[0]);
    }
    */
}

rmv.addEventListener('click',removeMe)