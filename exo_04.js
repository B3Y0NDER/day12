document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.backgroundColor = '#f0f0f0';

const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'space-around';
document.body.appendChild(container);
function creerElement(titre, contenu) {
  const element = document.createElement('div');
  element.style.width = '200px';
  element.style.margin = '10px';
  element.style.padding = '15px';
  element.style.backgroundColor = 'white';
  element.style.borderRadius = '10px';
  element.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
  element.style.transition = 'transform 0.3s';
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';

  const titreElement = document.createElement('h3');
  titreElement.textContent = titre;
  element.appendChild(titreElement);

  const contenuElement = document.createElement('p');
  contenuElement.textContent = contenu;
  element.appendChild(contenuElement);

  container.appendChild(element);

  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, Math.random() * 1000);

  element.onmouseover = () => element.style.transform = 'scale(1.05)';
  element.onmouseout = () => element.style.transform = 'scale(1)';
}
fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => creerElement('Chuck Norris Joke', data.value));

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => creerElement('Your IP', data.ip));

fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => creerElement('Advice', data.slip.advice));

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => response.json())
  .then(data => creerElement('Bitcoin Price', `$${data.bpi.USD.rate}`));

fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => creerElement('Cat Fact', data.fact));
