class Produit {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

var board = [
    new Produit("Skateboard", sk),
    new Produit("Longboard Carving", lg1),
    new Produit("Longboard", lg2),
    new Produit("Mini-Cruiser", mi)
]


for (let x in board) {
}

function recupid() {
    let produit_id = new URLSearchParams(window.location.search).get("id")
}