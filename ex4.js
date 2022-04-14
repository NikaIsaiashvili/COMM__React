const add = document.querySelector("#add");
const convert = document.querySelector("#convert");
const container = document.querySelector("#input-container");

const textOutputPlace = document.querySelector("#destination");
const inputTag = document.getElementsByTagName("input");


function addField() { 
    const newField = document.createElement('input');
        newField.setAttribute('type', 'text');
        container.appendChild(newField);
}

function convertText() {
    const fieldArray = [];
    for (let i = 0; i < inputTag.length; i++) {
        if (inputTag[i].type == 'text') {
            fieldArray.push(inputTag[i].value);
        }
    } 
    const divForInfo = document.createElement('div');
        textOutputPlace.appendChild(divForInfo);

    return divForInfo.innerHTML = JSON.stringify(fieldArray);
}


add.addEventListener("click", addField);
convert.addEventListener("click", convertText);     