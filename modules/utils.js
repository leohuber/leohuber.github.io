export function greet(name) {
  const greetingElement = document.createElement('p');
  greetingElement.textContent = `Hello, ${name}!`;
  document.body.appendChild(greetingElement);
}