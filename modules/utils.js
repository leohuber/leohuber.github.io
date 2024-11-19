import u from '../lib/umbrella.esm.js';
import anime from '../lib/anime.es.js';

export function greet(name) {
  const greetingElement = document.createElement('p');
  greetingElement.textContent = `Hello, ${name}!`;
  document.body.appendChild(greetingElement);
}

export function animateElement() {
  const element = u('#mySvg').first();
  if (element) {
    anime({
      targets: element,
      translateX: 250,
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  }
}