// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const sizePicker = document.getElementById('sizePicker');
const pixelCanvas = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', makeGrid);

function makeGrid(event) {
// Your code goes here!
event.preventDefault();
var height = parseInt(event.target.inputHeight.value);
var width = parseInt(event.target.inputWidth.value);
resetCanvas();
buildCanvas(height, width);
}
function buildCanvas(height, width){
    for(var i = 0; i < height; i++){
        const newRow = document.createElement('tr');
        for(var j = 0; j < width; j++) {
            const newCol = document.createElement('td');
            newCol.style.backgroundColor = "white";
            newCol.addEventListener('mousedown', colorPixel);
            newRow.appendChild(newCol);
        }
        pixelCanvas.appendChild(newRow);
    } 
}
function resetCanvas(){
    while(pixelCanvas.firstChild){
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}
function colorPixel(event){
    event.currentTarget.style.backgroundColor = colorPicker.value;
}