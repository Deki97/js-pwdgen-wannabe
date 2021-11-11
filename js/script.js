// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// Inserimento Nome
const userName = prompt('Inserisci il tuo nome:');
// console.log(userName);

// Inserimento Cognome
const userSurname = prompt('Inserisci il tuo cognome:');
// console.log(userSurname);

// Inserimento Colore Preferito
const favoriteColor = prompt('Inserisci il tuo colore preferito:');
// console.log(favoriteColor);


// Dichiarazione costante annoCorrente
const annoCorrente = 21;

// Conversione annoCorrente in stringa, cosi alla fine ho una concatenazione di tutte stringhe
const annoCorrenteAsString = annoCorrente.toString();


// Concatenazione Stringhe (Generazione Password Sicurissima)
const password = userName + userSurname + favoriteColor + annoCorrenteAsString;


// Output nel tag html <h1>
document.getElementById('passwordGenerata').innerHTML = 'La password generata è : ' + password;