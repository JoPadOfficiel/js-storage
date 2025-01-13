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






/*

// Version 2 with tableau

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
    //console.log(contacts);
    for (let i = 0; i < contacts.length; i++) {    
        console.log(contacts[i]);
        localStorage.setItem('contacts', JSON.stringify(contacts))[i];
        afficherContacts();
        //console.log(contacts[i].nom);
        //console.log(contacts[i].email);
        //console.log(contacts[i].telephone);
    }
    function afficherContacts() {
        const liste = document.getElementById('listeContacts');
        liste.innerHTML = contacts.map((c) => 
            `- Nom : ${c.nom}, Email : ${c.email}, Téléphone : ${c.telephone}`
        ).join('<br>');
    }
    afficherContacts();
});
*/