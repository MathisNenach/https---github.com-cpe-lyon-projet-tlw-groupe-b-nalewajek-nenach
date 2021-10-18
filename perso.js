class Produit {
    constructor(name, img, price) {
        this.name = name;
        this.img = img;
        this.price = price;
    }
}

var boards = [
    JSON.parse('{ "name":"Skateboard", "img":"skateboard-removebg-preview.png", "price":69.99 }'),
    JSON.parse('{ "name":"Longboard Carving", "img":"longboard1-removebg-preview.png", "price":99.99 }'),
    JSON.parse('{ "name":"Longboard", "img":"longboard2-removebg-preview.png", "price":119.99 }'),
    JSON.parse('{ "name":"Mini-Cruiser", "img":"mini-cruiser-removebg-preview.png", "price":49.99 }')
]

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
    console.log(nom, image, prix);
    document.getElementById("nom").innerHTML ="Personalisation du " + nom;
    document.getElementById("image").src = images-projet/image;
    document.getElementById("prix").innerHTML = prix;
})