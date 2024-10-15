function check_route(url) {
  fetch(url)
.then(response => {
if (response.ok) {
console.log("all is good");
} else {
throw new Error("Réponse du serveur non valide");
}
})
.catch(error => {
console.log("shit happens");
console.error("Détails de l'erreur :", error);
});
}
