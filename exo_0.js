function my_fetch(url) {
fetch(url)
    .then(response => response.json())
    .then(data => {
console.log(data);
})
.catch(error => {
console.error("Une erreur s'est produite :", error);
});
}
