// Function to create/update the table
function makeGrid(event) {

    event.preventDefault();
    const tableEle = document.getElementById('pixelCanvas');

    // To clear the table. We can loop through the table and delete each row, but i found this to be useful.
    tableEle.innerHTML = "";

    const gridHeight = Number(document.getElementById('inputHeight').value);
    const gridWidth = Number(document.getElementById('inputWidth').value);

    for (var i = 0; i < gridHeight; i++) {
        const tableRowEle = document.createElement('tr');

        for (var j= 0; j < gridWidth; j++) {
            const tableColEle = document.createElement('td');
            tableRowEle.appendChild(tableColEle);
        }
        tableEle.appendChild(tableRowEle);
    }

    // I'm assuming every time submit buuton is pressed color needs to returned to default value.
    // otherwise this line not needed.
    document.getElementById('colorPicker').value = "#000000";
}

// add event listener to form
const buttonSubmitPressed = document.getElementById("sizePicker");
buttonSubmitPressed.addEventListener("submit", makeGrid);


// Function to change the color of table cell
function modifyColor(event) {

    cellColorEle = document.getElementById('colorPicker');
    cellColor = cellColorEle.value;

    tableCell = event.target;
    
    if (tableCell.tagName === 'TD') {
        tableCell.style.backgroundColor = cellColor;
    }
  }
  
// add event listener to table
const tableEle = document.getElementById("pixelCanvas");
tableEle.addEventListener("click", modifyColor);