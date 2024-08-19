console.log('JS OK')
// Richiamo elementi nel DOM
const emailAdd=document.getElementById('email');
const logBtn=document.getElementById('log-btn');
const notificationElement=document.getElementById('notification');
console.log('email:', emailAdd, 'log-btn:', logBtn, 'notification:', notificationElement);

//Aggiungo le mail autorizzate
const emailAuthorized = [
    "daniele.innamorato@wow.com" ,
    "giovanni.moretti@wow.com" ,
    "luca.rossi@wow.com" ,
];
console.log("emailAuthorized", emailAuthorized)

//aggiugo evento al bottone
logBtn.addEventListener('click', function() {
    const emailUser = emailAdd.value.trim();
    
    let emailFound = 0;
    
//Faccio un ciclo For per vedere se l'email è autorizzata

for (let i = 0; i < emailAuthorized.length; i++) {
    if (emailUser === emailAuthorized[i]) {
        emailFound = 1;
        break;
    }
}
//Mostro il  risultato in pagina
if (emailFound) {
    notificationElement.innerHTML = "Accesso autorizzato. Benvenuto!";
} else {
    notificationElement.innerHTML = "Accesso negato. Email non autorizzata.";
}
});