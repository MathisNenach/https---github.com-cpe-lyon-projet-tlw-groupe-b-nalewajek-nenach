class Produit {
    constructor(name, img, price) {
        this.name = name;
        this.img = img;
        this.price = price;
    }
}

var boards = [
    new Produit("Skateboard", "images-projet/skateboard-removebg-preview.png", 69.99),
    new Produit("Longboard Carving", "images-projet/longboard1-removebg-preview.png", 99.99),
    new Produit("Longboard", "images-projet/longboard2-removebg-preview.png", 119.99),
    new Produit("Mini-Cruiser", "images-projet/mini-cruiser-removebg-preview.png", 44.99)
]





function recupid() {
    let produit_id = new URLSearchParams(window.location.search).get("id");
   console.log(produit_id);
    b = boards[produit_id];
    var nom = b.name;
    var image = b.img;
    var prix = b.price;
    console.log(nom, image, prix);
    document.getElementById("nom").innerHTML ="Personalisation du " + nom;
    document.getElementById("image").src = image;
    document.getElementById("prix").innerHTML = prix;
}