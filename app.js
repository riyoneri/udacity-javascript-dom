const myCustomDiv = document.createElement("div")

const respondToTheClick = evt => {
    console.log(evt.target)
    console.log("A paragraph was clicked")
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener("click", respondToTheClick)

document.body.appendChild(myCustomDiv);