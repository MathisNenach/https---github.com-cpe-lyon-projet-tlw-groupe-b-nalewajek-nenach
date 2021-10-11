class Produit {
    constructor(name, img, price) {
        this.name = name;
        this.img = img;
        this.price = price;
    }
}

var boards = [
    new Produit("Skateboard", "skateboard-removebg-preview.png", 69.99),
    new Produit("Longboard Carving", "longboard1-removebg-preview.png", 99.99),
    new Produit("Longboard", "longboard2-removebg-preview.png", 119.99),
    new Produit("Mini-Cruiser", "mini-cruiser-removebg-preview.png", 44.99)
]

function recupid() {
    let produit_id = new URLSearchParams(window.location.search).get("id");
    console.log(produit_id);
    var nom;
    var image;
    var prix;
    for (let b of boards) {
        if (produit_id == b) {
            nom = b.name;
            image = b.img;
            prix = b.price;
        }
    }
    console.log(nom, image, prix);
}

