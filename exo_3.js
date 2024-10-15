function display_planet_info(planet) {
let planetList = document.getElementById('planet-list');
if (!planetList) {
planetList = document.createElement('ul');
planetList.id = 'planet-list';
document.body.appendChild(planetList);
}
let planetItem = document.createElement('li');
let planetInfo = `
<h2>${planet.name}</h2>
<p>Diamètre : ${planet.diameter} km</p>
<p>Climat : ${planet.climate}</p>
<p>Terrain : ${planet.terrain}</p>
<p>Population : ${planet.population}</p>
  `;
planetItem.innerHTML = planetInfo;
planetList.appendChild(planetItem);
}
