// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    nome: "Maria",
    cognome: "Dulesova",
    eta: 31
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {
    document.getElementById ("studente").innerHTML += "<li>" + key + ": " + studente[key] + "</li>";
    console.log(key + ": " + studente[key]);
}


// Creare un array di oggetti di studenti.



// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.




