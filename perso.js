class Produit {
    constructor(name, id, img, price) {
        this.name = name;
        this.id = id;
        this.img = img;
        this.price = price;
    }
}

var board = [
    new Produit("Skateboard", "sk", "skateboard-removebg-preview.png", 69.99),
    new Produit("Longboard Carving", "lg1", "longboard1-removebg-preview.png", 99.99),
    new Produit("Longboard", "lg2", "longboard2-removebg-preview.png", 119.99),
    new Produit("Mini-Cruiser", "mi", "mini-cruiser-removebg-preview.png", 44.99)
]

function recupid() {
    let produit_id = new URLSearchParams(window.location.search).get("id");
    console.log(produit_id);
    var nom;
    var image;
    var prix;
    for (let x in board) {
        if (produit_id==board[x][1]) {
            nom = board[x][0];
            image = board[x][2];
            prix = board[x][3];
        }
    }
    console.log(nom, image, prix);
}

