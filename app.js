document.addEventListener("DOMContentLoaded", () => {
    
    const myCustomArticle = document.createElement("article")
    
    myCustomArticle.innerHTML = `
    <p>Brownie lollipop <span>carrot cake</span> gummies lemon drops sweet roll dessert tiramisu. Pudding muffin <span>cotton candy</span> croissant fruitcake tootsie roll. Jelly jujubes brownie. Marshmallow jujubes topping sugar plum jelly jujubes chocolate.</p>
    
        <p>Tart bonbon soufflé gummi bears. Donut marshmallow <span>gingerbread cupcake</span> macaroon jujubes muffin. Soufflé candy caramels tootsie roll powder sweet roll brownie <span>apple pie</span> gummies. Fruitcake danish chocolate tootsie roll macaroon.</p>
    `
    
    myCustomArticle.addEventListener('click', e => {
        if (e.target.nodeName === "SPAN") console.log("Span clicked " + e.target.textContent)
    })
    
    document.body.appendChild(myCustomArticle)
})