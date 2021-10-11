class Produit {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

let skate = new Produit("Skateboard", sk)
let long1 = new Produit("Longboard Carving", lg1)
let long2 = new Produit("Longboard", lg2)
let mini = new Produit("Mini-Cruiser", mi)

let sk = new URLSearchParams(window.location.search).get("sk")
let lg1 = new URLSearchParams(window.location.search).get("lg1")
let lg2 = new URLSearchParams(window.location.search).get("lg2")
let mi = new URLSearchParams(window.location.search).get("mi")