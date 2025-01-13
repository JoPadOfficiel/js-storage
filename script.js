const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Afficher les contacts
function afficherContacts() {
    const liste = document.getElementById('listeContacts');
    liste.innerHTML = contacts.map((c, i) => 
        `- ${i+1}. Nom : ${c.nom}, Email : ${c.email}, Téléphone : ${c.telephone}`
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
    
    // Sauvegarder et actualiser
    localStorage.setItem('contacts', JSON.stringify(contacts));
    afficherContacts();
    e.target.reset();
});

afficherContacts();
