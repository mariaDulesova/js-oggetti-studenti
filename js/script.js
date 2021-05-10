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

var classe = [
    {
        nome: "Settimio",
        cognome: "Severo",
        eta: 31
    },
    {
        nome: "Didio",
        cognome: "Giuliano",
        eta: 20
    },
    {
        nome: "Alessandro",
        cognome: "Severo",
        eta: 15
    },
    {
        nome: "Erennio",
        cognome: "Etrusco",
        eta: 17
    },
    {
        nome: "Treboniano",
        cognome: "Gallo",
        eta: 19
    },
    {
        nome: "Marco",
        cognome: "Aurelio",
        eta: 21
    },
    {
        nome: "Antonio",
        cognome: "Pio",
        eta: 20
    },
    {
        nome: "Lucio",
        cognome: "Vero",
        eta: 17
    },

]


// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
var nomeCognome =[]
for (var i = 0; i < classe.length; i++) {
    var nomeCognomeStudente = classe[i].nome + " " + classe[i].cognome;
    nomeCognome.push(nomeCognomeStudente);
    document.getElementById("classe").innerHTML += "<li>" +nomeCognomeStudente + "</li>";
}
console.log(nomeCognome);

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

//VERSIONE 1
// var utenteStudente = {
//     nome: prompt("Aggiungi il nome dello studente:"),
//     cognome: prompt("Aggiungi il cognome dello studente:"),
//     eta: parseInt(prompt("Aggiungi l'eta' dello studente:"))
// }

// classe.push(utenteStudente);
// console.log(classe);

//VERSIONE 2: CON CONTROLLI SU TIPO DI DATO INSERITO
do {
    var utenteStudenteNome = prompt("Aggiungi il nome dello studente:");
} while (!isNaN(utenteStudenteNome));

do {
    var utenteStudenteCognome = prompt("Aggiungi il cognome dello studente:");
} while (!isNaN(utenteStudenteCognome));

do {
    var utenteStudenteEta = parseInt(prompt("Aggiungi l'eta' dello studente:"));
} while (isNaN(utenteStudenteEta));

var utenteStudente = {}

utenteStudente.nome = utenteStudenteNome;
utenteStudente.cognome = utenteStudenteCognome;
utenteStudente.eta = utenteStudenteEta;

classe.push(utenteStudente);
console.log(classe);

