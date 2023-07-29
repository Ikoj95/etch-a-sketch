const btn = document.querySelector('#btn');
const sketch = document.querySelector('.sketch');
const rmv = document.querySelector('#rmv');
let numberOfRows = 0;
let numberOfColumns = 0;


function askQuestion() {
      while (true) {
        numberOfRows = parseInt(prompt('Enter number of rows between 1-100'));
        numberOfColumns = parseInt(prompt('Enter number of columns between 1-100'));
        if(isNaN(numberOfRows) || isNaN(numberOfColumns)){
            alert('you did not enter number')
            return;
        }
        else if ((numberOfRows >= 1 && numberOfRows <= 100) && (numberOfColumns >= 1 && numberOfColumns <= 100)) {
            break;
        }
        else {
            alert('wrong entry,only whole numbers between 1-100 are acceptable');
        }
    }
}


function removeMe() {

    sketch.replaceChildren();

    /* another way using loop
    let elementToRemove = document.getElementsByClassName('container');
    while(elementToRemove.length > 0){
        elementToRemove[0].parentNode.removeChild(elementToRemove[0]);
    }
    */
}


function addingBoxes() {
    removeMe();
    askQuestion();
    for (let i = 0; i < numberOfRows; i++) {
        let container = document.createElement('div');
        container.classList.add('container');
        for (let j = 0; j < numberOfColumns; j++) {
            let boxes = document.createElement('div');
            boxes.classList.add('box');
            container.appendChild(boxes);
        }
        sketch.appendChild(container);
    }
}


btn.addEventListener('click', addingBoxes);



