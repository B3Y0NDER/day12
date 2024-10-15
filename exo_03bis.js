let pageActuelle = 1;

function afficherPlanetes(page) {

  fetch(`https://swapi.dev/api/planets/?page=${page}`)
    .then(reponse => reponse.json())
    .then(donnees => {
      const listePlanetes = document.getElementById('liste-planetes');
      listePlanetes.innerHTML = '';
      donnees.results.forEach(planete => {
        const elementPlanete = document.createElement('li');
        elementPlanete.textContent = planete.name;
        listePlanetes.appendChild(elementPlanete);
      });
      document.getElementById('bouton-precedent').disabled = !donnees.previous;
      document.getElementById('bouton-suivant').disabled = !donnees.next;
    })
    .catch(erreur => console.error('Erreur:', erreur));
}
document.getElementById('bouton-precedent').onclick = () => {
  if (pageActuelle > 1) {
    pageActuelle--;
    afficherPlanetes(pageActuelle);
  }
};
document.getElementById('bouton-suivant').onclick = () => {
  pageActuelle++;
  afficherPlanetes(pageActuelle);
};

document.getElementById('recherche').oninput = (event) => {
  const recherche = event.target.value.toLowerCase();
  const planetes = document.querySelectorAll('#liste-planetes li');
  planetes.forEach(planete => {
    planete.style.display = planete.textContent.toLowerCase().includes(recherche) ? '' : 'none';
  });
};

afficherPlanetes(pageActuelle);
