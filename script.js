// *** Exo 1 ***
/*
const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function afficherContacts() {
    const liste = document.getElementById('listeContacts');
    liste.innerHTML = contacts.map((c) => 
        `- Nom : ${c.nom}, Email : ${c.email}, Téléphone : ${c.telephone}`
    ).join('<br>');
}


// Ajouter un contact
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    
    contacts.push({
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value
    });
    
    // Enregistrer et actualiser
    localStorage.setItem('contacts', JSON.stringify(contacts));
    afficherContacts();
    e.target.reset();
});


afficherContacts();
*/

// *** Exo 2 **

const produits = JSON.parse(localStorage.getItem('produits')) || [];

function afficherProduits() {
    const liste = document.getElementById('listeProduits');
    liste.innerHTML = produits.map((p) => 
        `- ${p.produit} : ${p.prix}, €`
    ).join('<br>');
    // Calculer le total
    const total = produits.reduce((sum, p) => sum + parseFloat(p.prix), 0);
    
    /*
    let total = 0;
    for(let i = 0; i < produits.length; i++) {
        total += +produits[i].prix;
    }
    */
    liste.innerHTML += `<br><br>Total : ${total.toFixed(2)} €`;
}

// Ajouter un produit
document.getElementById('produitForm').addEventListener('submit', e => {
    e.preventDefault();
    
    produits.push({
        produit: document.getElementById('produit').value,
        prix: document.getElementById('prix').value,
    });
    
    // Enregistrer et actualiser
    localStorage.setItem('produits', JSON.stringify(produits));
    afficherProduits();
    e.target.reset();
});
