class Produit {
    constructor(name, img, price, id, custom) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.id = id;
        this.custom = custom;
    }
}

var boards = [
    JSON.parse('{ "name":"Skateboard", "img":"skateboard-removebg-preview.png", "price":69.99, "id":0, "custom":"im-skate" }'),
    JSON.parse('{ "name":"Longboard Carving", "img":"longboard1-removebg-preview.png", "price":99.99, "id":1, "custom":"im-long1" }'),
    JSON.parse('{ "name":"Longboard", "img":"longboard2-removebg-preview.png", "price":119.99, "id":2, "custom":"im-long2" }'),
    JSON.parse('{ "name":"Mini-Cruiser", "img":"mini-cruiser-removebg-preview.png", "price":49.99, "id":3, "custom":"im-mini" }')
]

function loadData() {
    fetch('perso.json')
    .then(function(response) {
        return response.json();
    })
    .then(function recupid() {
        let produit_id = new URLSearchParams(window.location.search).get("id");
        console.log(produit_id);
        b = boards[produit_id];
        var nom = b.name;
        var image = b.img;
        var prix = b.price;
        var identifiant = b.id;
        var customisation = b.custom;
        console.log(nom, image, prix);
        document.getElementById("nom").innerHTML ="Personalisation du " + nom;
        document.getElementById("image").src = "images-projet/" + image;
        document.getElementById("prix").innerHTML = prix + "€";
        document.getElementById("identifiant").innerHTML = "perso.html?id=" + identifiant;
        document.getElementById("customisation").innerHTML = customisation;
    })
}

function remplirTemplate()  {
    let template = document.querySelector("#listePlanches");
    for (let b of boards) {
        let clone = document.importNode(template.content, true);      
        newContent = clone.firstElementChild.innerHTML 
        .replace(/{{nom}}/g, b.name) 
        .replace(/{{image}}/g,"images-projet/" + b.img)
        .replace(/{{prix}}/g, b.price + "€")
        .replace(/{{identifiant}}/g, "perso.html?id=" + b.id)
        .replace(/{{custom}}/g, b.custom);

        clone.firstElementChild.innerHTML = newContent
        document.getElementById("grille").appendChild(clone);
    }
}