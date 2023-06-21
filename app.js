const t0 = performance.now()

const fragment = document.createDocumentFragment()

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    fragment.appendChild(newElement)
}

document.body.appendChild(fragment)

const t1 = performance.now()

console.log(`The code took ${t1 - t0} milliseconds`)