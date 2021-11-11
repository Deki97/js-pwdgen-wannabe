// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// Inserimento Nome
const userName = prompt('Inserisci il tuo nome:');
console.log(userName);


// Inserimento Cognome
const userSurname = prompt('Inserisci il tuo cognome:');
console.log(userSurname);


// Inserimento Colore Preferito
const favoriteColor = prompt('Inserisci il tuo colore preferito:');
console.log(favoriteColor);


// Concatenazione Stringhe (Generazione Password Sicurissima)
const password = userName + userSurname + favoriteColor + 21;


// Output nel tag html <h1>
document.getElementById('passwordGenerata').innerHTML = 'La password generata è : ' + password;