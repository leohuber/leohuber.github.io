import main from './svg/main.svg';
import { greet, animateElement } from './modules/utils.js';
import anime from './lib/anime.es.js';
import u from './lib/umbrella.esm.js';

greet('World');

console.log(main);
console.log(Object.keys(main));
console.log(Object.values(main));

animateElement();