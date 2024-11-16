import { greet } from './modules/utils.js';
import anime from './lib/anime.es.js';

greet('World');

anime({
    targets: 'div',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
  });